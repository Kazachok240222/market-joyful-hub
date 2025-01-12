import { create } from 'zustand';
import { Product } from '../types/types';

interface StoreState {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  addToFavorites: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFromFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),
}));