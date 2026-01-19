import Link from "next/link";
import { products } from "@/app/data/products";
import { Product } from "@/app/types/productsType";
import ProductCardView from "./ProductCardView";

interface RelatedProductsProps {
    currentCategory: string;
    currentProductId: string;
}

export default function RelatedProducts({ currentCategory, currentProductId }: RelatedProductsProps) {
    // Filter products by same category, exclude current, and take random 4
    const related = products
        .filter((p) => p.category === currentCategory && p.sku !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    if (related.length === 0) return null;

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Productos Relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {related.map((product) => (
                    <ProductCardView
                        key={product.sku}
                        {...product}
                        img={product.imageUrl}
                        product={product}
                        mode="list"
                    />
                ))}
            </div>
        </div>
    );
}
