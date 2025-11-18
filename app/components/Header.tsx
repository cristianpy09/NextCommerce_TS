"use client"

import { useContext } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { CartContext } from "../context/CartContext";


export default function Header() {
  const cart = useContext(CartContext);
  
  const count = cart ? cart.products.length : 0;
  
 
  return (
    <header className="w-full fixed left-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Branding */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Ecommerce<span className="text-blue-600">Lite</span>
        </Link>

        {/* Center: Search bar */}
        <div className="hidden md:block flex-1 px-6">
          <SearchBar />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link href="/cart">
            <button
              className=" cursor-pointer
                relative w-10 h-10 flex items-center justify-center 
                rounded-full hover:bg-gray-100 transition
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 
                    0a2 2 0 100 4 2 2 0 000-4zm-8 
                    2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {/* Badge */}
              <span
                className="
                  absolute -top-1 -right-1 bg-blue-600 text-white 
                  text-xs w-5 h-5 flex items-center justify-center 
                  rounded-full
                "
              >
                {count}
              </span>
            </button>
          </Link>

          {/* User Avatar */}
          <div className="relative group">
            <button
              className="
                w-10 h-10 rounded-full overflow-hidden border border-gray-300 
                
              "
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </button>

           
          </div>

        </div>
      </nav>
    </header>
  );
}
