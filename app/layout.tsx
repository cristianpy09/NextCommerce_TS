import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { roboto } from "./fonts/fonts";


import { Product } from "./types/productsType";
import { CartContext } from "./context/CartContext";
import CartProvider from "./context/CartProvider";

export const metadata: Metadata = {
  title: {
    template: '%s | EcommerceLite',
    default: 'EcommerceLite - Tu tienda online premium',
  },
  description: "Descubre los mejores productos con la mejor calidad y precio en EcommerceLite.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <CartProvider>
      <html data-theme="corporate" lang="es" className={roboto.className}>
        <body>{children}</body>
      </html>
    </CartProvider>
  );
}
