import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { email: session.user.email },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const schedules = await prisma.schedule.findMany({
            include: {
                requisitionItem: {
                    include: {
                        requisition: true,
                    }
                },
                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                executions: {
                    orderBy: { scheduledFor: 'desc' },
                    take: 5,
                },
            },
            orderBy: { nextRun: 'asc' },
        });

        return NextResponse.json({ schedules });
    } catch (error) {
        console.error("Get schedules error:", error);
        return NextResponse.json(
            { error: "Failed to fetch schedules" },
            { status: 500 }
        );
    }
}
