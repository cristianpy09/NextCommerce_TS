"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function SearchBar() {
  const [text, setText] = useState("");
  const [debounced, setDebounced] = useState("");
  const [open, setOpen] = useState(false);
  const Products = useContext(CartContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(text);
    }, 900);
    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    console.log("debounced:", debounced);
  }, [debounced]);

  const clickBusqueda = (e:any)=>{
    if (debounced==="Calzado") {
      console.log("solo mostrar calzado");
       
        if (Products) {
          const filterProducts=Products.productosfinales.filter(product=>(product.category==="Calzado"))
          const setProductos = Products.setProductosfinales
          setProductos(filterProducts)
    }
    setOpen(false)
  }  }
  return (
    <>
      <div className="dropdown w-full">
        {/* INPUT */}
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
            onClick={() => setOpen(true)}
            onChange={(e) => setText(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>

        {open && (
          <ul className="dropdown-content menu bg-base-100 rounded-box w-208 p-2 shadow z-[100] mt-0">
            <li>
              <button
                onClick={clickBusqueda}
              >
                {debounced}
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
)}
