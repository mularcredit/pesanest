/**
 * POST /api/accounting/accruals/[id]/run
 *
 * Posts all PENDING AccrualRecognition lines whose periodDate falls on or before
 * today (or the supplied ?asOf=YYYY-MM-DD date). Each recognition creates a
 * proper journal entry via AccountingEngine.postJournalEntry so that period
 * enforcement, audit logging, and sequence numbering apply.
 *
 * Body: { asOf?: string }  (defaults to today)
 */

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { AccountingEngine } from "@/lib/accounting/accounting-engine";
import { NextResponse } from "next/server";

export async function POST(req: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const session = await auth();
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const asOf = body.asOf ? new Date(body.asOf) : new Date();

    const schedule = await (prisma as any).accrualSchedule.findUnique({
        where: { id: params.id },
        include: {
            debitAccount: true,
            creditAccount: true,
            recognitions: {
                where: { status: 'PENDING', periodDate: { lte: asOf } },
                orderBy: { periodDate: 'asc' }
            }
        }
    });

    if (!schedule) return NextResponse.json({ error: "Accrual schedule not found" }, { status: 404 });
    if (schedule.status !== 'ACTIVE') {
        return NextResponse.json({ error: `Schedule is ${schedule.status}` }, { status: 400 });
    }

    const pending = schedule.recognitions;
    if (!pending.length) {
        return NextResponse.json({ posted: 0, message: "No pending recognitions due" });
    }

    let posted = 0;
    for (const rec of pending) {
        const amount = Number(rec.amount);
        const entry = await AccountingEngine.postJournalEntry({
            date: rec.periodDate,
            description: `${schedule.name} — recognition ${new Date(rec.periodDate).toISOString().slice(0, 7)}`,
            reference: `ACCRUAL-${schedule.id}-${new Date(rec.periodDate).toISOString().slice(0, 7)}`,
            userId: session.user.id,
            lines: [
                { accountId: schedule.debitAccountId, debit: amount, credit: 0 },
                { accountId: schedule.creditAccountId, debit: 0, credit: amount }
            ]
        });

        await (prisma as any).accrualRecognition.update({
            where: { id: rec.id },
            data: { status: 'POSTED', journalEntryId: entry.id }
        });
        posted++;
    }

    // Mark schedule complete if all recognitions are now posted
    const remaining = await (prisma as any).accrualRecognition.count({
        where: { scheduleId: params.id, status: 'PENDING' }
    });
    if (remaining === 0) {
        await (prisma as any).accrualSchedule.update({
            where: { id: params.id },
            data: { status: 'COMPLETED' }
        });
    }

    return NextResponse.json({ posted, remaining });
}
