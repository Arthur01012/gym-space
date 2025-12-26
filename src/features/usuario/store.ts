import { create } from 'zustand';
import {
  getUser,
  saveUser,
  getSession,
  setSession,
  clearSession,
} from '../../services/storage/user.storage';

type User = {
  username: string;
  email: string;
  profileImage?: string;
};

type UserState = {
  user: User | null;
  isLoggedIn: boolean | undefined;

  register: (user: User) => Promise<void>;
  login: () => Promise<boolean>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
  updateProfileImage: (uri: string) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: undefined,

  register: async (user) => {
    await saveUser(user);
    await setSession();
    set({ user, isLoggedIn: true });
  },

  login: async () => {
    const user = await getUser();
    if (!user) return false;

    await setSession();
    set({ user, isLoggedIn: true });
    return true;
  },

  logout: async () => {
    await clearSession();
    set({ user: null, isLoggedIn: false });
  },

  hydrate: async () => {
    const user = await getUser();
    const session = await getSession();

    if (user && session) {
      set({ user, isLoggedIn: true });
    } else {
      set({ user: null, isLoggedIn: false });
    }
  },

  updateProfileImage: async (uri: string) => {
    set((state) => {
      if (!state.user) return state;

      const updatedUser = {
        ...state.user,
        profileImage: uri,
      };

      saveUser(updatedUser);

      return { user: updatedUser };
    });
  },
}));
