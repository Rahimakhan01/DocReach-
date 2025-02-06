import { createContext, useContext, useState, type ReactNode } from 'react';

export type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'doctor';
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthContextType = AuthState & {
  login: (email: string, password: string, role: 'user' | 'doctor') => Promise<boolean>;
  logout: () => void;
};

// Dummy user data for demonstration
export const dummyUsers = {
  user: {
    id: '1',
    email: 'user@example.com',
    password: 'password123',
    name: 'John Doe',
    role: 'user' as const,
  },
  doctor: {
    id: '2',
    email: 'doctor@example.com',
    password: 'password123',
    name: 'Dr. Jane Smith',
    role: 'doctor' as const,
    specialty: 'Cardiologist',
  },
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const dummyUser = role === 'user' ? dummyUsers.user : dummyUsers.doctor;

    if (email === dummyUser.email && password === dummyUser.password) {
      const { password: _, ...user } = dummyUser;
      setState({ user, isAuthenticated: true });
      return true;
    }

    return false;
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
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