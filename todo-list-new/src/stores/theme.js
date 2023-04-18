import { create } from "zustand";
import { Dark, Light } from "@/styles/_theme";

export const useTheme = create((set) => ({
  theme: Dark,
  setTheme: (theme) => set((state) => ({ theme: theme })),
}));
