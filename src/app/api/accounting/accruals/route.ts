/**
 * Accrual schedules — prepayments, accruals, and deferred income.
 *
 * GET  /api/accounting/accruals          — list schedules (optional ?type=ACCRUAL|PREPAYMENT|DEFERRED_INCOME)
 * POST /api/accounting/accruals          — create a schedule + generate recognition lines
 *
 * Recognition line amounts are distributed evenly across `periods`.
 * The last recognition absorbs any rounding remainder.
 *
 * Types:
 *   ACCRUAL         — expense accrued before invoice (Dr Expense / Cr Accrued Liabilities)
 *   PREPAYMENT      — expense paid in advance       (Dr Prepaid Asset / Cr Cash)
 *   DEFERRED_INCOME — income received in advance    (Dr Cash / Cr Deferred Revenue)
 */

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');

    const schedules = await (prisma as any).accrualSchedule.findMany({
        where: type ? { type } : undefined,
        include: {
            debitAccount: { select: { id: true, code: true, name: true } },
            creditAccount: { select: { id: true, code: true, name: true } },
            recognitions: { orderBy: { periodDate: 'asc' } }
        },
        orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(schedules);
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const {
        name, type, totalAmount, debitAccountId, creditAccountId,
        startDate, endDate, periods, periodType, sourceRef
    } = body;

    if (!name || !type || !totalAmount || !debitAccountId || !creditAccountId || !startDate || !periods) {
        return NextResponse.json({ error: "name, type, totalAmount, debitAccountId, creditAccountId, startDate, and periods are required" }, { status: 400 });
    }

    const validTypes = ['ACCRUAL', 'PREPAYMENT', 'DEFERRED_INCOME'];
    if (!validTypes.includes(type)) {
        return NextResponse.json({ error: `type must be one of: ${validTypes.join(', ')}` }, { status: 400 });
    }

    const total = Number(totalAmount);
    const perPeriod = Math.floor((total * 100) / periods) / 100;
    const remainder = Math.round((total - perPeriod * periods) * 100) / 100;

    // Generate recognition dates: one per period starting from startDate
    const recognitionLines = [];
    const start = new Date(startDate);
    for (let i = 0; i < periods; i++) {
        const periodDate = new Date(start);
        if ((periodType || 'MONTHLY') === 'MONTHLY') {
            periodDate.setMonth(start.getMonth() + i);
        } else if (periodType === 'QUARTERLY') {
            periodDate.setMonth(start.getMonth() + i * 3);
        } else if (periodType === 'WEEKLY') {
            periodDate.setDate(start.getDate() + i * 7);
        }
        const amount = i === periods - 1 ? perPeriod + remainder : perPeriod;
        recognitionLines.push({ periodDate, amount, status: 'PENDING' });
    }

    try {
        const schedule = await (prisma as any).accrualSchedule.create({
            data: {
                name,
                type,
                totalAmount: total,
                debitAccountId,
                creditAccountId,
                startDate: new Date(startDate),
                endDate: endDate ? new Date(endDate) : new Date(recognitionLines[recognitionLines.length - 1].periodDate),
                periods,
                periodType: periodType || 'MONTHLY',
                sourceRef: sourceRef || null,
                status: 'ACTIVE',
                createdBy: session.user.id,
                recognitions: { create: recognitionLines }
            },
            include: {
                recognitions: true,
                debitAccount: { select: { code: true, name: true } },
                creditAccount: { select: { code: true, name: true } }
            }
        });

        await (prisma as any).auditLog.create({
            data: {
                actorId: session.user.id,
                action: 'ACCRUAL_CREATE',
                entity: 'AccrualSchedule',
                entityId: schedule.id,
                after: { name, type, totalAmount: total, periods }
            }
        });

        return NextResponse.json(schedule, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
