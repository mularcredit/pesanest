"use client";

import { useState, useEffect } from "react";
import {
    PiCalendarBlank,
    PiPlus,
    PiClock,
    PiCheckCircle,
    PiXCircle,
    PiArrowClockwise,
    PiPencil,
    PiTrash,
    PiToggleLeft,
    PiToggleRight,
    PiCurrencyDollar,
    PiBuildings,
    PiTag,
    PiPlayCircle,
    PiLightning,
    PiFileText,
    PiLink,
} from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import { FormModal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { DatePicker } from "@/components/ui/DatePicker";
import { Select } from "@/components/ui/Select";
import { format, parseISO } from "date-fns";

interface Schedule {
    id: string;
    name: string;
    description?: string;
    type: string;
    frequency: string;
    startDate: string;
    endDate?: string;
    nextRun: string;
    amount: number;
    currency: string;
    isActive: boolean;
    vendor?: { id: string; name: string };
    category?: { id: string; name: string };
    createdBy: { id: string; name: string; email: string };
    executions: Array<{
        id: string;
        scheduledFor: string;
        executedAt?: string;
        status: string;
    }>;
}

interface Vendor {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
}

export default function SchedulesPage() {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const { showToast } = useToast();

    useEffect(() => {
        fetchSchedules();
        fetchVendors();
        fetchCategories();
        // Auto-process overdue schedules when page loads
        processOverdueSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/schedules');
            if (res.ok) {
                const data = await res.json();
                setSchedules(data.schedules || []);
            }
        } catch (error) {
            console.error('Failed to fetch schedules:', error);
            showToast('Failed to load schedules', 'error');
        } finally {
            setLoading(false);
        }
    };

    const fetchVendors = async () => {
        try {
            const res = await fetch('/api/vendors');
            if (res.ok) {
                const data = await res.json();
                setVendors(data.vendors || []);
            }
        } catch (error) {
            console.error('Failed to fetch vendors:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/categories');
            if (res.ok) {
                const data = await res.json();
                setCategories(data.categories || []);
            }
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };
    const handleToggleSchedule = async (id: string) => {
        try {
            const res = await fetch(`/api/schedules/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'toggle' }),
            });

            if (res.ok) {
                showToast('Schedule updated', 'success');
                fetchSchedules();
            }
        } catch (error) {
            showToast('Failed to update schedule', 'error');
        }
    };

    const processOverdueSchedules = async () => {
        try {
            const res = await fetch('/api/schedules/process', { method: 'POST' });
            if (res.ok) {
                const data = await res.json();
                if (data.processed > 0) {
                    showToast(`${data.processed} overdue schedule(s) auto-processed — requisitions created`, 'success');
                    fetchSchedules();
                }
            }
        } catch {
            // Silently fail auto-processing
        }
    };

    const handleRunNow = async (id: string, name: string) => {
        try {
            const res = await fetch(`/api/schedules/${id}/execute`, { method: 'POST' });
            const data = await res.json();
            if (res.ok) {
                showToast(`✅ "${name}" ran successfully — Requisition created!`, 'success');
                fetchSchedules();
            } else {
                showToast(data.error || 'Failed to execute schedule', 'error');
            }
        } catch {
            showToast('Failed to run schedule', 'error');
        } finally {
        }
    };

    const handleDeleteSchedule = async (id: string) => {
        if (!confirm('Are you sure you want to delete this schedule?')) return;

        try {
            const res = await fetch(`/api/schedules/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                showToast('Schedule deleted', 'success');
                fetchSchedules();
            }
        } catch (error) {
            showToast('Failed to delete schedule', 'error');
        }
    };



    const getFrequencyColor = (frequency: string) => {
        switch (frequency) {
            case 'DAILY': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'WEEKLY': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'MONTHLY': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'QUARTERLY': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'YEARLY': return 'bg-cyan-100 text-cyan-700 border-cyan-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'PAYMENT': return <PiCurrencyDollar className="text-emerald-600" />;
            case 'EXPENSE': return <PiTag className="text-purple-600" />;
            case 'INVOICE': return <PiBuildings className="text-blue-600" />;
            default: return <PiCalendarBlank className="text-gray-600" />;
        }
    };

    const formatNextRun = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = date.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'Overdue';
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Tomorrow';
        if (diffDays < 7) return `In ${diffDays} days`;
        return date.toLocaleDateString();
    };

    const filteredSchedules = schedules;

    const stats = {
        total: schedules.length,
        active: schedules.filter(s => s.isActive).length,
        inactive: schedules.filter(s => !s.isActive).length,
        upcoming: schedules.filter(s => s.isActive && new Date(s.nextRun) > new Date()).length,
    };

    return (
        <div className="space-y-6 animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Recurring Requisitions</h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Manage your automatically renewing requisitions
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
                        </div>
                        <PiCalendarBlank className="text-3xl text-gray-400" />
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Active</p>
                            <p className="text-2xl font-bold text-emerald-600 mt-1">{stats.active}</p>
                        </div>
                        <PiCheckCircle className="text-3xl text-emerald-400" />
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Inactive</p>
                            <p className="text-2xl font-bold text-gray-600 mt-1">{stats.inactive}</p>
                        </div>
                        <PiXCircle className="text-3xl text-gray-400" />
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Upcoming</p>
                            <p className="text-2xl font-bold text-blue-600 mt-1">{stats.upcoming}</p>
                        </div>
                        <PiClock className="text-3xl text-blue-400" />
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-[#29258D] text-white`}
                >
                    All ({stats.total})
                </button>
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white border border-gray-200 text-gray-700 hover:bg-gray-50`}
                >
                    Active ({stats.active})
                </button>
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white border border-gray-200 text-gray-700 hover:bg-gray-50`}
                >
                    Inactive ({stats.inactive})
                </button>
            </div>

            {/* Schedules List */}
            {loading ? (
                <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                    <PiArrowClockwise className="text-4xl text-gray-400 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading schedules...</p>
                </div>
            ) : filteredSchedules.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                    <PiCalendarBlank className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Schedules Yet</h3>
                    <p className="text-gray-600 mb-6">
                        Create your first schedule to automate recurring payments and expenses.
                    </p>
                    <button
                        className="bg-gradient-to-r from-[#29258D] to-[#3d39c4] hover:shadow-[0_8px_20px_-6px_rgba(41,37,141,0.5)] hover:-translate-y-0.5 transition-all active:scale-95 active:translate-y-0 text-white font-bold px-8 py-3 rounded-xl flex items-center gap-2 text-sm mx-auto"
                    >
                        <PiPlus className="text-lg" />
                        Create Schedule
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filteredSchedules.map((schedule) => (
                        <div
                            key={schedule.id}
                            className={`bg-white border rounded-xl p-6 transition-all hover:shadow-md ${schedule.isActive ? 'border-gray-200' : 'border-gray-200 opacity-60'
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-2xl">
                                        {getTypeIcon(schedule.type)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-gray-900">{schedule.name}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getFrequencyColor(schedule.frequency)}`}>
                                                {schedule.frequency}
                                            </span>
                                            {schedule.isActive ? (
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200">
                                                    Inactive
                                                </span>
                                            )}
                                        </div>
                                        {schedule.description && (
                                            <p className="text-sm text-gray-600 mb-3">{schedule.description}</p>
                                        )}
                                        <div className="flex items-center gap-6 text-sm">
                                            <div>
                                                <span className="text-gray-500">Amount:</span>
                                                <span className="font-bold text-gray-900 ml-2">
                                                    {schedule.currency} {schedule.amount.toLocaleString()}
                                                </span>
                                            </div>
                                            {schedule.vendor && (
                                                <div>
                                                    <span className="text-gray-500">Vendor:</span>
                                                    <span className="font-semibold text-gray-900 ml-2">{schedule.vendor.name}</span>
                                                </div>
                                            )}
                                            {schedule.category && (
                                                <div>
                                                    <span className="text-gray-500">Category:</span>
                                                    <span className="font-semibold text-gray-900 ml-2">{schedule.category.name}</span>
                                                </div>
                                            )}
                                            <div>
                                                <span className="text-gray-500">Next Run:</span>
                                                <span className="font-bold text-blue-600 ml-2">{formatNextRun(schedule.nextRun)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {schedule.isActive && (
                                        <button
                                            onClick={() => handleRunNow(schedule.id, schedule.name)}
                                            className="flex items-center gap-1.5 px-4 py-2 bg-[#29258D] text-white text-xs font-bold rounded-[5px] hover:bg-[#1e1a70] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            title="Run this schedule now and create a requisition"
                                        >
                                            <><PiPlayCircle className="text-sm" /> Run Now</>
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleToggleSchedule(schedule.id)}
                                        className="p-2 rounded-[5px] hover:bg-gray-100 transition-colors"
                                        title={schedule.isActive ? 'Deactivate' : 'Activate'}
                                    >
                                        {schedule.isActive ? (
                                            <PiToggleRight className="text-2xl text-emerald-600" />
                                        ) : (
                                            <PiToggleLeft className="text-2xl text-gray-400" />
                                        )}
                                    </button>
                                    <button
                                        onClick={() => handleDeleteSchedule(schedule.id)}
                                        className="p-2 rounded-[5px] hover:bg-red-50 transition-colors text-red-600"
                                        title="Delete"
                                    >
                                        <PiTrash className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Recent Executions */}
                            {schedule.executions.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs font-bold text-gray-500 tracking-wider">Recent executions</p>
                                        <span className="text-xs text-gray-400">{schedule.executions.length} run{schedule.executions.length !== 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {schedule.executions.slice(0, 5).map((execution) => (
                                            <div
                                                key={execution.id}
                                                className={`flex items-center gap-1.5 px-2 py-1 rounded-[5px] text-xs font-semibold border ${
                                                    execution.status === 'EXECUTED'
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                        : execution.status === 'FAILED'
                                                            ? 'bg-red-50 text-red-700 border-red-200'
                                                            : 'bg-gray-50 text-gray-500 border-gray-200'
                                                }`}
                                                title={`${execution.status} on ${new Date(execution.scheduledFor).toLocaleDateString()}`}
                                            >
                                                {execution.status === 'EXECUTED' ? <PiCheckCircle className="text-xs" /> : <PiXCircle className="text-xs" />}
                                                {new Date(execution.scheduledFor).toLocaleDateString()}
                                            </div>
                                        ))}
                                    </div>
                                    {schedule.executions.some(e => e.status === 'EXECUTED') && (
                                        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                            <PiFileText className="text-xs" />
                                            Executions auto-create requisitions — find them in the Requisitions module
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
