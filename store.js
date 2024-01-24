import { create } from "zustand";

export const useTaskStore = create((set) => ({
  activeList: null,
  setActiveList: (newActiveList) => set({ activeList: newActiveList }),
}));
