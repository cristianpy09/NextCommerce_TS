import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  return (
    <section className="  pt-10 px-4  lg:px-8 bg-gray-50 min-h-screen">
      {/* TOP FILTER BAR */}
      <div className="
        w-auto mx-auto 
        bg-white border border-gray-200 shadow-sm 
        rounded-xl p-4 mb-8
      ">
        <FilterBar />
      </div>

      {/* PRODUCT GRID */}
      <div className="w-auto  ">
        <ProductList />
      </div>
    </section>
  );
}
