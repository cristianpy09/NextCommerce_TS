"use client"
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { withAuth } from "../utils/withAuth";
import { getCurrentUser } from "../utils/auth";


 function Dashboard() {
  
  const user = getCurrentUser();
  return (
    <section className="mt-16">
      <div className=" ml-6 bg-red-500 mt-4 flex space-x-16">
        <FilterBar />
        
      </div>

        <ProductList />
     
    </section>
  );
}
export default withAuth(Dashboard);