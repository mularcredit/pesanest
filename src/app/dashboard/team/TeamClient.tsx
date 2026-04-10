'use client';

import { useState, useMemo } from 'react';
import { BiPlus, BiPencil, BiTrash } from 'react-icons/bi';
import { PiBuildings, PiMapPin, PiMagnifyingGlass, PiUserCircle, PiBriefcase, PiShieldCheck, PiEnvelopeSimple, PiPhone, PiCheckCircle, PiXCircle, PiDotsThree } from 'react-icons/pi';
import { UserModal } from './UserModal';
import { toggleUserStatus, deleteUser } from './actions';
import { useToast } from '@/components/ui/ToastProvider';
import { useRouter } from 'next/navigation';

const ROLE_LABELS: Record<string, string> = {
    EMPLOYEE: 'Employee',
    MANAGER: 'Manager',
    TEAM_LEADER: 'Branch Manager',
    REGIONAL_MANAGER: 'Regional Manager',
    FINANCE_WRITER: 'Finance Writer',
    FINANCE_APPROVER: 'Finance Approver',
    FINANCE_TEAM: 'Finance Team',
    SYSTEM_ADMIN: 'System Admin',
    CUSTOM: 'Custom Role',
};

interface TeamClientProps {
    initialUsers: any[];
}

export function TeamClient({ initialUsers }: TeamClientProps) {
    const [users, setUsers] = useState(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { showToast } = useToast();
    const router = useRouter();

    const filteredUsers = useMemo(() => {
        if (!searchQuery.trim()) return users;
        const query = searchQuery.toLowerCase();
        return users.filter(u => 
            u.name.toLowerCase().includes(query) || 
            u.email.toLowerCase().includes(query) ||
            (u.department && u.department.toLowerCase().includes(query)) ||
            (u.position && u.position.toLowerCase().includes(query)) ||
            (ROLE_LABELS[u.role] && ROLE_LABELS[u.role].toLowerCase().includes(query))
        );
    }, [users, searchQuery]);

    const handleCreate = () => {
        setSelectedUser(null);
        setIsModalOpen(true);
    };

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleToggleStatus = async (user: any) => {
        try {
            const newStatus = !user.isActive;
            const res = await toggleUserStatus(user.id, newStatus);
            if (res.success) {
                showToast(`User ${newStatus ? 'activated' : 'suspended'} successfully`, 'success');
                router.refresh(); // Refresh server data
                // Optimistic update
                setUsers(users.map(u => u.id === user.id ? { ...u, isActive: newStatus, accountStatus: newStatus ? 'ACTIVE' : 'SUSPENDED' } : u));
            } else {
                showToast(res.error || 'Failed to update status', 'error');
            }
        } catch (error) {
            showToast('An error occurred', 'error');
        }
    };

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <p className="text-gds-text-muted text-sm font-medium tracking-wide">
                        User roles, permissions & department structure
                    </p>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input 
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#29258D]/20 focus:border-[#29258D] transition-all"
                        />
                    </div>
                    <button
                        onClick={handleCreate}
                        className="gds-btn-premium flex items-center gap-1.5 shrink-0 py-2 px-4 !rounded-[10px] text-[13px] font-semibold"
                    >
                        <BiPlus className="text-base" />
                        <span>Create Account</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col group relative overflow-hidden">
                        
                        {/* Hover Actions */}
                        <div className="absolute top-3 right-3 z-10 hidden group-hover:flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-gray-100">
                            <button
                                onClick={() => handleEdit(user)}
                                className="p-1.5 rounded-md text-gray-400 hover:bg-indigo-50 hover:text-[#29258D] transition-colors"
                                title="Edit User"
                            >
                                <BiPencil size={16} />
                            </button>
                            <button
                                onClick={async () => {
                                    if (confirm('Are you sure you want to delete this user?')) {
                                        const res = await deleteUser(user.id);
                                        if (res.success) {
                                            showToast('User deleted successfully', 'success');
                                            setUsers(users.filter(u => u.id !== user.id));
                                            router.refresh();
                                        } else {
                                            showToast(res.error || 'Failed to delete user', 'error');
                                        }
                                    }
                                }}
                                className="p-1.5 rounded-md text-gray-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                title="Delete User"
                            >
                                <BiTrash size={16} />
                            </button>
                        </div>

                        {/* Card Header */}
                        <div className="p-5 border-b border-gray-200 flex items-start gap-4 z-10 bg-white">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-[#29258D]/5 flex items-center justify-center shrink-0 border border-[#29258D]/10">
                                <PiUserCircle className="text-3xl text-[#29258D]" />
                            </div>
                            <div className="flex-1 min-w-0 pt-1">
                                <h3 className="text-sm font-bold text-gray-900 truncate pr-8">{user.name}</h3>
                                <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500 truncate">
                                    <PiEnvelopeSimple className="shrink-0" />
                                    <span className="truncate">{user.email}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 space-y-3.5 bg-gray-50/30">
                            {/* Role Tag */}
                            <div>
                                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                    user.role === 'SYSTEM_ADMIN' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                    user.role === 'TEAM_LEADER' || user.role === 'REGIONAL_MANAGER' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                                    'bg-slate-100 text-slate-600 border-slate-200'
                                }`}>
                                    <PiShieldCheck size={14} className="shrink-0" />
                                    <span>{user.customRole?.name || ROLE_LABELS[user.role] || user.role}</span>
                                </div>
                            </div>

                            {/* Job Info */}
                            <div className="space-y-2.5 mt-4">
                                {(user.department || user.position) && (
                                    <div className="flex items-start gap-2.5 text-xs text-gray-600">
                                        <PiBriefcase className="text-gray-400 text-sm shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            {user.department && <span className="font-medium text-gray-700">{user.department}</span>}
                                            {user.position && <span className="text-gray-500">{user.position}</span>}
                                        </div>
                                    </div>
                                )}

                                {user.leadBranch && (
                                    <div className="flex items-center gap-2.5 text-xs text-gray-600">
                                        <PiBuildings className="text-[#29258D] text-sm shrink-0" />
                                        <span className="font-medium text-[#29258D] truncate">
                                            {user.leadBranch.name} <span className="opacity-70">({user.leadBranch.code})</span>
                                        </span>
                                    </div>
                                )}
                                
                                {user.phoneNumber && (
                                    <div className="flex items-center gap-2.5 text-xs text-gray-500">
                                        <PiPhone className="text-gray-400 text-sm shrink-0" />
                                        <span>{user.phoneNumber}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-4 bg-white border-t border-gray-200 flex justify-between items-center z-10 w-full relative">
                            <div className="flex items-center gap-1.5">
                                <div className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                                <span className={`text-[11px] font-semibold uppercase tracking-wider ${user.isActive ? 'text-emerald-700' : 'text-rose-700'}`}>
                                    {user.accountStatus}
                                </span>
                            </div>
                            
                            <button
                                onClick={() => handleToggleStatus(user)}
                                className={`textxs px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${user.isActive
                                    ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                    }`}
                            >
                                {user.isActive ? 'Suspend' : 'Activate'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <UserModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedUser(null);
                }}
                user={selectedUser}
            />
        </div>
    );
}
