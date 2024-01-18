import {create} from 'zustand';

export const useTaskStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  isLoading: false,
  error: null,
}));
