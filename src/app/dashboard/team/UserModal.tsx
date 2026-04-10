'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    PiX, 
    PiCheckCircle, 
    PiWarningCircle,
    PiUserPlus,
    PiSpinner,
    PiUser,
    PiEnvelope,
    PiBriefcase,
    PiLock,
    PiArrowsClockwise,
    PiMapPin,
    PiBuildings,
    PiMagnifyingGlass,
    PiCaretDown,
    PiCaretUp,
    PiBuilding
} from 'react-icons/pi';
import { useToast } from "@/components/ui/ToastProvider";
import { createUser, updateUser } from "./actions";
import { useRouter } from "next/navigation";

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: any;
}

const STANDARD_ROLES = [
    { value: 'EMPLOYEE', label: 'Employee' },
    { value: 'MANAGER', label: 'Manager' },
    { value: 'TEAM_LEADER', label: 'Branch Manager' },
    { value: 'REGIONAL_MANAGER', label: 'Regional Manager' },
    { value: 'FINANCE_WRITER', label: 'Finance Writer' },
    { value: 'FINANCE_APPROVER', label: 'Finance Approver' },
    { value: 'SYSTEM_ADMIN', label: 'System Admin' },
];

const STANDARD_DEPARTMENTS = [
    'Administration',
    'Customer Service',
    'Engineering & IT',
    'Finance & Accounting',
    'Human Resources (HR)',
    'Legal & Compliance',
    'Logistics & Supply Chain',
    'Marketing',
    'Operations',
    'Product Management',
    'Sales',
    'Other'
];

