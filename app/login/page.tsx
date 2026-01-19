"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import Image from "next/image";
import order from "@/public/images/order_14379893.png";
import Link from "next/link";
import { auth } from "../utils/auth";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

const schema = z.object({
  email: z.string().email("Ingrese un correo válido").min(1, "El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type Inputs = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email } = data;
    auth(email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-yellow-200 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md p-8 text-gray-800 shadow-2xl rounded-2xl w-full max-w-sm border border-white/50">
        {/* Ícono de carrito */}
        <div className="mb-6 shadow-md rounded-full">
          <Image
            src={order}
            alt="Shopping cart"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Iniciar Sesión</h2>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 w-full"
        >
          <Input
            label="Email"
            placeholder="ejemplo@correo.com"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Contraseña"
            placeholder="********"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          <Button
            text={isSubmitting ? "Cargando..." : "Ingresar"}
            type="submit"
            variant="secondary"
            className="w-full mt-4"
            disabled={isSubmitting}
          />
        </form>

        <Link
          href="/forgot-password"
          className="text-sm text-gray-600 mt-6 hover:text-gray-900 transition-colors font-medium underline decoration-gray-400 underline-offset-4"
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <Link
          href="/register"
          className="text-sm text-blue-600 mt-2 hover:text-blue-800 transition-colors font-medium"
        >
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}

