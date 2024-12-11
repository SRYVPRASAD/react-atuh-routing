export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: { id: string; email: string; name: string } | null;
  isAuthenticated: boolean;
  loading: boolean; // Add this line to include loading
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProvider {
  isAuthenticated: boolean;
  username: null | string;
  signin(username: string): Promise<void>;
  signout(): Promise<void>;
}

/**
 * https://github.com/remix-run/react-router/blob/dev/examples/auth-router-provider/src/auth.ts
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: false,
  username: null,
  async signin(username: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.username = username;
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.username = '';
  },
};
