
import { create } from "zustand";

export const useReaderStore = create(set => ({
    fontSize: 16,
    theme: "light",
    location: null,

    setFontSize: (size: number) => set({ fontSize: size }),
    setTheme: (theme: "light" | "dark") => set({ theme }),
    setLocation: (loc: string) => set({ location: loc }),
}));
