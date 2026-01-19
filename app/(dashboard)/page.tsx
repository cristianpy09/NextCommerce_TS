import Carousel from "@/app/components/ui/Carousel";
import ProductList from "@/app/components/features/products/ProductList";


export default function Dashboard() {
  return (
    <section className="  pt-10 px-4  lg:px-8 bg-gray-50 min-h-screen">
      {/* TOP FILTER BAR */}

      <Carousel />
      {/* PRODUCT GRID */}
      <div >
        <ProductList />
      </div>
    </section>
  );
}
