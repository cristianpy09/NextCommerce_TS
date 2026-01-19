import { MetadataRoute } from 'next';
import { products } from './data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const productUrls = products.map((product) => ({
        url: `https://next-ecommerce-lite.example.com/${product.sku}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: 'https://next-ecommerce-lite.example.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        ...productUrls,
    ];
}
