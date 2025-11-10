"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react';
import Image from "next/image";
import order from '@/public/images/order_14379893.png'
import auth from '../utils/auth';



type Inputs = {
  email: string
  password: string
}




export default function LoginPage() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data:Inputs) => {
    const email= data.email
 
    auth(email)
   
   
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#264ECA] relative overflow-hidden">
      {/* Fondo con ondas suaves */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1A2980] to-[#26D0CE] opacity-90"></div>



      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-linear-to-br from-[#182848] to-[#499daa] p-6  text-white  backdrop-blur-md h-[451px] w-[350px] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl">


        {/* Ícono de carrito */}
        <div className='mt-15'>
          <Image
            src={order}
            alt="Shopping cart"
            width={100}
            height={100}
            className="rounded-full"

          />
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit) } className="flex flex-col space-y-4 w-full">
          <label>EMAIL:</label>
          <div className="border border-white/60 rounded-md px-4 py-2 flex items-center">
            <input
            {...register("email")}
              type="email"
              placeholder="plantaverde@correo.es"
              className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-full"
            />
          </div>

          <label>PASSWORD:</label>
          <div className="border border-white/60 rounded-md px-4 py-2 flex items-center">
            <input
              type="password"
              placeholder="********"
              className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-full"
            />
          </div>

          <button  className="bg-white text-[#264ECA] font-semibold mt-5 py-2 cursor-pointer rounded-md shadow hover:bg-gray-100 transition-all">
            LOGIN
          </button>
        </form>

        {/* Enlace inferior */}
        <a
          href="#"
          className="text-sm text-black/80 mt-30 hover:text-white transition-all"
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
}
