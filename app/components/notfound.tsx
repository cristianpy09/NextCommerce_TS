import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Notfound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sand p-8">
      <div className="bg-elephant text-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center border border-gray-300">
        
        {/* Icono grande */}
        <div className="text-6xl mb-4">🔎</div>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-3 text-black">
          Página no encontrada
        </h1>

        {/* Descripción */}
        <p className="text-cloud text-lg mb-6">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        {/* Botón */}
        <Link href="/" className="inline-block">
          <Button text="Volver al inicio" key="lg" variant="modern" />
        </Link>
      </div>
    </main>
  );
}
