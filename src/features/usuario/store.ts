import { create } from 'zustand';

type UserState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));
