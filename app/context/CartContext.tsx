"use client"

import { createContext } from "react";
import { Product } from "../types/productsType";

type ContextProps = {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product, qty?: number) => void;
  deleteProduct: (id: string) => void;

  // Catalog state (filtering)
  displayProducts: Product[];
  setDisplayProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CartContext = createContext<ContextProps | null>(null);