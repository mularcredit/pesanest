import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/audit?entity=&action=&actorId=&from=&to=&page=1&limit=50
export async function GET(req: Request) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true, customRole: { select: { isSystem: true } } }
    });
    const isAdmin = user?.role === 'SYSTEM_ADMIN' || user?.customRole?.isSystem;
    const isFinance = (user as any)?.role === 'FINANCE_APPROVER' || (user as any)?.role === 'FINANCE_TEAM';
    if (!isAdmin && !isFinance) {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, Number(searchParams.get('page') || '1'));
    const limit = Math.min(Number(searchParams.get('limit') || '50'), 200);
    const skip = (page - 1) * limit;

    const where: any = {};
    if (searchParams.get('entity')) where.entity = searchParams.get('entity');
    if (searchParams.get('action')) where.action = { contains: searchParams.get('action'), mode: 'insensitive' };
    if (searchParams.get('actorId')) where.actorId = searchParams.get('actorId');
    if (searchParams.get('from') || searchParams.get('to')) {
        where.createdAt = {};
        if (searchParams.get('from')) where.createdAt.gte = new Date(searchParams.get('from')!);
        if (searchParams.get('to')) where.createdAt.lte = new Date(searchParams.get('to')!);
    }

    const [total, logs] = await Promise.all([
        (prisma as any).auditLog.count({ where }),
        (prisma as any).auditLog.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit })
    ]);

    // Distinct values for filters
    const [entities, actions] = await Promise.all([
        (prisma as any).auditLog.groupBy({ by: ['entity'], orderBy: { entity: 'asc' } }),
        (prisma as any).auditLog.groupBy({ by: ['action'], orderBy: { action: 'asc' } }),
    ]);

    return NextResponse.json({
        logs,
        total,
        page,
        pages: Math.ceil(total / limit),
        filters: {
            entities: entities.map((e: any) => e.entity),
            actions: actions.map((a: any) => a.action),
        }
    });
}
