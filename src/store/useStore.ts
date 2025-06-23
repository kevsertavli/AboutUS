import { create } from 'zustand';
import type { AppState, User } from '../types';

interface Store extends AppState {
  // Actions
  setUser: (user: User | null) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useStore = create<Store>((set) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  theme: 'light',
  loading: false,

  // Actions
  setUser: (user: User | null) => set({ user }),
  setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
  setLoading: (loading: boolean) => set({ loading }),
  logout: () => set({ user: null, isAuthenticated: false }),
})); 