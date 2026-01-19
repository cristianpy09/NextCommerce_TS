"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useOrders } from "@/app/context/OrderContext";
import { useRouter } from "next/navigation";
import { User, Package, LogOut, Settings } from "lucide-react";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";

export default function ProfilePage() {
    const { user, logout, updateProfile } = useAuth();
    const { orders } = useOrders();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"profile" | "orders">("profile");

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || ""
    });

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Inicia sesión para ver tu perfil</h2>
                    <Button text="Ir al Login" onClick={() => router.push("/login")} />
                </div>
            </div>
        );
    }

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile(formData);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-2">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center mb-6">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                            <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="font-bold text-gray-900">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <nav className="flex flex-col gap-1">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                        ${activeTab === "profile" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <User size={18} /> Mi Perfil
                        </button>
                        <button
                            onClick={() => setActiveTab("orders")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                        ${activeTab === "orders" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Package size={18} /> Mis Pedidos
                        </button>
                        <button
                            onClick={logout}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition mt-4"
                        >
                            <LogOut size={18} /> Cerrar Sesión
                        </button>
                    </nav>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-8">
                    {activeTab === "profile" ? (
                        <div>
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                                <Settings className="text-gray-400" size={20} />
                                <h2 className="text-xl font-bold text-gray-800">Editar Perfil</h2>
                            </div>
                            <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
                                <Input
                                    label="Nombre Completo"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <Input
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    disabled
                                    // @ts-ignore
                                    className="bg-gray-50 cursor-not-allowed"
                                />
                                <Button text="Guardar Cambios" type="submit" variant="primary" />
                            </form>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                                <Package className="text-gray-400" size={20} />
                                <h2 className="text-xl font-bold text-gray-800">Historial de Pedidos</h2>
                            </div>

                            {orders.length === 0 ? (
                                <p className="text-gray-500">No has realizado ningún pedido aún.</p>
                            ) : (
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <span className="text-xs font-mono text-gray-500 uppercase">#{order.id}</span>
                                                    <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                                            ${order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                                                        order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="space-y-2 mb-4">
                                                {order.items.slice(0, 2).map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                                        <div className="w-8 h-8 rounded bg-gray-100 overflow-hidden">
                                                            <img src={item.product.imageUrl} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-gray-700 flex-1">{item.product.name}</span>
                                                        <span className="text-gray-500">x{item.quantity}</span>
                                                    </div>
                                                ))}
                                                {order.items.length > 2 && (
                                                    <p className="text-xs text-blue-600 pl-11">+ {order.items.length - 2} productos más</p>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                                <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span>
                                                <button className="text-sm text-blue-600 font-medium hover:underline">Ver Detalles</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
