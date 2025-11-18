import React from "react";

const categories = [
  "Electrónica",
  "Audio",
  "Ropa",
  "Calzado",
  "Hogar",
  "Muebles",
  "Fotografía",
  "Cocina",
  "Deporte",
  "Iluminación",
  "Salud",
  "Transporte",
];

export default function CategoryFilter() {
  return (
    <form className="flex flex-wrap gap-2 items-center bg-gray-5">
      {categories.map((cat) => (
        <label
          key={cat}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full border 
            border-gray-300 bg-white text-gray-700 text-sm cursor-pointer 
            transition select-none
            hover:bg-gray-100 hover:border-gray-400
            active:scale-[0.97]
          "
        >
          <input
            type="checkbox"
            name="categories"
            value={cat}
            className="accent-blue-600 w-4 h-4"
          />
          {cat}
        </label>
      ))}

      {/* Reset */}
      <button
        type="reset"
        className="
          ml-2 px-3 py-2 rounded-full border border-red-300 text-red-500 
          text-sm hover:bg-red-50 transition
        "
      >
        Limpiar
      </button>
    </form>
  );
}
