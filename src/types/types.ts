export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface Comment {
  id: number;
  productId: number;
  text: string;
  rating: number;
  author: string;
  date: string;
}