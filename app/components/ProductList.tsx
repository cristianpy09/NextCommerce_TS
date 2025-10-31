import React from "react";
import { products } from "../data/products";
import { Product } from "../types/productsType";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const data = products;

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-10">
      <section
        className="w-full max-w-7xl 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-10 justify-items-center"
      >
        {data.map((u: Product) => (
          <div
            key={u.sku}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            <ProductCard
              name={u.name}
              category={u.category}
              price={u.price}
              img={u.imageUrl}
              description={u.description}
              sku={u.sku}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
