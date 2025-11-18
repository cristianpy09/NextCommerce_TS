"use client";

import Button from "@/app/components/Button";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";




export default function CartPage() {
  
  const cart = useContext(CartContext);
  const handleDelete =(id:string)=>{
    cart?.deleteProduct(id)
  }
  if (!cart || cart.products.length === 0) {
    return <p className="text-center mt-10">Tu carrito está vacío 🛒</p>;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-8">🛍️ Carrito</h1>

    {cart.products.map(product => (
      <div key={product.name} className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg p-6 shadow-sm mb-8">
        <div className="flex items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-28 h-28 object-cover rounded-md"
          />
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-2">Categoría: {product.category}</p>
            <p className="text-sm text-gray-600">Cantidad: 1</p>
            <Button text="Eliminar" size="sm" variant="danger" 
              
              onClick={()=>handleDelete(product.sku)}
            >
             
            </Button>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-right">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    ))}

    {/* Resumen */}
    <div className="border-t pt-6 text-right">
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${cart.products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}</span>
        </div>
      </div>

      <Button text="Proceder al pago" size="md" variant="modern" >
       
      </Button>
    </div>
  </div>
  );
}
