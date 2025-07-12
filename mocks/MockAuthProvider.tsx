import { Session } from '@supabase/supabase-js';

import React, { useEffect, useState } from 'react';

import { SessionContext } from '@/contexts/AuthContext';

import { createMockSession } from './mockData';

interface MockedAuthProviderProps {
  children: React.ReactNode;
  session?: Session | null;
}

/**
 * A provider that mocks the AuthContext for testing/Storybook.
 * This provides the same interface as the real AuthProvider but with mock data.
 */
export function MockedAuthProvider({
  children,
  session,
}: MockedAuthProviderProps) {
  const [mockSession, setMockSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading period like the real auth provider
    const timer = setTimeout(() => {
      setMockSession(session !== undefined ? session : createMockSession());
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [session]);

  return (
    <SessionContext.Provider value={{ session: mockSession, loading }}>
      {children}
    </SessionContext.Provider>
  );
}
