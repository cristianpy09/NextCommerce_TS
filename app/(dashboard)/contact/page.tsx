"use client";
import React, { useState } from "react";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("¡Mensaje enviado con éxito! Te contactaremos pronto.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    ¿Tienes alguna pregunta sobre tu pedido o nuestros productos? Estamos aquí para ayudarte.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Contact Info */}
                <div className="bg-blue-600 rounded-2xl p-10 text-white shadow-xl h-full">
                    <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                        Llena el formulario y nuestro equipo te responderá en menos de 24 horas.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Phone className="text-blue-200 mt-1" />
                            <div>
                                <p className="font-medium">Teléfono</p>
                                <p className="text-blue-100">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-blue-200 mt-1" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-blue-100">soporte@ecommercelite.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-blue-200 mt-1" />
                            <div>
                                <p className="font-medium">Oficina</p>
                                <p className="text-blue-100">123 Calle Comercio, Ciudad de México, CP 12345</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Nombre"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Input
                            label="Asunto"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button
                            text={isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                            type="submit"
                            variant="primary"
                            className="w-full flex justify-center items-center gap-2"
                            disabled={isSubmitting}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
