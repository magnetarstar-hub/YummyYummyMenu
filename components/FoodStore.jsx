import { create } from 'zustand';

export const useFoodStore = create((set) => ({
  savedFoods: [],

  addFood: (food) =>
    set((state) => ({
      savedFoods: state.savedFoods.some((f) => f.id === food.id)
        ? state.savedFoods
        : [...state.savedFoods, { ...food, isFav: false }],
    })),

    removeBook: (id) =>
      set((state) => ({
        savedFoods: state.savedFoods.filter((f) => f.id !== id),
      })),

  toggleFavorite: (id) =>
    set((state) => ({
      savedFoods: state.savedFoods.map((f) =>
        f.id === id ? { ...f, isFav: !f.isFav } : f
      ),
    })),
}));
