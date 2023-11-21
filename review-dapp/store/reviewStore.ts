import { create } from "zustand";

export type ReviewStateProps = {
  reviews: any;
  setReviews: Function;
};

export const useReviewStore = create<ReviewStateProps>((set) => ({
  reviews: null,
  setReviews: (value: any) => set({ reviews: value }),
}));
