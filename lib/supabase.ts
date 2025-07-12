import { createClient } from '@supabase/supabase-js';

import type { Database } from '../types/supabase';

// Only create the client if we're in the browser and have the required environment variables
const createSupabaseClient = () => {
  if (typeof window === 'undefined') {
    // Server-side or build time - return a mock client
    return null;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not set');
    return null;
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();
