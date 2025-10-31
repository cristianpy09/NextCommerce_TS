"use client";
import { useParams } from "next/navigation";

type Prop = {
  name: string;
  img?: string;
  description?: string;
  category?: string;
  price?: number;
  sku?: string;
  id?: number;
  w?: string;
  idUrl?: number;
};

export default function ProductCard(props: Prop) {
  const { name, img, price, sku, category, description } = props;
  const params = useParams();
  const idURL = params.id;

  return (
    <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Imagen del producto */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Contenido del producto */}
      <div className="flex flex-col justify-between p-5 text-white">
        <div>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-300 line-clamp-2 mb-3">
            {description || "Producto sin descripción disponible."}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ${price?.toFixed(2)}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 border border-white/30">
            {category}
          </span>
        </div>
      </div>

      {/* Pie con acciones o etiquetas */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-white/5 text-sm text-gray-300">
        <span className="uppercase tracking-wider text-xs text-gray-400">
          SKU: {sku}
        </span>
        <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
