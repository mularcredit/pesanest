"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const signupSuccess = searchParams.get("signup") === "success";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signIn("credentials", {
                email,
                password,
                callbackUrl: "/dashboard",
            });
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row font-sans">
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
                    {/* Logo (pointer events auto to allow clicking if wrapped in Link) */}
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
                            Streamline Your<br />Business Finances
                        </h2>
                        <p className="text-lg text-white/90 max-w-md font-medium leading-relaxed drop-shadow-md">
                            Manage expenses, invoices, and accounting all in one powerful platform.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="pointer-events-auto text-white/50 text-xs font-semibold tracking-wider uppercase mb-[-1rem]">
                        © 2026 {process.env.NEXT_PUBLIC_APP_NAME || "CapitalPay"}. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col bg-white" style={{ fontFamily: 'var(--font-lexend)' }}>

                {/* ── MOBILE HEADER (visible only on small screens) ── */}
                <div className="lg:hidden relative overflow-hidden bg-gradient-to-b from-black to-zinc-900 px-8 pt-10 pb-16">
                    {/* Red glow */}
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[80px] pointer-events-none" />
                    {/* Logo */}
                    <Link href="/" className="relative z-10 inline-flex items-center gap-3 mb-6">
                        <Image
                            src={process.env.NEXT_PUBLIC_LOGO_URL || "/capitalpay.png"}
                            alt={process.env.NEXT_PUBLIC_APP_NAME || "Capital Pay"}
                            width={160}
                            height={36}
                            className={cn(
                                "w-auto object-contain",
                                process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "h-12" : "h-9"
                            )}
                        />
                    </Link>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                            Streamline Your<br />Business Finances
                        </h2>
                        <p className="text-xs text-white/60 mt-2 font-normal">
                            Manage expenses, invoices, and accounting all in one platform.
                        </p>
                    </div>
                </div>

                {/* ── FORM PANEL ── */}
                <div className="flex-1 flex items-center justify-center px-6 py-10 bg-zinc-50 relative">
                    {/* Subtle purple glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
                    <div className="w-full max-w-[420px] relative z-10">

                    <div className="mb-10 flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Welcome Back</h1>
                        <p className="text-zinc-500 text-xs font-medium tracking-wide">Please enter your credentials to securely sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {signupSuccess && (
                            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold text-center border border-emerald-200">
                                Request submitted! Please wait for admin approval.
                            </div>
                        )}
                        {error && (
                            <div className="p-4 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold text-center border border-rose-200">
                                {error}
                            </div>
                        )}

                        <div className="space-y-5">
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your secure password"
                                    required
                                    icon={<BiLockAlt className="text-zinc-400 text-lg" />}
                                    className="!rounded-full !h-12 !px-4 !pl-11 !border-zinc-200 bg-white shadow-sm hover:!border-zinc-300 focus:!border-purple-500 focus:!ring-purple-500/20 text-xs transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-zinc-300 text-purple-600 focus:ring-purple-600 group-hover:border-purple-400 transition-colors"
                                />
                                <span className="text-xs font-normal text-zinc-600 group-hover:text-zinc-900 transition-colors tracking-wide">Remember me</span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className={cn(
                                    "text-xs font-normal transition-colors tracking-wide",
                                    process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "text-[#5e48b8] hover:text-[#5e48b8]/80" : "text-purple-700 hover:text-purple-600"
                                )}
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-full !rounded-full h-12 text-sm font-normal tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]",
                                process.env.NEXT_PUBLIC_APP_NAME === "Pesanest" ? "bg-[#5e48b8] hover:bg-[#5e48b8]/90" : "bg-purple-800 hover:bg-purple-900"
                            )}
                        >
                            {loading ? "Authenticating..." : "Sign in"}
                        </Button>

                        <div className="text-center pt-4 border-t border-zinc-200/60 mt-8">
                            <p className="text-xs font-semibold text-zinc-500 tracking-wide">
                                Don't have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="font-extrabold text-purple-700 hover:text-purple-600 transition-colors"
                                >
                                    Request Access
                                </Link>
                            </p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-900">Loading...</div>}>
            <LoginComponent />
        </Suspense>
    );
}
