import { create } from "zustand";

export const useTaskStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  addTask: (task) => set((state) => ({ data: [...state.data, task] })),
  isLoading: false,
  error: null,
}));
