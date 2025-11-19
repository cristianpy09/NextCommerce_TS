"use client";

import React, { Children, ReactElement, useState } from "react";
import { CartContext } from "./CartContext";
import { Product } from "../types/productsType";
import { products as newProducts } from "../data/products";
interface props {
  children: React.ReactNode;
}

export default function CartProvider({ children }: props) {
  const productos=newProducts
  const [productosfinales,setProductosfinales]=useState(productos)
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
    const arrayComoString = JSON.stringify(product);
    localStorage.setItem("producto",arrayComoString)
  };

  const deleteProduct = (id: string) => {
    const indice = products.findIndex((product) => product.sku === id);

    if (indice !== -1) {
      const newProduct= products.toSpliced(indice,1)
      setProducts(newProduct)
    }
    console.log(`producto con indice ${indice}`);
    
  };
  return (
    <CartContext.Provider
      value={{ products, setProducts, addProduct, deleteProduct,productosfinales,setProductosfinales }}
    >
      {children}
    </CartContext.Provider>
  );
}
