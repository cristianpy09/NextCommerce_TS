"use client";

import React, { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Product } from "../types/productsType";
import { products as initialData } from "../data/products";

interface Props {
  children: React.ReactNode;
}

export default function CartProvider({ children }: Props) {

  // Catalog state
  const [displayProducts, setDisplayProducts] = useState<Product[]>(initialData);

  // Cart state
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (product: Product, qty = 1) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((p) => p.sku === product.sku);
      if (existingIdx !== -1) {
        // Update quantity if exists (assuming Product type has quantity or we treat it as line item)
        // Since Product type has 'quantity' which seems to be stock, we might need a separate 'cartQuantity' field or just duplicate items?
        // The original logic just added it or spliced. 
        // DetailsCard logic was: check if exists, update qty.
        // Let's copy properties and update 'quantity' to mean 'cart quantity' instead of stock?
        // Or better, just add to array.
        // Let's implement robust logic: check if exists.
        const clone = [...prev];
        const item = clone[existingIdx];
        // Assuming 'quantity' in cart context means how many users bought.
        // But in Product type 'quantity' usually means stock in DB.
        // We will overload 'quantity' for cart usage as typical in simple apps, or add a new field.
        // To be safe with Types, we'll assume we can modify 'quantity'.
        // Original DetailsCard logic: items.qty += item.qty.
        // Product type has 'quantity: number'.

        const newQty = (item.quantity || 0) + qty;
        clone[existingIdx] = { ...item, quantity: newQty };
        return clone;
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const deleteProduct = (id: string) => {
    setCartItems((prev) => prev.filter((p) => p.sku !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addProduct,
        deleteProduct,
        displayProducts,
        setDisplayProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

