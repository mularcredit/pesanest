import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { SecurityClient } from "./SecurityClient";

export const dynamic = 'force-dynamic';

export default async function SecurityPage() {
    const session = await auth();
    if (!session?.user) return redirect("/login");

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { totpEnabled: true, failedLoginAttempts: true, lockedUntil: true } as any
    }) as any;

    const loginEvents = await (prisma as any).loginEvent.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
        take: 20
    });

    return (
        <div className="space-y-6 pb-24 max-w-2xl">
            <div>
                <h1 className="text-[20px] font-[600] text-gray-900 tracking-tight">Account Security</h1>
                <p className="text-[12.5px] text-gray-400 mt-0.5">Two-factor authentication and login history</p>
            </div>
            <SecurityClient
                totpEnabled={user?.totpEnabled || false}
                loginEvents={loginEvents}
            />
        </div>
    );
}
