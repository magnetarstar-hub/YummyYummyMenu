import { create } from 'zustand';

export const useFoodStore = create((set) => ({
    savedFoods: [],
    saveFood : (food) =>
        set((state) => ({
            savedFoods: state.savedFoods.some((f) => f.id === food.id)
              ? state.savedFoods
              : [...state.savedFoods, food],
          })),
        removeBook: (id) =>
            set((state) => ({
              savedFoods: state.savedFoods.filter((f) => f.id !== id),
            })),
}));
