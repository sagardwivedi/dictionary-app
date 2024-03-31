import { create } from 'zustand';

interface FontState {
  font: string;
  setFont: (value: string) => void;
}

export const useFontStore = create<FontState>()((set) => ({
  font: 'font-sans',
  setFont: (value: string) => set({ font: value }),
}));
