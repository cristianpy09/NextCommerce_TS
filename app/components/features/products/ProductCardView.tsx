"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { Product } from "@/app/types/productsType";
import Button from "../../ui/Button";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  product: Product;
  name: string;
  img?: string;
  description?: string;
  detailedDescription?: string;
  category?: string;
  price?: number;
  sku?: string;
  id?: number;
  mode?: "list" | "detail";
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

export default function ProductCardView({
  name,
  img,
  description,
  detailedDescription,
  category,
  price,
  sku,
  mode = "list",
  onAddToCartAction,
  color,
  material,
  dimensions,
  manufacturer,
  brand,
  rating,
  reviews,
  tags,
  product
}: Props) {
  const isDetail = mode === "detail";
  const [qty, setQty] = useState<number>(1);
  const [mainImg, setMainImg] = useState<string | undefined>(img);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isFavorite = sku ? isInWishlist(sku) : false;

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite && sku) {
      removeFromWishlist(sku);
    } else {
      addToWishlist(product);
    }
  };

  // Estadísticas de reseñas
  const totalReviews = reviews?.length ?? 0;
  const computedAvg = totalReviews ? reviews!.reduce((s, r) => s + (r.rating || 0), 0) / totalReviews : undefined;
  const avgRating = rating ?? (computedAvg ? Number(computedAvg.toFixed(1)) : undefined);
  const ratingCounts = [0, 0, 0, 0, 0];
  if (reviews && reviews.length) {
    reviews.forEach((r) => {
      const idx = Math.max(0, Math.min(4, (r.rating || 1) - 1));
      ratingCounts[idx]++;
    });
  }

  const cart = useContext(CartContext);

  const handleAdd = () => {
    cart?.addProduct(product);
    toast.success(`Añadido ${qty} x ${name} al carrito`);
    if (onAddToCartAction) {
      onAddToCartAction(qty);
    }
  };

  if (isDetail) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* IMÁGENES */}
          <div>
            <motion.div
              layoutId={`image-${sku}`}
              className="relative w-full h-[500px] bg-gray-50 rounded-xl overflow-hidden mb-4"
            >
              <img
                src={mainImg}
                alt={name}
                className="w-full h-full object-contain p-8 mix-blend-multiply"
              />
              <button
                onClick={toggleWishlist}
                className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:scale-110 transition z-10"
              >
                <Heart
                  className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
                  size={24}
                />
              </button>
            </motion.div>
            {/* Miniaturas */}
            <div className="flex gap-4 justify-center">
              {[img, img, img].map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(src)}
                  className={`w-24 h-24 border rounded-xl overflow-hidden 
                          hover:border-blue-500 transition 
                          ${mainImg === src ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200"}`}
                >
                  <img src={src} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col">
            <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
              <span>/</span>
              <span className="text-blue-600 font-medium">{category}</span>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">{name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-gray-900">${price?.toFixed(2)}</span>
              {avgRating && (
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-sm font-medium">
                  <span>★</span>
                  <span>{avgRating}</span>
                  <span className="text-gray-400 font-normal">({totalReviews} reseñas)</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">{detailedDescription}</p>

            {/* Acciones */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-gray-600"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >-</button>
                <span className="w-12 text-center font-medium">{qty}</span>
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-gray-600"
                  onClick={() => setQty(qty + 1)}
                >+</button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Añadir al Carrito
              </button>
            </div>

            {/* Detalles Técnicos */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-gray-50 rounded-lg">
                <span className="block text-gray-500 mb-1">Marca</span>
                <span className="font-medium text-gray-900">{brand}</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <span className="block text-gray-500 mb-1">SKU</span>
                <span className="font-medium text-gray-900">{sku}</span>
              </div>
              {material && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 mb-1">Material</span>
                  <span className="font-medium text-gray-900">{material}</span>
                </div>
              )}
              {dimensions && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 mb-1">Dimensiones</span>
                  <span className="font-medium text-gray-900">{dimensions.width}x{dimensions.height}x{dimensions.depth} cm</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }

  // VISTA DE LISTA (CARD)
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
    >
      <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 transition z-10 opacity-0 group-hover:opacity-100"
      >
        <Heart
          className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
          size={18}
        />
      </button>

      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={mainImg}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition">
          {name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xl font-bold text-gray-900">
            ${price?.toFixed(2)}
          </span>
          <Link href={`/${sku}`}>
            <span className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
              Ver Detalles →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
