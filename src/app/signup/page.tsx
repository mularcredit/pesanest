"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validatePassword(password)) {
            setError(validatePassword(password) || "");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                router.push("/login?signup=success");
            } else {
                const data = await res.json();
                setError(data.error || "Something went wrong.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const validatePassword = (pass: string) => {
        if (pass.length < 8) return "Password must be at least 8 characters long";
        if (!/[A-Z]/.test(pass)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(pass)) return "Password must contain at least one lowercase letter";
        if (!/[0-9]/.test(pass)) return "Password must contain at least one number";
        if (!/[!@#$%^&*]/.test(pass)) return "Password must contain at least one special character";
        return null;
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        const validationError = validatePassword(val);
        setPasswordError(validationError || "");
    };

    return (
        <div className="min-h-screen bg-white flex font-sans">
            {/* Left Side - Branded Visual Area */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-b from-black to-zinc-900 items-end justify-center">
                
                {/* Prominent Spotlight Behind Character */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/20 rounded-full blur-[100px] pointer-events-none" />

                {/* Foreground Image */}
                <div className="relative w-full h-[85%] max-w-2xl">
                    <Image
                        src="/bearded-man-denim-shirt-round-glasses.png"
                        alt="Smiling man looking at phone"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                    {/* Bottom Edge Fade Blend */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-red-950 to-transparent pointer-events-none" />
                </div>

                {/* Floating Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-12 pointer-events-none">
                    {/* Logo */}
                    <div className="pointer-events-auto">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_APP_NAME === "Pesanest"
                                        ? "/pesanest/pesanest-light-new.png"
                                        : (process.env.NEXT_PUBLIC_LOGO_URL || "/capitalpay.png")
                                }
                                alt={process.env.NEXT_PUBLIC_APP_NAME || "Capital Pay"}
                                width={140}
                                height={32}
                                className={cn(
                                    "w-auto object-contain",
                                    process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "h-14" : "h-8"
                                )}
                            />
                        </Link>
                    </div>

                    {/* Center Text Pitch */}
                    <div className="pointer-events-auto text-white pb-12">
                        <h2 className="text-5xl font-extrabold mb-5 tracking-tight leading-tight">
                            Join Our<br />Platform Today
                        </h2>
                        <p className="text-lg text-white/90 max-w-md font-medium leading-relaxed drop-shadow-md">
                            Request access to start managing your business finances efficiently.
                        </p>
                        
                        {/* Partner Logos */}
                        <div className="mt-8">
                            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-3 font-bold">Trusted By</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-md">
                                    <Image
                                        src="/assets/branding/south-sudan-revenue-authority-formerly-national-revenue-authority-586928.jpg"
                                        alt="Revenue Authority"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 object-contain mix-blend-multiply"
                                    />
                                </div>
                                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-md">
                                    <Image
                                        src="/assets/branding/logo.857ac6f8bbd7.png"
                                        alt="Civil Aviation"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 object-contain mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pointer-events-auto text-white/50 text-xs font-semibold tracking-wider uppercase mb-[-1rem]">
                        © 2026 {process.env.NEXT_PUBLIC_APP_NAME || "CapitalPay"}. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-zinc-50 relative" style={{ fontFamily: 'var(--font-lexend)' }}>
                {/* Subtle Right Side Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

                <div className="w-full max-w-[420px] relative z-10">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-12 text-center">
                        <Link href="/" className="inline-block">
                            <Image
                                src={process.env.NEXT_PUBLIC_LOGO_URL || "/capitalpay.png"}
                                alt={process.env.NEXT_PUBLIC_APP_NAME || "Capital Pay"}
                                width={120}
                                height={28}
                                className={cn(
                                    "w-auto object-contain",
                                    process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "h-11" : "h-5"
                                )}
                            />
                        </Link>
                    </div>

                    <div className="mb-10 flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Request Access</h1>
                        <p className="text-zinc-500 text-xs font-medium tracking-wide">Submit a request to join the organization.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold text-center border border-rose-200">
                                {error}
                            </div>
                        )}

                        <div className="space-y-5">
                            <div>
                                <label className="block text-xs font-normal text-zinc-600 mb-2 tracking-wide">
                                    Full name
                                </label>
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    icon={<BiUser className="text-zinc-400 text-lg" />}
                                    className="!rounded-full !h-12 !px-4 !pl-11 !border-zinc-200 bg-white shadow-sm hover:!border-zinc-300 focus:!border-purple-500 focus:!ring-purple-500/20 text-xs transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-normal text-zinc-600 mb-2 tracking-wide">
                                    Email address
                                </label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    required
                                    icon={<BiEnvelope className="text-zinc-400 text-lg" />}
                                    className="!rounded-full !h-12 !px-4 !pl-11 !border-zinc-200 bg-white shadow-sm hover:!border-zinc-300 focus:!border-purple-500 focus:!ring-purple-500/20 text-xs transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-normal text-zinc-600 mb-2 tracking-wide">
                                    Password
                                </label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Create a strong password"
                                    required
                                    minLength={8}
                                    icon={<BiLockAlt className="text-zinc-400 text-lg" />}
                                    className={`!rounded-full !h-12 !px-4 !pl-11 !border-zinc-200 bg-white shadow-sm hover:!border-zinc-300 focus:!border-purple-500 focus:!ring-purple-500/20 text-xs transition-all ${passwordError ? '!border-rose-400 focus:!ring-rose-500/20 focus:!border-rose-500' : ''}`}
                                />
                                {password && (
                                    <div className="mt-4 px-2 space-y-2">
                                        <div className="flex items-center gap-2.5 text-[11px] tracking-wide">
                                            <div className={`flex-shrink-0 w-2 h-2 rounded-full ${password.length >= 8 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`} />
                                            <span className={`font-normal ${password.length >= 8 ? 'text-emerald-700' : 'text-zinc-500'}`}>
                                                At least 8 characters
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-[11px] tracking-wide">
                                            <div className={`flex-shrink-0 w-2 h-2 rounded-full ${/[A-Z]/.test(password) ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`} />
                                            <span className={`font-normal ${/[A-Z]/.test(password) ? 'text-emerald-700' : 'text-zinc-500'}`}>
                                                One uppercase letter
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-[11px] tracking-wide">
                                            <div className={`flex-shrink-0 w-2 h-2 rounded-full ${/[0-9]/.test(password) ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`} />
                                            <span className={`font-normal ${/[0-9]/.test(password) ? 'text-emerald-700' : 'text-zinc-500'}`}>
                                                One number
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-[11px] tracking-wide">
                                            <div className={`flex-shrink-0 w-2 h-2 rounded-full ${/[!@#$%^&*]/.test(password) ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`} />
                                            <span className={`font-normal ${/[!@#$%^&*]/.test(password) ? 'text-emerald-700' : 'text-zinc-500'}`}>
                                                One special character (!@#$%^&*)
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-full !rounded-full h-12 text-sm font-normal tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]",
                                process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "bg-[#5e48b8] hover:bg-[#5e48b8]/90" : "bg-purple-800 hover:bg-purple-900"
                            )}
                        >
                            {loading ? "Submitting..." : "Submit request"}
                        </Button>

                        <div className="text-center pt-4 border-t border-zinc-200/60 mt-8">
                            <p className="text-xs font-normal text-zinc-500 tracking-wide">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-normal text-purple-700 hover:text-purple-600 transition-colors"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
