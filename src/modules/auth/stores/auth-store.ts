import { create } from 'zustand';
import { authService } from '../services';

interface AuthState {
  user: any;
  login: (email, password) => Promise<void>;
  logout: () => Promise<void>;
}

export const useStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    const user = await authService.login(email, password);
    set({ user });
  },
  logout: async () => {
    await authService.logout();
    set({ user: null });
  },
}));
