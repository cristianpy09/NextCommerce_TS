"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "../types/productsType";
import Button from "./Button";
import Swal from "sweetalert2";


type Props = {
  product:Product
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
  
  // Estadísticas de reseñas (uso en la vista detalle)
  const totalReviews = reviews?.length ?? 0;
  const computedAvg = totalReviews ? reviews!.reduce((s, r) => s + (r.rating || 0), 0) / totalReviews : undefined;
  const avgRating = rating ?? (computedAvg ? Number(computedAvg.toFixed(1)) : undefined);
  const ratingCounts = [0, 0, 0, 0, 0]; // índices 0=>1 estrella ... 4=>5 estrellas
  if (reviews && reviews.length) {
    reviews.forEach((r) => {
      const idx = Math.max(0, Math.min(4, (r.rating || 1) - 1));
      ratingCounts[idx]++;
    });
  }
 
  const cart = useContext(CartContext);

    
      const handleAdd = () => {
        cart?.addProduct(product);
        Swal.fire({
          title: "¡Añadido al carrito!",
          text: `Has añadido ${qty} unidad(es) de "${name}" al carrito.`,
          icon: "success",
          draggable: true
        });
        if (onAddToCartAction) {
          onAddToCartAction(qty);
        }
      };
    

  
  return (
    <article
    className={`flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden 
                hover:shadow-md transition ${isDetail ? "max-w-5xl mx-auto" : ""}`}
  >
    {isDetail ? (
      /* ================================
         🟦  VISTA DETALLE DE PRODUCTO
         ================================ */
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
  
        {/* IMAGEN PRINCIPAL + MINIATURAS */}
        <div>
          {/* Imagen grande */}
          <div className="relative w-full h-96 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-4">
            <img
              src={mainImg}
              alt={name}
              className="w-full h-full object-contain p-6"
            />
          </div>
  
          {/* Miniaturas */}
          <div className="flex gap-3 justify-center">
            {[img, img, img].map((src, i) => (
              <button
                key={i}
                onClick={() => setMainImg(src)}
                className={`w-20 h-20 border rounded-lg overflow-hidden 
                          hover:border-blue-500 transition 
                          ${mainImg === src ? "border-blue-500" : "border-gray-300"}`}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
  
          {/* Panel de reseñas */}
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <div className="flex items-start gap-6">
  
              {/* Promedio */}
              <div className="text-center pr-6 border-r border-gray-200">
                <div className="text-4xl font-bold text-blue-600">
                  {avgRating ?? "—"}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {totalReviews} reseñas
                </p>
              </div>
  
              {/* Barras */}
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = ratingCounts[star - 1] || 0;
                  const pct = totalReviews ? Math.round((count / totalReviews) * 100) : 0;
  
                  return (
                    <div key={star} className="flex items-center gap-2 mb-2">
                      <span className="text-xs w-6 text-gray-600">{star}★</span>
                      <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-2 bg-blue-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs w-8 text-gray-600 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
  
            {/* Tres reseñas */}
            {reviews && reviews.length > 0 && (
              <div className="mt-5 space-y-3">
                {reviews.slice(0, 3).map((r, i) => (
                  <div key={i} className="p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm text-gray-800">{r.username}</div>
                      <div className="text-yellow-500 text-sm">
                        {"★".repeat(r.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{r.comment}</p>
                  </div>
                ))}
  
                {reviews.length > 3 && (
                  <div className="text-center text-blue-600 text-sm font-medium cursor-pointer">
                    Ver más reseñas
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
  
        {/* ==========================
            INFORMACIÓN DEL PRODUCTO
           ========================== */}
        <div className="flex flex-col">
  
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-blue-600">{category}</span>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{name}</span>
          </nav>
  
          {/* Nombre y Marca */}
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          {brand && (
            <p className="text-gray-600 font-medium mt-1">
              Marca: {brand}
            </p>
          )}
  
          {/* Precio */}
          <p className="text-4xl font-bold text-blue-600 mt-6">
            ${price?.toFixed(2)}
          </p>
  
          {/* Descripción */}
          <p className="text-gray-700 mt-6 leading-relaxed">
            {detailedDescription}
          </p>
          
          {/* Datos técnicos */}
          <div className="grid grid-cols-2 gap-4 mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
            {color && (
              <div>
                <p className="text-sm text-gray-500">Color</p>
                <p className="font-medium text-gray-800">{color}</p>
              </div>
            )}
  
            {material && (
              <div>
                <p className="text-sm text-gray-500">Material</p>
                <p className="font-medium text-gray-800">{material}</p>
              </div>
            )}
  
            {manufacturer && (
              <div>
                <p className="text-sm text-gray-500">Fabricante</p>
                <p className="font-medium text-gray-800">{manufacturer}</p>
              </div>
            )}
  
            {dimensions && (
              <div>
                <p className="text-sm text-gray-500">Dimensiones</p>
                <p className="font-medium text-gray-800">
                  {dimensions.width}×{dimensions.height}×{dimensions.depth} cm
                </p>
              </div>
            )}
          </div>
  
          {/* SKU + Categoria */}
          <div className="flex gap-6 mt-8 text-sm text-gray-700">
            <div>
              <span className="font-medium">SKU:</span>
              <span className="ml-2 font-mono">{sku}</span>
            </div>
            <div>
              <span className="font-medium">Categoría:</span>
              <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {category}
              </span>
              
            </div>
          </div>
  
          {/* Tags */}
          {tags && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-semibold mb-2">Etiquetas:</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
  
          {/* Cantidad + Botón */}
          <div className="flex items-center gap-4 mt-auto pt-8 border-t border-gray-200">
            <label className="font-medium text-gray-800 flex items-center gap-3">
              Cantidad:
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-20 p-2 border border-gray-300 rounded-lg text-center"
              />
            </label>
  
            <Button
              text="Añadir al carrito"
              size="lg"
              variant="modern"
              onClick={handleAdd}
            />
          </div>
  
        </div>
      </div>
    ) : (
      /* ==========================
         CARD PARA LISTA
         ========================== */
      <>
        {/* Imagen */}
        <div className="relative w-full h-52 overflow-hidden bg-gray-100">
          <img src={mainImg} alt={name} className="w-full h-full object-cover" />
        </div>
  
        {/* Body */}
        <div className="flex flex-col justify-between p-4 text-gray-800">
          <h3 className="text-lg font-semibold">{name}</h3>
          {brand && <p className="text-sm text-gray-500">Marca: {brand}</p>}
          <p className="text-sm text-gray-500 line-clamp-2 mt-2">
            {description}
          </p>
  
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-blue-600">
              ${price?.toFixed(2)}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {category}
            </span>
          </div>
        </div>
  
        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
          <span className="uppercase text-xs text-gray-400">SKU: {sku}</span>
          <Link href={`/dashboard/${sku}`}>
            <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition">
              Ver detalles
            </button>
          </Link>
        </div>
      </>
    )}
  </article>
  
  );
}
