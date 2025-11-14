import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  return (
    <section className="mt-16">
      <div className=" justify-center ml-7 bg-[#8F8681]  flex space-x-16">
        <FilterBar />
      </div>

      <ProductList />
    </section>
  );
}
