import { create } from "zustand";

export type ProductStateProps = {
  products: any;
  setProducts: Function;
};

export const useProductStore = create<ProductStateProps>((set) => ({
  products: null,
  setProducts: (value: any) => set({ products: value }),
}));
