import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      funMode: false,
      activeList: null,
      setActiveList: (newActiveList) => set({ activeList: newActiveList }),
      toggleFunMode: () =>
        set((state) => ({
          funMode: !state.funMode,
        })),
    }),
    {
      name: "task-tango-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
