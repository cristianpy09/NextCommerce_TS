"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
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

  return (
    <article className={`flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md ${isDetail ? "max-w-5xl mx-auto" : ""}`}>
      {isDetail ? (
        // LAYOUT DETALLE: Grid con imagen a la izquierda
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* COLUMNA IZQUIERDA: IMÁGENES */}
          <div className="flex flex-col">
            <div className="relative w-full h-96 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 mb-4">
              <img src={mainImg} alt={name} className="object-contain w-full h-full p-4" />
            </div>
            {/* Galería de miniaturas */}
            <div className="flex gap-2 items-center justify-center">
              {[img, img, img].map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(src)}
                  aria-label={`thumbnail-${i}`}
                  className="w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-400 transition"
                >
                  <img src={src} alt={`${name}-thumb-${i}`} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
            {/* Panel de reseñas (debajo de las miniaturas) */}
            <div className="mt-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="text-center pr-4 border-r border-gray-100">
                    <div className="text-3xl font-bold text-blue-600">{avgRating ?? "—"}</div>
                  </div>

                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = ratingCounts[star - 1] || 0;
                      const pct = totalReviews ? Math.round((count / totalReviews) * 100) : 0;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-xs w-6 text-gray-600">{star}★</span>
                          <div className="bg-gray-200 h-2 rounded flex-1 overflow-hidden">
                            <div className="bg-blue-500 h-2" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-8 text-right text-xs text-gray-600">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lista corta de reseñas */}
                {reviews && reviews.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {reviews.slice(0, 3).map((r, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-gray-800">{r.username}</div>
                          <div className="text-yellow-500 text-sm">{"★".repeat(Math.max(0, Math.min(5, r.rating || 0)))}</div>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{r.comment}</p>
                      </div>
                    ))}
                    {reviews.length > 3 && (
                      <div className="text-center text-sm text-blue-600 font-medium">Ver más reseñas</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="flex flex-col justify-between">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-400 mb-4">
              <a href="/" className="hover:underline text-blue-400">Home</a>
              <span className="mx-2">›</span>
              <span className="text-sky-400">{category}</span>
              <span className="mx-2">›</span>
              <span className="text-gray-600">{name}</span>
            </nav>

            {/* Título y Marca */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
              {brand && <p className="text-lg text-gray-600 font-semibold">Marca: {brand}</p>}
            </div>

            {/* Precio */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-blue-600">${price?.toFixed(2)}</p>
            </div>

            {/* Descripción breve */}
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              {detailedDescription}
            </p>

            {/* Detalles técnicos en una cuadrícula */}
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              {color && (
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Color</p>
                  <p className="text-base text-gray-800">{color}</p>
                </div>
              )}
              {material && (
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Material</p>
                  <p className="text-base text-gray-800">{material}</p>
                </div>
              )}
              {manufacturer && (
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Fabricante</p>
                  <p className="text-base text-gray-800">{manufacturer}</p>
                </div>
              )}
              {dimensions && (
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Dimensiones</p>
                  <p className="text-base text-gray-800">{dimensions.width}×{dimensions.height}×{dimensions.depth} cm</p>
                </div>
              )}
            </div>

            {/* SKU y Categoría */}
            <div className="flex gap-4 mb-6 text-sm">
              <div>
                <span className="text-gray-600">SKU:</span>
                <span className="ml-2 font-mono text-gray-800">{sku}</span>
              </div>
              <div>
                <span className="text-gray-600">Categoría:</span>
                <span className="ml-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">{category}</span>
              </div>
            </div>

            

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">Etiquetas:</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Cantidad y Botón */}
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
              <label className="flex items-center gap-3 text-base font-semibold text-gray-800">
                Cantidad:
                <input
                  aria-label="quantity-input"
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-20 p-2 border border-gray-300 rounded-lg text-center font-semibold"
                />
              </label>
              <button
                onClick={() => onAddToCartAction?.(qty)}
                className="flex-1 px-6 py-3 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition shadow-md"
              >
                🛒 Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ) : (
        // LAYOUT LISTA: Card tradicional
        <>
          <div className="relative w-full overflow-hidden h-52">
            <img src={mainImg} alt={name} className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col justify-between p-4 text-gray-800">
            <div>
              <h3 className="text-lg font-semibold mb-1">{name}</h3>
              {brand && <p className="text-sm text-gray-500 font-medium mb-2">Marca: {brand}</p>}
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {description || "Producto sin descripción disponible."}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-lg font-bold text-blue-600">${price?.toFixed(2)}</span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">{category}</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-600">
            <span className="uppercase tracking-wider text-xs text-gray-400">SKU: {sku}</span>
            <Link href={`/dashboard/${sku}`}>
              <button className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition cursor-pointer">
                Ver Detalles
              </button>
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
