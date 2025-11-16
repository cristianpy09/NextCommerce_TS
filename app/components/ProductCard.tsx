"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "./Button";

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
    <article className="flex flex-col justify-between bg-[#E1DCD9] border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md">
      {/* Imagen del producto */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={img}
          alt={name}
          className=" w-full h-full "
        />
      </div>

      {/* Contenido del producto */}
      <div className="flex flex-col justify-between p-4 text-gray-800">
        <div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">
            {description || "Producto sin descripción disponible."}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-blue-600">
            ${price?.toFixed(2)}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            {category}
          </span>
        </div>
      </div>

      {/* Pie con acciones */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-[#8F8681] text-sm text-gray-600">
        
        <Link href={`/${sku}`}>
       <Button text="ver detalles" size={"md"} variant={"modern"}/>
            
          
        </Link>
      </div>
    </article>
  );
}
