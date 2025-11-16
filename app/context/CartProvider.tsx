"use client";

import React, { Children, ReactElement, useState } from "react";
import { CartContext } from "./CartContext";
import { Product } from "../types/productsType";

interface props {
  children: React.ReactNode;
}

export default function CartProvider({ children }: props) {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (id: string) => {
    const indice = products.findIndex((product) => product.sku === id);

    // 2. Si el objeto se encuentra (el índice no es -1), eliminarlo
    if (indice !== -1) {
      products.splice(indice, 1); // Elimina 1 elemento desde la posición 'indice'
    }
  };
  return (
    <CartContext.Provider
      value={{ products, setProducts, addProduct, deleteProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
