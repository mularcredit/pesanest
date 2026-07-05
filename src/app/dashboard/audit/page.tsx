import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { AuditTrailClient } from "./AuditTrailClient";

export const dynamic = 'force-dynamic';

export default async function AuditPage() {
    const session = await auth();
    if (!session?.user) return redirect("/login");

    const role = (session.user as any).role;
    const isAdmin = role === 'SYSTEM_ADMIN';
    const isFinance = role === 'FINANCE_APPROVER' || role === 'FINANCE_TEAM';
    if (!isAdmin && !isFinance) redirect("/dashboard");

    const [logs, total, entityGroups, actionGroups] = await Promise.all([
        (prisma as any).auditLog.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
        }),
        (prisma as any).auditLog.count(),
        (prisma as any).auditLog.groupBy({ by: ['entity'], orderBy: { entity: 'asc' } }),
        (prisma as any).auditLog.groupBy({ by: ['action'], orderBy: { action: 'asc' } }),
    ]);

    return (
        <div className="space-y-5 pb-24">
            <div>
                <h1 className="text-[20px] font-[600] text-gray-900 tracking-tight">Audit Trail</h1>
                <p className="text-[12.5px] text-gray-400 mt-0.5">
                    {total.toLocaleString()} event{total !== 1 ? 's' : ''} recorded
                </p>
            </div>
            <AuditTrailClient
                initialLogs={logs}
                initialTotal={total}
                entities={entityGroups.map((e: any) => e.entity)}
                actions={actionGroups.map((a: any) => a.action)}
            />
        </div>
    );
}
