"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import Image from "next/image";
import order from "@/public/images/order_14379893.png";
import Link from "next/link";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { redirect } from "next/navigation";

const schema = z.object({
  username: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
  email: z.string().email("Ingrese un correo válido").min(1, "El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type Inputs = z.infer<typeof schema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Aquí iría la lógica de registro
    console.log(data);
    // Simular redirección o éxito
    redirect("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#264ECA] relative overflow-hidden">
      {/* Fondo con ondas suaves */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1A2980] to-[#26D0CE] opacity-90"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white border border-white/20 shadow-2xl w-full max-w-sm">
        {/* Ícono de carrito */}
        <div className="mb-6 shadow-lg rounded-full">
          <Image
            src={order}
            alt="Shopping cart"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white tracking-wide">Crear Cuenta</h2>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 w-full"
        >
          <Input
            label="Usuario"
            placeholder="usuario123"
            type="text"
            className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:border-white focus:ring-white/50"
            {...register("username")}
            error={errors.username?.message}
          // Overriding Input internal label style if needed, but styling via className mainly affects input
          />
          {/* Custom styling for label needed if component doesn't expose it well, but let's assume standard behavior for now */}
          {/* Actually the Input component renders generic gray label. We might want white label here. 
             Since component is reusable, I should probably pass a className for label or handle it via wrapper? 
             My Input component wraps everything in a div. 
             Ideally Input should accept labelClassName. 
             For now, I can just not use the label prop inside Input and render my own label if I need custom color.
             OR, just update Input to better support custom labels.
          */}

          {/* Using custom manual inputs to match design or updating Input later. 
             For consistency, let's try to use Input but maybe refactor Input to accept standard Label styling?
             Let's use Input as is, it has gray label. It might clash with blue background. 
             I'll edit Input.tsx to accept labelClassName.
          */}
        </form>
        {/* 
          Wait, I can't edit Input.tsx in the middle of this tool call easily if I want to strictly follow one-thing-at-a-time rules but I can do it in separate steps.
          For this replace, I'll stick to manual implementation using Input but passing custom classes, or if Input doesn't support label styling, I'll update Input momentarily.
          Actually, I'll just rewrite the RegisterPage to use the implementation from the original but with Zod.
       */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full"
        >
          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1">Usuario</label>
            <input
              type="text"
              placeholder="planta_verde"
              className={`flex h-10 w-full rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${errors.username ? 'border-red-300 ring-red-300' : ''}`}
              {...register("username")}
            />
            {errors.username && <p className="mt-1 text-xs text-red-200 animate-pulse">{errors.username.message}</p>}
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className={`flex h-10 w-full rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${errors.email ? 'border-red-300 ring-red-300' : ''}`}
              {...register("email")}
            />
            {errors.email && <p className="mt-1 text-xs text-red-200 animate-pulse">{errors.email.message}</p>}
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              className={`flex h-10 w-full rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${errors.password ? 'border-red-300 ring-red-300' : ''}`}
              {...register("password")}
            />
            {errors.password && <p className="mt-1 text-xs text-red-200 animate-pulse">{errors.password.message}</p>}
          </div>

          <Button
            text={isSubmitting ? "Registrando..." : "REGISTRARSE"}
            type="submit"
            variant="ghost"
            className="bg-white text-[#264ECA] hover:bg-gray-100 shadow mt-4 border-none"
            disabled={isSubmitting}
          />
        </form>

        <Link
          href="/login"
          className="text-sm text-white/80 mt-6 hover:text-white transition-colors font-medium"
        >
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </div>
    </div>
  );
}
