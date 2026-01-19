"use client";

import { useContext } from "react";
import SearchBar from "@/app/components/ui/SearchBar";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { redirect } from "next/navigation";
import { products } from "@/app/data/products";
import { ShoppingBag, User, LogOut, Heart } from "lucide-react";

export default function Header() {
  const cart = useContext(CartContext);
  const resetProducts = () => {
    const setNuevo = cart?.setDisplayProducts
    if (setNuevo) {
      setNuevo(products)
    }

  }
  const count = cart ? cart.cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0) : 0;

  return (
    <header className="w-full fixed left-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Branding */}
        <Link onClick={resetProducts} href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Ecommerce<span className="text-blue-600">Lite</span>
        </Link>

        {/* Center: Search bar */}
        <div className="hidden md:block flex-1 max-w-xl px-8">
          <SearchBar />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Wishlist */}
          <Link href="/wishlist">
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 transition text-gray-600 hover:text-red-500"
            >
              <Heart size={24} />
            </button>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 transition text-gray-600 hover:text-blue-600"
            >
              <ShoppingBag size={24} />

              {/* Badge */}
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {count}
                </span>
              )}
            </button>
          </Link>

          {/* User Avatar */}

          <div className="relative group">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <button onClick={() => redirect("/login")}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
