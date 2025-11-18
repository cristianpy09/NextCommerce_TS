import ProductCardView from "@/app/components/ProductCardView";
import { products } from "@/app/data/products";

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = params;

  const producto = products.find((p) => p.sku === id);

  if (!producto) {
    return (
      <div className="text-center pt-40 text-gray-600">
        Producto no encontrado ❌
      </div>
    );
  }

  return (
    <div className="pt-28 pb-10 max-w-6xl mx-auto px-5">
      <ProductCardView
        mode="detail"
        product={producto}
        name={producto.name}
        img={producto.imageUrl}
        description={producto.description}
        detailedDescription={producto.detailedDescription}
        category={producto.category}
        price={producto.price}
        sku={producto.sku}
        brand={producto.brand}
        rating={producto.rating}
        reviews={producto.reviews}
        tags={producto.tags}
        color={producto.color}
        material={producto.material}
        dimensions={producto.dimensions}
        manufacturer={producto.manufacturer}
      />
    </div>
  );
}
