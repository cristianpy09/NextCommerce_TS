"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const Products = useContext(CartContext);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);

    if (!Products) return;

    if (value.length >= 2) {
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );

      Products.setProductosfinales(filtered);
    } else {
      Products.setProductosfinales(products);
    }
  };

  const clickBusquedaCategoria = (categoria: string) => {
    if (!Products) return;

    const filtered = products.filter(
      (item) => item.category.toLowerCase() === categoria.toLowerCase()
    );

    Products.setProductosfinales(filtered);
  };

  return (
    <div className="dropdown w-full">
      <label className="input w-full flex items-center gap-2">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </label>

      <ul className="dropdown-content menu bg-base-100 rounded-b-sm w-full p-2 shadow border">
        <li>
          <h1 className="font-bold">Lo mas buscado</h1>
        </li>
        <li>
          <button onClick={() => clickBusquedaCategoria("Calzado")}>
            Calzado
          </button>
        </li>
        <li>
          <button onClick={() => clickBusquedaCategoria("Tecnologia")}>
            Tecnología
          </button>
        </li>
        <li>
          <button onClick={() => clickBusquedaCategoria("Moda")}>Moda</button>
        </li>
        <li>
          <button onClick={() => clickBusquedaCategoria("Hogar")}>Hogar</button>
        </li>
        <li>
          <button onClick={() => clickBusquedaCategoria("Accesorios")}>
            Accesorios
          </button>
        </li>
      </ul>
    </div>
  );
}
