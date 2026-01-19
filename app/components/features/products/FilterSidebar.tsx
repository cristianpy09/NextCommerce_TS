"use client";
import React from 'react';
import { SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
    priceRange: [number, number];
    onPriceChange: (range: [number, number]) => void;
    maxPrice: number;
}

export default function FilterSidebar({
    categories,
    selectedCategory,
    onSelectCategory,
    priceRange,
    onPriceChange,
    maxPrice
}: FilterSidebarProps) {
    return (
        <div className="w-full md:w-64 flex-shrink-0 bg-white p-6 rounded-xl border border-gray-100 h-fit sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-gray-900 border-b border-gray-100 pb-4">
                <SlidersHorizontal size={20} className="text-blue-600" />
                <h3 className="font-bold text-lg">Filtros</h3>
            </div>

            {/* Categories */}
            <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Categoría</h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="category"
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            checked={selectedCategory === null}
                            onChange={() => onSelectCategory(null)}
                        />
                        <span className={`text-sm ${selectedCategory === null ? 'text-blue-600 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                            Todas
                        </span>
                    </label>

                    {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="category"
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                checked={selectedCategory === cat}
                                onChange={() => onSelectCategory(cat)}
                            />
                            <span className={`text-sm capitalize ${selectedCategory === cat ? 'text-blue-600 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Precio</h4>
                <div className="px-1">
                    <input
                        type="range"
                        min={0}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-3 text-sm font-medium text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span className="text-blue-600">${priceRange[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
