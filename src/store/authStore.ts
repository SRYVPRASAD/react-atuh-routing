import { create } from 'zustand';
import { AuthState } from '../types/auth';

const mockPassword = 'correctPassword'; // Define a mock password

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  login: async (email: string, password: string) => {
    set({ loading: true });
    try {
      // Simulate API call and password validation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (password === mockPassword) {
        set({
          user: { id: '1', email, name: 'John Doe' },
          isAuthenticated: true,
          loading: false,
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
      throw new Error('Invalid credentials');
    }
  },
  logout: () => set({ user: null, isAuthenticated: false, loading: false }),
}));
