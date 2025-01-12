import React from 'react';
import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { useStore } from '../store/store';
import { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites } = useStore();

  const isInCart = cart.some((item) => item.id === product.id);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const handleFavoriteClick = () => {
    if (isInFavorites) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price} ₽</p>
      </Link>
      
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleCartClick}
          className={`px-4 py-2 rounded ${
            isInCart ? 'bg-green-500' : 'bg-blue-500'
          } text-white`}
        >
          {isInCart ? 'В корзине' : 'Добавить в корзину'}
        </button>
        
        <button
          onClick={handleFavoriteClick}
          className={`p-2 rounded-full ${
            isInFavorites ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <Heart className="w-6 h-6" fill={isInFavorites ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
};