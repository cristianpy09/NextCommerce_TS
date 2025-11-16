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
  detailedDescription?: string;
  tags?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  material?: string;
  manufacturer?: string;
  releaseDate?: number;
  color?: string;
  rating?: number;
  reviews?: {
    username: string;
    comment: string;
    rating: number;
  }[];
  }