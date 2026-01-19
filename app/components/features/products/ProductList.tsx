"use client";
import React from "react";
import ProductCardView from "./ProductCardView";
import { products } from "@/app/data/products";
import { Product } from "@/app/types/productsType";

interface ProductListProps {
  filteredProducts?: Product[];
}

export default function ProductList({ filteredProducts }: ProductListProps) {
  const displayProducts = filteredProducts || products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-center justify-center p-4">
      {displayProducts.length > 0 ? (
        displayProducts.map((product) => (
          <ProductCardView
            key={product.sku}
            {...product}
            product={product}
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <h3 className="text-xl font-medium text-gray-500">No se encontraron productos</h3>
        </div>
      )}
    </div>
  );
}
