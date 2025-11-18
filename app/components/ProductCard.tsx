"use client";
import Link from "next/link";
import Button from "./Button";

type Prop = {
  name: string;
  img?: string;
  description?: string;
  category?: string;
  price?: number;
  sku?: string;
};

export default function ProductCard(props: Prop) {
  const { name, img, price, sku, category, description } = props;

  return (
    <article
      className="
      flex flex-col bg-white border border-gray-200 
      rounded-xl shadow-md overflow-hidden 
      transition hover:shadow-lg hover:scale-[1.01]
    "
    >
      {/* Imagen */}
      <div className="relative w-full h-52 bg-gray-100">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col grow p-4 text-gray-800">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {description || "Producto sin descripción disponible."}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-blue-600">
            ${price?.toFixed(2)}
          </span>

          <span
            className="
            text-xs font-medium px-3 py-1 rounded-full 
            bg-blue-100 text-blue-700
          "
          >
            {category}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        flex items-center justify-end 
        px-4 py-3 border-t border-gray-100 bg-gray-50
      "
      >
        <Link href={`/${sku}`}>
          <Button text="Ver detalles" size="md" variant="modern" />
        </Link>
      </div>
    </article>
  );
}
