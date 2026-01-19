"use client";

import { useState, useMemo } from "react";
import Carousel from "@/app/components/ui/Carousel";
import ProductList from "@/app/components/features/products/ProductList";
import FilterSidebar from "@/app/components/features/products/FilterSidebar";
import { products } from "@/app/data/products";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("featured");

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  const maxPrice = useMemo(() => {
    return Math.max(...products.map((p) => p.price));
  }, []);

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <section className="bg-gray-50 min-h-screen">
      <Carousel />

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          maxPrice={maxPrice}
        />

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800">
              Mostrando {filteredProducts.length} productos
            </h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-none bg-gray-50 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
