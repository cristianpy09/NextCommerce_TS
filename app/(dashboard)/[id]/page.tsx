import DetailsCard from '@/app/components/DetailsCard';
import Notfound from '@/app/components/notfound';
import ProductCard from '@/app/components/ProductCard';
import ProductCardView from '@/app/components/ProductCardView';

import { products } from '@/app/data/products';
import { Product } from '@/app/types/productsType';
import { notFound, redirect } from 'next/navigation';


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
      </div>
    )
  }else  redirect(notFound())

}
