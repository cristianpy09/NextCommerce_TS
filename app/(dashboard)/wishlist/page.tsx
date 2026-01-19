"use client";
import React from 'react';
import { useWishlist } from "@/app/context/WishlistContext";
import ProductCardView from "@/app/components/features/products/ProductCardView";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistPage() {
    const { wishlistItems } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                    <Heart size={48} className="text-gray-400" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu lista de deseos está vacía</h1>
                <p className="text-gray-500 mb-8 max-w-md">
                    Aún no has guardado ningún producto. Explora nuestro catálogo y guarda tus favoritos para después.
                </p>
                <Link href="/">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                        Explorar Productos
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-10">
                <Heart className="text-red-500 fill-red-500" size={32} />
                <h1 className="text-3xl font-bold text-gray-900">Mis Favoritos</h1>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {wishlistItems.length} items
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {wishlistItems.map((product) => (
                    <ProductCardView
                        key={product.sku}
                        {...product}
                        product={product}
                        mode="list"
                    />
                ))}
            </div>
        </div>
    );
}
