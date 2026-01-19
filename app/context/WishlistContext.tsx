"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/productsType";
import { toast } from "sonner";

interface WishlistContextType {
    wishlistItems: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            try {
                setWishlistItems(JSON.parse(storedWishlist));
            } catch (error) {
                console.error("Failed to parse wishlist", error);
            }
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product: Product) => {
        if (!isInWishlist(product.sku)) {
            setWishlistItems((prev) => [...prev, product]);
            toast.success("Añadido a favoritos");
        }
    };

    const removeFromWishlist = (productId: string) => {
        setWishlistItems((prev) => prev.filter((item) => item.sku !== productId));
        toast.info("Eliminado de favoritos");
    };

    const isInWishlist = (productId: string) => {
        return wishlistItems.some((item) => item.sku === productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
