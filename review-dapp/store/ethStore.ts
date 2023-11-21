import { create } from "zustand";

export type EthStateProps = {
  contract: any;
  provider: any;
  account: any;
  setContract: Function;
  setAccount: Function;
  setProvider: Function;
};

export const useEthStore = create<EthStateProps>((set) => ({
  contract: null,
  provider: null,
  account: null,
  setContract: (value: any) => set({ contract: value }),
  setAccount: (value: any) => set({ account: value }),
  setProvider: (value: any) => set({ provider: value }),
}));
