import React from "react";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  return (
    <section className="mt-16">
      <div className=" ml-6 mt-4 flex space-x-16">
        <FilterBar />
        
      </div>

      <ProductList />
    </section>
  );
}
