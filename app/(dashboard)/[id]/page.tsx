import DetailsCard from "@/app/components/features/products/DetailsCard";
import RelatedProducts from "@/app/components/features/products/RelatedProducts";
import Notfound from "@/app/components/ui/NotFoundComponent";
import ProductCard from "@/app/components/features/products/ProductCard";
import ProductCardView from "@/app/components/features/products/ProductCardView";

import { products } from '@/app/data/products';
import { Product } from '@/app/types/productsType';
import { notFound, redirect } from 'next/navigation';


import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.sku === id);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.imageUrl,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailpage({ params }: Props) {
  const data = products;
  const { id } = await params;
  const producto = data.find((p) => p.sku === id);


  if (producto) {
    return (
      <div>
        <DetailsCard
          producto={producto}
          name={producto.name}
          category={producto.category}
          description={producto.description}
          detailedDescription={producto.detailedDescription}
          price={producto.price}
          img={producto.imageUrl}
          sku={producto.sku}
          color={producto.color}
          material={producto.material}
          dimensions={producto.dimensions}
          manufacturer={producto.manufacturer}
          brand={producto.brand}
          rating={producto.rating}
          reviews={producto.reviews}
          tags={producto.tags}
        />
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <RelatedProducts currentCategory={producto.category} currentProductId={producto.sku} />
        </div>
      </div>
    )
  } else redirect(notFound())

}
