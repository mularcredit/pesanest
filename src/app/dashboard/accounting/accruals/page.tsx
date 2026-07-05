import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { AccrualsClient } from './AccrualsClient';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Accrual Schedules | Pesanest' };

export default async function AccrualsPage() {
    const session = await auth();
    if (!session?.user) return redirect('/login');

    const [schedules, accounts] = await Promise.all([
        (prisma as any).accrualSchedule.findMany({
            include: {
                debitAccount: { select: { id: true, code: true, name: true } },
                creditAccount: { select: { id: true, code: true, name: true } },
                recognitions: { orderBy: { periodDate: 'asc' } }
            },
            orderBy: { createdAt: 'desc' }
        }),
        prisma.account.findMany({
            where: { isActive: true },
            orderBy: { code: 'asc' },
            select: { id: true, code: true, name: true, type: true }
        })
    ]);

    return (
        <div className="p-6 md:p-8 space-y-8 min-h-screen">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Accrual Schedules</h1>
                <p className="text-gray-500">Manage prepayments, accruals, and deferred income recognition.</p>
            </div>
            <AccrualsClient schedules={schedules} accounts={accounts} />
        </div>
    );
}
