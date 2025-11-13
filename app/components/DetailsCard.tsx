"use client";

import Link from "next/link";
import ProductCardView from "./ProductCardView";

type Prop = {
  name: string;
  img?: string;
  description?: string;
  detailedDescription?: string;
  category?: string;
  price?: number;
  sku?: string;
  id?: number;
  onAddToCartAction?: (qty?: number) => void;
  color?: string;
  material?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  manufacturer?: string;
  brand?: string;
  rating?: number;
  reviews?: {
    username: string;
    comment: string;
    rating: number;
  }[];
  tags?: string[];
};

export default function DetailsCard(props: Prop) {
  // DetailsCard: vista cuando el usuario hace "Ver Detalles"
  // Si no se provee `onAddToCartAction`, usamos una implementación local sencilla
  const { onAddToCartAction } = props;

  const addToCart = (qty?: number) => {
    if (onAddToCartAction) return onAddToCartAction(qty);

    // Implementación simple: guardar en localStorage bajo la clave 'cart'
    try {
      const existing = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
      const cart = existing ? JSON.parse(existing) : [];
      const item = { sku: props.sku, name: props.name, price: props.price, qty: qty || 1 };
      const idx = cart.findIndex((c: any) => c.sku === props.sku);
      if (idx >= 0) {
        cart[idx].qty += item.qty;
      } else {
        cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      // feedback simple
      console.log("Añadido al carrito:", item);
    } catch (e) {
      console.error("No se pudo añadir al carrito", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <ProductCardView {...props} mode="detail" onAddToCartAction={addToCart} />
    </div>
  );
}
