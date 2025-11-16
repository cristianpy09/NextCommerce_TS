import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailpage({ params }: Props) {
  const data = products;
  const { id } = await params;
  const producto = data.find((p) => p.sku === id);

  if (producto) {
    return (
      <div>
        <ProductCard
          name={producto.name}
          category={producto.category}
          description={producto.description}
          price={producto.price}
          img={producto.imageUrl}
        />
      </div>
    );
  }
}
