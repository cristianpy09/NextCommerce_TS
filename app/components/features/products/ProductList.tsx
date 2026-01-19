"use client";

import React, { useContext, useState, useEffect } from "react";
import { products } from "@/app/data/products";
import { Product } from "@/app/types/productsType";
import ProductCard from "./ProductCard";
import { CartContext } from "@/app/context/CartContext";
import { Skeleton } from "@/app/components/ui/Skeleton";

export default function ProductList() {
  const Products = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos para experiencia premium
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!Products) return null;

  const listaProductos = Products.displayProducts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 md:px-10">
        <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3 w-56">
              <Skeleton className="h-48 w-full rounded-xl" />
              <div className="space-y-2 p-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 md:px-10">
      <section
        className="
         bg-gray-50
         w-full max-w-7xl
         grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
         gap-6 justify-items-center 
       "
      >
        {listaProductos.length > 0 ? (
          listaProductos.map((u: Product) => (
            <ProductCard
              key={u.sku}
              name={u.name}
              category={u.category}
              price={u.price}
              img={u.imageUrl}
              description={u.description}
              sku={u.sku}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <h3 className="text-xl font-medium text-gray-500">No se encontraron productos</h3>
          </div>
        )}
      </section>
    </div>
  );
}