export function UserModal({ isOpen, onClose, user }: UserModalProps) {
    const { showToast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [roles, setRoles] = useState<any[]>([]);
    const [branches, setBranches] = useState<any[]>([]);
    const [regions, setRegions] = useState<any[]>([]);

    const [selectedRole, setSelectedRole] = useState<string>(
        user?.customRoleId ? `custom:${user.customRoleId}` : (user?.role || 'EMPLOYEE')
    );

    useEffect(() => {
        setMounted(true);
        // Fetch custom roles
        fetch('/api/roles')
            .then(res => res.json())
            .then(data => { if (data.roles) setRoles(data.roles); })
            .catch(err => console.error("Failed to fetch roles", err));

        // Fetch branches
        fetch('/api/branches')
            .then(res => res.json())
            .then(data => { if (data.branches) setBranches(data.branches); })
            .catch(err => console.error("Failed to fetch branches", err));

        // Fetch regions
        fetch('/api/regions')
            .then(res => res.json())
            .then(data => { if (data.regions) setRegions(data.regions); })
            .catch(err => console.error("Failed to fetch regions", err));
    }, []);

    // Reset role when user prop changes
    useEffect(() => {
        setSelectedRole(user?.customRoleId ? `custom:${user.customRoleId}` : (user?.role || 'EMPLOYEE'));
    }, [user]);

    const [password, setPassword] = useState("");
    const [selectedBranchId, setSelectedBranchId] = useState<string>(user?.branchId || '');
    const [selectedRegionId, setSelectedRegionId] = useState<string>(user?.regionId || '');
    const [selectedDepartment, setSelectedDepartment] = useState<string>(user?.department || '');
    const [branchSearch, setBranchSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");
    const [departmentSearch, setDepartmentSearch] = useState("");
    const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
    const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
    const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);

    const filteredBranches = branches.filter(b => 
        b.name.toLowerCase().includes(branchSearch.toLowerCase()) || 
        b.code.toLowerCase().includes(branchSearch.toLowerCase())
    );

    const filteredRegions = regions.filter(r => 
        r.name.toLowerCase().includes(regionSearch.toLowerCase())
    );

    const filteredDepartments = STANDARD_DEPARTMENTS.filter(d => 
        d.toLowerCase().includes(departmentSearch.toLowerCase())
    );

    const generatePassword = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let newPassword = "";
        for (let i = 0; i < 12; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(newPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);

            // Handle Custom Roles logic
            const rawRole = formData.get('role') as string;
            if (rawRole.startsWith('custom:')) {
                const customId = rawRole.split(':')[1];
                formData.set('role', 'CUSTOM');
                formData.set('customRoleId', customId);
            } else {
                formData.delete('customRoleId');
            }

            let res;
            if (user) {
                res = await updateUser(user.id, formData);
            } else {
                res = await createUser(formData);
            }

            if (res.success) {
                showToast(`User ${user ? 'updated' : 'created'} successfully`, "success");
                router.refresh();
                onClose();
            } else {
                showToast(res.error || "Operation failed", "error");
            }
        } catch (error) {
            showToast("An error occurred", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    const showBranchSelector = selectedRole === 'TEAM_LEADER';
    const showRegionSelector = selectedRole === 'REGIONAL_MANAGER';

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-white/40 backdrop-blur-xl"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white border border-gray-200 w-full max-w-xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="h-[88px] px-8 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100/50 text-[#29258D]">
                                    <PiUserPlus className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {user ? 'Edit Team Member' : 'Create User Account'}
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 font-medium">
                                        {user ? 'Update user details and permissions' : 'Create a new account and set login credentials'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2.5 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all"
                            >
                                <PiX className="text-xl" />
                            </button>
                        </div>

                        {/* Body */}
                        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto custom-scrollbar bg-[#f8f9fa] p-8 space-y-6">

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5">Full Name *</label>
                                    <div className="relative">
                                        <PiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="name"
                                            defaultValue={user?.name}
                                            required
                                            className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all"
                                            placeholder="e.g. Jane Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5">Email address *</label>
                                    <div className="relative">
                                        <PiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="email"
                                            type="email"
                                            defaultValue={user?.email}
                                            required
                                            className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                </div>

                                {!user && (
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5 flex justify-between">
                                            <span>Initial Password *</span>
                                            <button
                                                type="button"
                                                onClick={generatePassword}
                                                className="text-[#29258D] hover:underline flex items-center gap-1 normal-case"
                                            >
                                                <PiArrowsClockwise /> Generate Strong Password
                                            </button>
                                        </label>
                                        <div className="relative">
                                            <PiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                name="password"
                                                type="text"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all font-mono"
                                                placeholder="Click generate or type..."
                                            />
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-1 pl-1">
                                            Must be at least 8 characters. Share this with the user securely.
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5">Role *</label>
                                        <div className="relative">
                                            <select
                                                name="role"
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all appearance-none cursor-pointer"
                                            >
                                                <optgroup label="Standard Roles">
                                                    {STANDARD_ROLES.map(r => (
                                                        <option key={r.value} value={r.value}>{r.label}</option>
                                                    ))}
                                                </optgroup>
                                                {roles.length > 0 && (
                                                    <optgroup label="Custom Roles">
                                                        {roles.map((role) => (
                                                            <option key={role.id} value={`custom:${role.id}`}>
                                                                {role.name}
                                                            </option>
                                                        ))}
                                                    </optgroup>
                                                )}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5">Department</label>
                                        <div className="relative">
                                            <input type="hidden" name="department" value={selectedDepartment} />
                                            <button
                                                type="button"
                                                onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
                                                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all flex justify-between items-center"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <PiBriefcase className="absolute left-3 text-gray-400" />
                                                    <span>{selectedDepartment || 'Select a department'}</span>
                                                </div>
                                                <PiCaretDown className={`text-gray-400 transition-transform ${isDepartmentDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isDepartmentDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
                                                    >
                                                        <div className="p-2 border-b border-gray-100 relative">
                                                            <PiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                placeholder="Search departments..."
                                                                value={departmentSearch}
                                                                onChange={(e) => setDepartmentSearch(e.target.value)}
                                                                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </div>
                                                        <div className="max-h-52 overflow-y-auto custom-scrollbar">
                                                            {filteredDepartments.length > 0 ? (
                                                                filteredDepartments.map((dept) => (
                                                                    <button
                                                                        key={dept}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setSelectedDepartment(dept);
                                                                            setIsDepartmentDropdownOpen(false);
                                                                            setDepartmentSearch("");
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#29258D]/5 transition-colors ${selectedDepartment === dept ? 'bg-[#29258D]/10 text-[#29258D] font-semibold' : 'text-gray-700'}`}
                                                                    >
                                                                        {dept}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <div className="p-4 text-center text-sm text-gray-500">No departments found.</div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Branch selector – visible when Branch Manager is selected */}
                                {showBranchSelector && (
                                    <div>
                                        <label className="block text-xs font-semibold text-[#29258D] pl-1 mb-1.5 flex items-center gap-1">
                                            <PiBuildings className="text-sm" /> Assign to Branch *
                                        </label>
                                        <div className="relative">
                                            <input type="hidden" name="branchId" value={selectedBranchId} required />
                                            <button
                                                type="button"
                                                onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
                                                className="w-full bg-white border border-[#29258D]/30 rounded-lg px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all flex justify-between items-center"
                                            >
                                                <span>
                                                    {selectedBranchId 
                                                        ? (() => {
                                                            const b = branches.find(br => br.id === selectedBranchId);
                                                            return b ? `${b.name} (${b.code}) — ${b.region?.name}` : '— Select a branch —';
                                                        })()
                                                        : '— Select a branch —'}
                                                </span>
                                                <PiCaretDown className={`text-gray-400 transition-transform ${isBranchDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isBranchDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
                                                    >
                                                        <div className="p-2 border-b border-gray-100 relative">
                                                            <PiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                placeholder="Search branches..."
                                                                value={branchSearch}
                                                                onChange={(e) => setBranchSearch(e.target.value)}
                                                                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </div>
                                                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                                            {filteredBranches.length > 0 ? (
                                                                filteredBranches.map((b) => (
                                                                    <button
                                                                        key={b.id}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setSelectedBranchId(b.id);
                                                                            setIsBranchDropdownOpen(false);
                                                                            setBranchSearch("");
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#29258D]/5 transition-colors ${selectedBranchId === b.id ? 'bg-[#29258D]/10 text-[#29258D] font-semibold' : 'text-gray-700'}`}
                                                                    >
                                                                        {b.name} ({b.code}) — {b.region?.name}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <div className="p-4 text-center text-sm text-gray-500">No branches found.</div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <p className="text-[10px] text-[#29258D]/70 mt-1 pl-1">
                                            This user will be set as the team leader of the selected branch.
                                        </p>
                                    </div>
                                )}

                                {/* Region selector – visible when Regional Manager is selected */}
                                {showRegionSelector && (
                                    <div>
                                        <label className="block text-xs font-semibold text-[#29258D] pl-1 mb-1.5 flex items-center gap-1">
                                            <PiMapPin className="text-sm" /> Assign to Region *
                                        </label>
                                        <div className="relative">
                                            <input type="hidden" name="regionId" value={selectedRegionId} required />
                                            <button
                                                type="button"
                                                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                                                className="w-full bg-white border border-[#29258D]/30 rounded-lg px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all flex justify-between items-center"
                                            >
                                                <span>
                                                    {selectedRegionId
                                                        ? (() => {
                                                            const r = regions.find(reg => reg.id === selectedRegionId);
                                                            return r ? `${r.name}` : '— Select a region —';
                                                        })()
                                                        : '— Select a region —'}
                                                </span>
                                                <PiCaretDown className={`text-gray-400 transition-transform ${isRegionDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isRegionDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
                                                    >
                                                        <div className="p-2 border-b border-gray-100 relative">
                                                            <PiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                placeholder="Search regions..."
                                                                value={regionSearch}
                                                                onChange={(e) => setRegionSearch(e.target.value)}
                                                                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#29258D]"
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </div>
                                                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                                            {filteredRegions.length > 0 ? (
                                                                filteredRegions.map((r) => (
                                                                    <button
                                                                        key={r.id}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setSelectedRegionId(r.id);
                                                                            setIsRegionDropdownOpen(false);
                                                                            setRegionSearch("");
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#29258D]/5 transition-colors ${selectedRegionId === r.id ? 'bg-[#29258D]/10 text-[#29258D] font-semibold' : 'text-gray-700'}`}
                                                                    >
                                                                        {r.name} <span className="text-gray-400 text-xs ml-1">({r.branches?.length ?? 0} branches)</span>
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <div className="p-4 text-center text-sm text-gray-500">No regions found.</div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <p className="text-[10px] text-[#29258D]/70 mt-1 pl-1">
                                            This user will be designated as the manager of the selected region.
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 pl-1 mb-1.5">Position</label>
                                    <input
                                        name="position"
                                        defaultValue={user?.position}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#29258D] focus:border-[#29258D] transition-all"
                                        placeholder="e.g. Regional Manager"
                                    />
                                </div>
                            </div>

                            {/* Form Footer */}
                            <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2.5 rounded-md text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2.5 rounded-md text-xs font-medium text-white bg-[#29258D] hover:bg-[#29258D]/90 transition-all flex items-center gap-2 disabled:opacity-50 shadow-none font-bold"
                                >
                                    {isSubmitting ? <PiSpinner className="animate-spin" /> : <PiCheckCircle />}
                                    {user ? 'Save Changes' : 'Create Account'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
