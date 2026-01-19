import Link from "next/link";
import { products } from "@/app/data/products";
import { Product } from "@/app/types/productsType";

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
                    <Link key={product.sku} href={`/${product.sku}`} className="group">
                        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative aspect-square overflow-hidden bg-gray-50">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-blue-600 font-medium mb-1">{product.category}</p>
                                <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition">
                                    {product.name}
                                </h4>
                                <p className="text-gray-900 font-bold mt-2">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
