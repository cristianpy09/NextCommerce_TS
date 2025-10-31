
export interface Product {
    sku: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    isActive: boolean;
    category: string;
    imageUrl: string;
    createdAt: number;
    description?: string;
    tags?: string[];
    dimensions?: {
      width: number;
      height: number;
      depth: number;
    };
  }
  