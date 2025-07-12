import { Session } from '@supabase/supabase-js';

import React from 'react';

import { SessionContext } from '@/contexts/AuthContext';

import { MOCK_USER_SESSION } from './mockData';

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
  session = MOCK_USER_SESSION,
}: MockedAuthProviderProps) {
  return (
    <SessionContext.Provider value={{ session, loading: false }}>
      {children}
    </SessionContext.Provider>
  );
}
