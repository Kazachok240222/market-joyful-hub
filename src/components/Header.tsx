import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, ShoppingCart, Heart } from 'lucide-react';
import { useStore } from '../store/store';
import { Product } from '../types/types';

const categories = ['Все', 'Электроника', 'Одежда', 'Книги', 'Спорт'];

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cart, favorites } = useStore();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // В реальном приложении здесь будет API запрос
    // Временная заглушка для демонстрации
    const mockResults: Product[] = [
      { id: 1, name: 'Товар 1', price: 100, category: 'Электроника', image: '/product1.jpg', description: 'Описание 1' },
      { id: 2, name: 'Товар 2', price: 200, category: 'Одежда', image: '/product2.jpg', description: 'Описание 2' },
    ].filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(mockResults);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Магазин
        </Link>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="p-2 border rounded">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <div className="flex items-center border rounded">
              <Search className="w-5 h-5 ml-2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск..."
                className="p-2 outline-none"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {searchResults.length > 0 && searchQuery && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-1 z-50">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="block p-2 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="/favorites" className="relative">
            <Heart className="w-6 h-6" />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};