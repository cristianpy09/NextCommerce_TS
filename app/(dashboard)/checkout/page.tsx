"use client";

import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { CartContext } from "@/app/context/CartContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const schema = z.object({
    fullName: z.string().min(3, "Nombre completo requerido"),
    address: z.string().min(5, "Dirección requerida"),
    city: z.string().min(2, "Ciudad requerida"),
    zip: z.string().min(4, "Código postal requerido"),
    cardNumber: z.string().min(16, "Número de tarjeta inválido").max(16, "Número de tarjeta inválido"),
    expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato MM/YY"),
    cvc: z.string().min(3, "CVC inválido").max(4),
});

type Inputs = z.infer<typeof schema>;

export default function CheckoutPage() {
    const cart = useContext(CartContext);
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const total = cart?.cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0) || 0;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsProcessing(true);
        // Simular proceso de pago
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsProcessing(false);

        Swal.fire({
            title: "¡Pago Exitoso!",
            text: `Gracias por tu compra, ${data.fullName}. Tu pedido llegará pronto.`,
            icon: "success",
        }).then(() => {
            // Limpiar carrito (debería implementar clearCart en context, pero por ahora vaciamos manualmente si no existe)
            if (cart) {
                cart.setCartItems([]);
            }
            router.push("/");
        });
    };

    if (!cart || cart.cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>No tienes productos para pagar.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Formulario */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Detalles de Envío y Pago</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <Input label="Nombre Completo" {...register("fullName")} error={errors.fullName?.message} />
                        <Input label="Dirección" {...register("address")} error={errors.address?.message} />
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Ciudad" {...register("city")} error={errors.city?.message} />
                            <Input label="Código Postal" {...register("zip")} error={errors.zip?.message} />
                        </div>

                        <div className="border-t border-gray-100 my-4 pt-4">
                            <h3 className="font-medium mb-3 text-gray-700">Tarjeta de Crédito</h3>
                            <Input label="Número de Tarjeta" placeholder="0000 0000 0000 0000" {...register("cardNumber")} error={errors.cardNumber?.message} />
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <Input label="Expiración (MM/YY)" placeholder="12/25" {...register("expiry")} error={errors.expiry?.message} />
                                <Input label="CVC" placeholder="123" {...register("cvc")} error={errors.cvc?.message} />
                            </div>
                        </div>

                        <Button
                            text={isProcessing ? "Procesando..." : "Pagar Ahora"}
                            type="submit"
                            variant="primary"
                            className="w-full mt-4"
                            disabled={isProcessing}
                        />
                    </form>
                </div>

                {/* Resumen */}
                <div className="h-fit bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Resumen del Pedido</h2>
                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                        {cart.cartItems.map((item) => (
                            <div key={item.sku} className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                        <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 line-clamp-1 w-32">{item.name}</p>
                                        <p className="text-gray-500">x{item.quantity || 1}</p>
                                    </div>
                                </div>
                                <span className="font-medium text-gray-700">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Envío</span>
                            <span className="text-green-600">Gratis</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
