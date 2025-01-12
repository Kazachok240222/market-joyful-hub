import { create } from 'zustand';

export const useStore = create((set) => ({
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