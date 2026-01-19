"use client";
import Link from "next/link";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";

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
      flex flex-col bg-white border rounded-xl shadow-md 
      w-56 h-72 overflow-hidden 
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-32 bg-gray-100 overflow-hidden">
        {category === "Electrónica" && <Badge label="Oferta" status="info" />}

        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col grow p-3 text-gray-800">
        <h3 className="text-sm font-semibold mb-1 line-clamp-1">{name}</h3>

        <p className="text-xs text-gray-500 line-clamp-2 mb-2">
          {description || "Producto sin descripción disponible."}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-bold text-blue-600">
            ${price?.toFixed(2)}
          </span>

          <span
            className="
            text-xs font-medium px-2 py-1 rounded-full 
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
        px-3 py-2 border-t border-gray-100 bg-gray-50
        "
      >
        <Link href={`/${sku}`}>
          <Button text="Ver detalles" size="sm" variant="modern" />
        </Link>
      </div>
    </article>
  );
}
