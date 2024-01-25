import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      funMode: false,
      setupMode: true,
      finishSetup: () => set({ setupMode: false }),
      activeList: null,
      setActiveList: (newActiveList) => set({ activeList: newActiveList }),
      searchTerm: "",
      setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm }),
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
