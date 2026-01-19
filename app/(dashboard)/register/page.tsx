"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        setIsLoading(true);

        // Auto-login after registration
        const success = await login(formData.email, formData.password);
        setIsLoading(false);

        if (success) {
            router.push("/");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const benefits = [
        "Free shipping on orders over $50",
        "Exclusive member-only deals",
        "Early access to new products",
        "24/7 customer support"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Side - Benefits */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden lg:flex flex-col justify-center space-y-6 p-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-600 rounded-2xl">
                            <ShoppingBag className="text-white" size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Ecommerce<span className="text-purple-600">Lite</span>
                        </h1>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                        Join thousands of happy shoppers
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Create your account and unlock exclusive benefits
                    </p>

                    <div className="space-y-4 pt-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-2 bg-purple-100 rounded-full">
                                    <Check className="text-purple-600" size={16} />
                                </div>
                                <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side - Register Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
                >
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h3>
                        <p className="text-gray-500">Fill in your details to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                required
                            />
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 mt-1 text-purple-600 rounded focus:ring-2 focus:ring-purple-500" required />
                            <span className="text-sm text-gray-600">
                                I agree to the <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200 disabled:opacity-50"
                        >
                            {isLoading ? "Creating account..." : "Create Account"}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                                Sign in instead
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
