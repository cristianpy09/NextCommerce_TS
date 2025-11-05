import React from "react";
import { products } from "../data/products";
import { Product } from "../types/productsType";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const data = products;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-10">
      <section
        className="w-full max-w-7xl 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-8 justify-items-center"
      >
        {data.map((u: Product) => (
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
}
