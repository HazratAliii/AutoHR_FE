import { create } from "zustand";

interface StoreState {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

export const useSidebarStore = create<StoreState>((set) => ({
  activeComponent: "",
  setActiveComponent: (component: string) => {
    set({ activeComponent: component });
  },
}));
