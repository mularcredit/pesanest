'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
    PiBuildings,
    PiEnvelopeSimple,
    PiPhone,
    PiGlobe,
    PiTagBold,
    PiCurrencyDollar,
    PiPlus,
    PiTrash,
    PiArrowCounterClockwise,
    PiWarningCircle
} from "react-icons/pi"
import { CreateVendorModal } from "@/components/dashboard/CreateVendorModal"
import { EditVendorModal } from "@/components/dashboard/EditVendorModal"
import { DeleteEntityButton } from "@/components/dashboard/DeleteEntityButton"
import { trashVendor, restoreVendor } from "@/app/actions/vendors"
import { useToast } from "@/components/ui/ToastProvider"

interface VendorsClientProps {
    vendors: any[]
}

export function VendorsClient({ vendors }: VendorsClientProps) {
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [editingVendor, setEditingVendor] = useState<any>(null)
    const [activeTab, setActiveTab] = useState<"active" | "trash">("active")
    const { showToast } = useToast()

    const filteredVendors = vendors.filter(vendor => 
        activeTab === "active" ? !vendor.isTrashed : vendor.isTrashed
    )

    const handleTrash = async (id: string) => {
        const res = await trashVendor(id)
        if (res.success) showToast(res.message, "success")
        else showToast(res.message, "error")
    }

    const handleRestore = async (id: string) => {
        const res = await restoreVendor(id)
        if (res.success) showToast(res.message, "success")
        else showToast(res.message, "error")
    }

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex gap-8">
                    <button
                        onClick={() => setActiveTab("active")}
                        className={cn(
                            "pb-4 text-sm font-bold tracking-tight transition-all relative",
                            activeTab === "active" ? "text-[#29258D]" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        Active Vendors
                        {activeTab === "active" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#29258D]" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("trash")}
                        className={cn(
                            "pb-4 text-sm font-bold tracking-tight transition-all relative flex items-center gap-2",
                            activeTab === "trash" ? "text-rose-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        Trash Bin
                        <span className="px-1.5 py-0.5 bg-gray-100 text-[10px] rounded-full text-gray-500">
                            {vendors.filter(v => v.isTrashed).length}
                        </span>
                        {activeTab === "trash" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600" />}
                    </button>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsCreateOpen(true)}
                        className="gds-btn-premium text-xs font-bold tracking-wider px-4 py-2 !rounded-[5px] flex items-center gap-1.5"
                    >
                        <PiPlus className="text-sm" />
                        Add vendor
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVendors.length === 0 ? (
                    <div className="col-span-full py-20 text-center text-gds-text-muted italic bg-white border border-dashed border-gray-200 rounded-xl flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                            {activeTab === "active" ? <PiBuildings size={24} /> : <PiTrash size={24} />}
                        </div>
                        <p>{activeTab === "active" ? "No vendors found in the system." : "Trash bin is empty."}</p>
                    </div>
                ) : (
                    filteredVendors.map((vendor) => (
                        <div key={vendor.id} className={cn(
                            "bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col group transition-all",
                            vendor.isTrashed ? "opacity-75 grayscale-[0.2]" : "hover:shadow-lg hover:border-indigo-200"
                        )}>
                            {/* Header - Matching "Ready to Pay" Batch Header */}
                            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                                        <img
                                            src="/online-shopping.png"
                                            alt="Vendor"
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-gray-900 truncate">{vendor.name}</h3>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{vendor.category || 'Vendor'}</p>
                                    </div>
                                </div>
                                <span className={cn(
                                    "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border",
                                    vendor.isTrashed 
                                        ? "bg-rose-50 text-rose-700 border-rose-200"
                                        : vendor.isActive
                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            : "bg-gray-50 text-gray-500 border-gray-200"
                                )}>
                                    {vendor.isTrashed ? "Trashed" : vendor.isActive ? "Active" : "Inactive"}
                                </span>
                            </div>

                            {/* Body - Clean & Premium */}
                            <div className="px-4 py-6 flex-1 flex flex-col justify-center min-h-[120px]">
                                <div className="mb-4">
                                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors line-clamp-3 leading-relaxed">
                                        {vendor.description || 'No description available for this vendor.'}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    {vendor.email && (
                                        <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                                            <PiEnvelopeSimple className="text-gray-400" />
                                            <span className="truncate">{vendor.email}</span>
                                        </p>
                                    )}
                                    {vendor.phone && (
                                        <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                                            <PiPhone className="text-gray-400" />
                                            <span>{vendor.phone}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50/30 mt-auto">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {!vendor.isTrashed ? (
                                            <>
                                                <button
                                                    onClick={() => setEditingVendor(vendor)}
                                                    className="py-2 px-6 rounded-lg text-xs font-bold text-gray-500 bg-transparent border border-gray-200 hover:bg-black/5 hover:border-black/20 hover:text-black transition-all"
                                                >
                                                    Manage
                                                </button>
                                                <button
                                                    onClick={() => handleTrash(vendor.id)}
                                                    className="p-2 text-gray-400 hover:text-rose-600 transition-colors"
                                                    title="Move to Trash"
                                                >
                                                    <PiTrash className="text-lg" />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleRestore(vendor.id)}
                                                    className="py-2 px-4 rounded-lg text-xs font-bold text-emerald-600 bg-white border border-emerald-200 hover:bg-emerald-50 transition-all flex items-center gap-2"
                                                >
                                                    <PiArrowCounterClockwise className="text-sm" /> Restore
                                                </button>
                                                <DeleteEntityButton
                                                    id={vendor.id}
                                                    entityType="vendor"
                                                    entityName={vendor.name}
                                                    className="p-2 text-rose-400 hover:text-rose-700 bg-rose-50/50 rounded-lg"
                                                />
                                            </>
                                        )}
                                    </div>
                                    {!vendor.isTrashed && vendor.website && (
                                        <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-[#29258D] transition-colors" title="Visit Website">
                                            <PiGlobe className="text-lg" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )})}
            </div>

            <CreateVendorModal
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
            />

            {editingVendor && (
                <EditVendorModal
                    isOpen={!!editingVendor}
                    vendor={editingVendor}
                    onClose={() => setEditingVendor(null)}
                />
            )}
        </div>
    )
}
