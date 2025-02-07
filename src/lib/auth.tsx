import { createContext, useContext, useState, type ReactNode } from 'react';

export type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'doctor';
  specialty?: string; // Optional field for doctors
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthContextType = AuthState & {
  login: (email: string, password: string, role: 'user' | 'doctor') => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string, role: 'user' | 'doctor') => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        setState({ user: data.user, isAuthenticated: true });
        localStorage.setItem('token', data.token); // Store token in localStorage
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}