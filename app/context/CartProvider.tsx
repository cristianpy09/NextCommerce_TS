"use client"

import React, { Children, ReactElement, useState } from 'react'
import { CartContext } from './CartContext'
import { Product } from '../types/productsType'

interface props {
    children: React.ReactNode
}



export default function CartProvider({children}:props) {

    const [products,setProducts]=useState<Product[]>([])
    const addProduct = (product: Product) => {
        setProducts(prev => [...prev, product]);
      };
  return (
    <CartContext.Provider value={{products,setProducts,addProduct}} >
        {children}
    </CartContext.Provider>
  )
}
