import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
    PiPlus,
    PiUsersThree,
    PiBuildings,
    PiMapPin,
    PiArrowRight,
    PiFileText,
    PiDownloadSimple,
    PiChartLineUp,
    PiDotsThreeVertical,
    PiTrash,
    PiArrowCounterClockwise
} from "react-icons/pi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DeleteEntityButton } from "@/components/dashboard/DeleteEntityButton";
import { trashCustomer, restoreCustomer } from "@/app/actions/customers";
import { TrashButton } from "./TrashButton"; // I will create this client component

interface PageProps {
    searchParams: Promise<{ view?: string }>
}

export default async function CustomersPage({ searchParams }: PageProps) {
    const { view } = await searchParams;
    const isTrashView = view === 'trash';

    const session = await auth();
    if (!session?.user) return redirect("/login");

    // ONE-TIME DATA MIGRATION: Move requested airlines to trash
    await prisma.customer.updateMany({
        where: {
            name: {
                in: ["Saudi Arabian Airlines", "Flyadeal", "FLY Deal"]
            },
            isTrashed: false
        },
        data: {
            isTrashed: true
        }
    });





    const customers = await prisma.customer.findMany({
        where: {
            isTrashed: isTrashView
        },
        orderBy: { name: 'asc' },
        include: {
            sales: {
                select: { totalAmount: true }
            },
            payments: {
                select: { amount: true }
            }
        }
    });

    const trashedCount = await prisma.customer.count({
        where: { isTrashed: true }
    });






    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <div className="space-y-8 animate-fade-in-up font-sans pb-12">
            <div className="flex items-end justify-between border-b border-gray-100 pb-2">
                <div className="flex gap-8">
                    <Link
                        href="/dashboard/accounting/customers"
                        className={cn(
                            "pb-4 text-sm font-bold tracking-tight transition-all relative",
                            !isTrashView ? "text-[#5e48b8]" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        Active Customers
                        {!isTrashView && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5e48b8]" />}
                    </Link>
                    <Link
                        href="/dashboard/accounting/customers?view=trash"
                        className={cn(
                            "pb-4 text-sm font-bold tracking-tight transition-all relative flex items-center gap-2",
                            isTrashView ? "text-rose-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        Trash Bin
                        {trashedCount > 0 && (
                            <span className="px-1.5 py-0.5 bg-rose-50 text-[10px] rounded-full text-rose-600 border border-rose-100">
                                {trashedCount}
                            </span>
                        )}
                        {isTrashView && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600" />}
                    </Link>
                </div>
                <Link href="/dashboard/accounting/customers/new">
                    <Button className="flex items-center gap-2 shadow-lg shadow-indigo-500/20 bg-[#5e48b8] hover:bg-[#4a369d] text-white">
                        <PiPlus className="text-lg" />
                        New Customer
                    </Button>
                </Link>
            </div>

            {customers.length === 0 ? (
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-16 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-indigo-50 mx-auto flex items-center justify-center">
                        {isTrashView ? (
                            <PiTrash className="text-4xl text-rose-400" />
                        ) : (
                            <PiUsersThree className="text-4xl text-[#5e48b8]" />
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            {isTrashView ? "Your trash bin is empty" : "No customers yet"}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            {isTrashView ? "Items moved to trash will appear here." : "Add your first customer to start tracking sales."}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#f9fafb] border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Invoiced</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Balance</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {customers.map((customer) => {
                                    const totalInvoiced = customer.sales.reduce((sum, s) => sum + s.totalAmount, 0);
                                    const totalPaid = customer.payments.reduce((sum, p) => sum + p.amount, 0);
                                    const balance = totalInvoiced - totalPaid;

                                    return (
                                        <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                                                        {customer.name.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <Link href={`/dashboard/accounting/customers/${customer.id}`} className="font-semibold text-gray-900 text-sm hover:text-indigo-600">
                                                            {customer.name}
                                                        </Link>
                                                        <div className="text-xs text-gray-500 flex items-center gap-1">
                                                            {customer.city || 'Juba'}, {customer.country || 'South Sudan'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-600 font-medium">
                                                {formatCurrency(totalInvoiced)}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={cn(
                                                    "text-sm font-bold font-mono",
                                                    balance > 0 ? "text-rose-600" : "text-emerald-600"
                                                )}>
                                                    {formatCurrency(balance)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end items-center gap-2">
                                                    {!isTrashView ? (
                                                        <>
                                                            <Link
                                                                href={`/dashboard/accounting/customers/${customer.id}/statement`}
                                                                className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold flex items-center gap-1 mr-2"
                                                            >
                                                                View Statement <PiArrowRight />
                                                            </Link>
                                                            <TrashButton id={customer.id} entityType="customer" />
                                                        </>
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <TrashButton id={customer.id} entityType="customer" isRestore />
                                                            <DeleteEntityButton
                                                                id={customer.id}
                                                                entityType="customer"
                                                                entityName={customer.name}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* Simple footer if needed */}
                    <div className="bg-[#f9fafb] px-6 py-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <span>{customers.length} {isTrashView ? 'Trashed' : 'Active'} Customers</span>
                        {isTrashView && customers.length > 0 && (
                            <span className="text-rose-400 normal-case font-medium italic">Items in trash can be restored or permanently removed</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
