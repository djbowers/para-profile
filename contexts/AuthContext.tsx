'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { AuthUser } from '../lib/auth';
import { getCurrentUser, onAuthStateChange } from '../lib/auth';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
});

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get initial user state
    getCurrentUser()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
      setError(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
