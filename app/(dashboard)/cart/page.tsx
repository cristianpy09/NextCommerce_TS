"use client";


import React, { useContext } from 'react';

export default function CartPage() {



  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">🛍️ Carrito</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg p-6 shadow-sm mb-8">
        <div className="flex items-center">
          <img
            src="https://www.kindpng.com/picc/m/299-2992482_zapato-doble-hebilla-negro-mate-class-lazyload-lazyload.png"
            alt="Zapato elegante"
            className="w-28 h-28 object-cover rounded-md"
          />
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{}</h2>
            <p className="text-sm text-gray-600 mt-2">Talla: Única</p>
            <p className="text-sm text-gray-600">Cantidad: 5</p>
            <button className="text-blue-600 text-sm mt-2 hover:underline">Mover a wishlist</button>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-right">
          <p className="text-lg font-bold">$19.99</p>
          <p className="text-sm text-gray-500">Impuestos incluidos</p>
          <button className="text-red-500 text-sm mt-2 hover:underline">Eliminar</button>
        </div>
      </div>

      {/* Resumen */}
      <div className="border-t pt-6 text-right">
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$19.99</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>$24.99</span>
          </div>
        </div>

        <button className="mt-6 w-full md:w-auto bg-black text-white px-6 py-3 rounded hover:bg-gray-900">
          Proceder al pago
        </button>
      </div>
    </div>
  );
}
