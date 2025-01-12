import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductPage } from './components/ProductPage';
import { Product } from './types/types';

// Временные данные для демонстрации
const products: Product[] = [
  {
    id: 1,
    name: 'Товар 1',
    price: 1000,
    category: 'Электроника',
    image: '/product1.jpg',
    description: 'Описание 1',
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 2000,
    category: 'Одежда',
    image: '/product2.jpg',
    description: 'Описание 2',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;