import React from "react";
import { products } from "../data/products";
import { Product } from "../types/productsType";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const data = products;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white w-screen p-5 ">
      <section
        className="w-full max-w-375
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
        gap-5 justify-items-center"
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
