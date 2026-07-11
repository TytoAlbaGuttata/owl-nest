import { create } from 'zustand';
import type { AuthState } from '../types/auth';

/**
 * @description Zustand store for managing the global authentication state.
 * Syncs with the OIDC context to provide quick access to user data.
 */
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
