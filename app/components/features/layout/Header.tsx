"use client";

import { useContext } from "react";
import SearchBar from "@/app/components/ui/SearchBar";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";
import { products } from "@/app/data/products";
import { ShoppingBag, User, LogOut, Heart, LogIn } from "lucide-react";

export default function Header() {
  const cart = useContext(CartContext);
  const { user, logout } = useAuth();

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
          {user ? (
            <div className="relative group z-50">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border border-gray-200"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt={user.name}
                      src={user.avatar || "https://ui-avatars.com/api/?name=User"}
                    />
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content bg-white rounded-box z-[100] mt-3 w-52 p-2 shadow-lg border border-gray-100">
                  <li className="border-b border-gray-100 pb-2 mb-2 px-4">
                    <span className="font-semibold text-gray-800">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </li>
                  <li>
                    <Link href="/profile" className="flex items-center gap-2">
                      <User size={16} /> Mi Perfil
                    </Link>
                  </li>
                  <li>
                    <button onClick={logout} className="flex items-center gap-2 text-red-600 hover:bg-red-50">
                      <LogOut size={16} /> Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                <LogIn size={20} />
                <span className="hidden sm:block">Entrar</span>
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
