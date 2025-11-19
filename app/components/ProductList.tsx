"use client"

import React, { useContext } from "react";
import { products } from "../data/products";
import { Product } from "../types/productsType";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";


export default function ProductList() {
  const data = products;
  const Products = useContext(CartContext);
  if (Products) {
    const listaProductos=Products.productosfinales
  
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-5">
      
      <section
        className="
    w-full max-w-7xl
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    gap-6
  "
      >
        {listaProductos.map((u: Product) => (
          <ProductCard
            key={u.sku}
            name={u.name}
            category={u.category}
            price={u.price}
            img={u.imageUrl}
            description={u.description}
            sku={u.sku}
          />
        ))}
      </section>
      
    </div>
  );
}}
