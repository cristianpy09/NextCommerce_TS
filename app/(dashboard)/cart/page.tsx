"use client";

import Button from "@/app/components/Button";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";

export default function CartPage() {
  const cart = useContext(CartContext);
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "¿Quieres eliminar este producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "No eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        cart?.deleteProduct(id);
        Swal.fire("¡Producto eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El producto no fue eliminado", "", "info");
      }
    });
  };
  if (!cart || cart.products.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-gray-600 text-lg">Tu carrito está vacío 🛒</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-6">
      <h1 className="text-3xl font-bold mb-10 text-gray-900">Tu carrito</h1>

      {/* LISTA DE PRODUCTOS */}
      {cart.products.map((product) => (
        <div
          key={product.sku}
          className="flex flex-col md:flex-row items-start md:items-center justify-between 
                     border border-gray-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition mb-8"
        >
          {/* Imagen + info */}
          <div className="flex items-start">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-28 h-28 object-cover rounded-lg border border-gray-200"
            />

            <div className="ml-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Categoría:{" "}
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700 text-xs ml-1">
                  {product.category}
                </span>
              </p>

              <p className="text-sm text-gray-600 mt-1">Cantidad: 1</p>

              <div className="mt-3">
                <Button
                  text="Eliminar"
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(product.sku)}
                />
              </div>
            </div>
          </div>

          {/* Precio */}
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {/* RESUMEN */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Resumen</h3>

        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">
              ${cart.products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Envío</span>
            <span className="font-medium text-green-600">Gratis</span>
          </div>
        </div>

        <div className="mt-6">
          <Button text="Proceder al pago" size="md" variant="modern" />
        </div>
      </div>
    </div>
  );
}
