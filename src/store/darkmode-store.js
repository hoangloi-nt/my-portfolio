import create from "zustand";

export const darkmodeStore = create((set) => ({
  darkmode: false,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
}));
