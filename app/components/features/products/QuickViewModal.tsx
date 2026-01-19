"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/app/types/productsType";
import { useWishlist } from "@/app/context/WishlistContext";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { toast } from "sonner";
import Link from "next/link";

interface QuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    const { addToWishlist, isInWishlist } = useWishlist();
    const cart = useContext(CartContext);

    if (!product) return null;

    const isFavorite = isInWishlist(product.sku);
    const avgRating = product.rating || 4.5;

    const handleAddToCart = () => {
        cart?.addProduct(product);
        toast.success(`${product.name} added to cart`);
    };

    const handleToggleWishlist = () => {
        if (isFavorite) {
            // removeFromWishlist would be called here
        } else {
            addToWishlist(product);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                                {/* Image */}
                                <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-8"
                                    />
                                    {product.discount && (
                                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            -{product.discount}%
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-3">
                                        {product.category}
                                    </span>

                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={i < Math.floor(avgRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">({avgRating})</span>
                                    </div>

                                    <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                                        )}
                                    </div>

                                    {/* Stock Status */}
                                    {product.inStock !== undefined && (
                                        <div className="mb-6">
                                            {product.inStock ? (
                                                <span className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                                    In Stock {product.stock && `(${product.stock} available)`}
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
                                                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                                    Out of Stock
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-3 mt-auto">
                                        <button
                                            onClick={handleAddToCart}
                                            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                                        >
                                            <ShoppingCart size={20} />
                                            Add to Cart
                                        </button>

                                        <button
                                            onClick={handleToggleWishlist}
                                            className={`p-3 rounded-xl border-2 transition ${isFavorite
                                                    ? "border-red-500 bg-red-50 text-red-500"
                                                    : "border-gray-200 hover:border-red-500 hover:bg-red-50 hover:text-red-500"
                                                }`}
                                        >
                                            <Heart className={isFavorite ? "fill-current" : ""} size={24} />
                                        </button>
                                    </div>

                                    <Link href={`/${product.sku}`} className="mt-4 text-center text-blue-600 hover:underline text-sm font-medium">
                                        View Full Details →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
