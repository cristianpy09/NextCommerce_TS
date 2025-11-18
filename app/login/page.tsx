"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Image from "next/image";
import order from "@/public/images/order_14379893.png"; // Asegúrate de tener la imagen en esta ruta.
import Link from "next/link";
import { auth } from "../utils/auth";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { email} = data;
    auth(email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-yellow-200 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-95"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-white p-8 text-gray-800 shadow-lg rounded-lg w-80">
        {/* Ícono de carrito */}
        <div className="mb-6">
          <Image
            src={order}
            alt="Shopping cart"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full"
        >
          <label className="font-semibold">EMAIL:</label>
          <div className="border border-gray-300 rounded-md px-4 py-2">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="ejemplo@correo.com"
              className={`bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 w-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                Este campo es obligatorio.
              </span>
            )}
          </div>

          <label className="font-semibold">PASSWORD:</label>
          <div className="border border-gray-300 rounded-md px-4 py-2">
            <input
              {...register("password", { required: false })}
              type="password"
              placeholder="********"
              className={`bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 w-full ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                Este campo es obligatorio.
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            LOGIN
          </button>
        </form>

        <Link
          href="/forgot-password"
          className="text-sm text-gray-600 mt-4 hover:text-gray-800 transition-all"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
}
