// data/products.ts

import { Product } from "../types/productsType";


export const products: Product[] = [
  {
    sku: "P001",
    name: "Camiseta Roja",
    brand: "MarcaX",
    quantity: 50,
    price: 19.99,
    isActive: true,
    category: "Ropa",
    imageUrl: "/images/camiseta-roja.jpg",
    createdAt: Date.now(),
    description: "Camiseta de algodón, color rojo",
    tags: ["ropa", "verano"],
    dimensions: { width: 30, height: 40, depth: 1 }
  },
  {
    sku: "P002",
    name: "Zapatos Negros",
    brand: "MarcaY",
    quantity: 20,
    price: 49.99,
    isActive: true,
    category: "Calzado",
    imageUrl: "/images/zapatos-negros.jpg",
    createdAt: Date.now(),
  },

];
