import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addCartItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeAllItems: () => set({ items: [] }),
}));

export default useCartStore;
