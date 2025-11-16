"use client"

import { createContext } from "react";
import { Product } from "../types/productsType";

type ContextProps = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    addProduct: (product: Product) => void;
    deleteProduct:(id: string) => void;
  };

export const CartContext = createContext<ContextProps|null>(null)