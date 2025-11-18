import ProductList from "../components/ProductList";


export default function Dashboard() {
  return (
    <section className="  pt-10 px-4  lg:px-8 bg-gray-50 min-h-screen">
      {/* TOP FILTER BAR */}
     

      {/* PRODUCT GRID */}
      <div className="w-auto  ">
        <ProductList />
      </div>
    </section>
  );
}
