"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  name: string;
  img?: string;
  description?: string;
  category?: string;
  price?: number;
  sku?: string;
  id?: number;
  mode?: "list" | "detail";
  onAddToCartAction?: (qty?: number) => void;
};

export default function ProductCardView({
  name,
  img,
  description,
  category,
  price,
  sku,
  mode = "list",
  onAddToCartAction,
}: Props) {
  const isDetail = mode === "detail";
  const [qty, setQty] = useState<number>(1);
  const [mainImg, setMainImg] = useState<string | undefined>(img);

  return (
    <article className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md">
      {/* Imagen del producto (más grande en detalle). En detalle mostramos miniaturas (placeholder) */}
      <div className={`relative w-full overflow-hidden ${isDetail ? "h-96" : "h-52"}`}>
        <img src={mainImg} alt={name} className="object-cover w-full h-full" />
      </div>

      {isDetail && (
        <div className="flex gap-2 px-4 mt-3 items-center">
          {/* Miniaturas - aquí usamos la misma imagen como placeholder si no hay galería */}
          {[img, img, img].map((src, i) => (
            <button
              key={i}
              onClick={() => setMainImg(src)}
              aria-label={`thumbnail-${i}`}
              className="w-16 h-16 overflow-hidden rounded-md border"
            >
              <img src={src} alt={`${name}-thumb-${i}`} className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      )}

      {/* Contenido del producto */}
      <div className="flex flex-col justify-between p-4 text-gray-800">
        <div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className={`${isDetail ? "text-sm text-gray-600 mb-3" : "text-sm text-gray-500 line-clamp-2 mb-3"}`}>
            {description || "Producto sin descripción disponible."}
          </p>
          {isDetail && (
            <div className="text-sm text-gray-600 mt-2">
              <strong>Detalles:</strong>
              <p className="mt-1">Categoría: {category}</p>
              <p className="mt-1">SKU: {sku}</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-blue-600">${price?.toFixed(2)}</span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">{category}</span>
        </div>
      </div>

      {/* Pie con acciones (diferente según modo) */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-600">
        <span className="uppercase tracking-wider text-xs text-gray-400">SKU: {sku}</span>

        {isDetail ? (
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              Cantidad:
              <input
                aria-label="quantity-input"
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                className="w-20 p-1 border rounded"
              />
            </label>

            <button
              onClick={() => onAddToCartAction?.(qty)}
              className="px-4 py-1.5 rounded-lg bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition"
            >
              Añadir al carrito
            </button>
          </div>
        ) : (
          <Link href={`/dashboard/${sku}`}>
            <button className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition cursor-pointer">
              Ver Detalles
            </button>
          </Link>
        )}
      </div>
    </article>
  );
}
