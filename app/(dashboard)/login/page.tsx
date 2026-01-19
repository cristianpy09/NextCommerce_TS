"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, LogIn, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const success = await login(email, password);
        setIsLoading(false);

        if (success) {
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Side - Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden lg:flex flex-col justify-center space-y-6 p-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-600 rounded-2xl">
                            <ShoppingBag className="text-white" size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Ecommerce<span className="text-blue-600">Lite</span>
                        </h1>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                        Welcome back to your favorite shopping destination
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Discover thousands of products, exclusive deals, and a seamless shopping experience.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-2xl font-bold text-blue-600">10K+</p>
                            <p className="text-sm text-gray-600">Products</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-2xl font-bold text-blue-600">50K+</p>
                            <p className="text-sm text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Login Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
                >
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h3>
                        <p className="text-gray-500">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                "Signing in..."
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                                Create one now
                            </Link>
                        </p>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-xs text-blue-800 font-medium mb-1">Demo Credentials:</p>
                        <p className="text-xs text-blue-600">Use any email format (e.g., demo@test.com)</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
