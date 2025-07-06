import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
}

// Helper function to check if Supabase client is available
const checkSupabaseClient = () => {
  if (!supabase) {
    throw new Error('Supabase client is not available');
  }
};

// Send email with both magic link and OTP for sign up
export async function signUpWithEmail(email: string, fullName?: string) {
  checkSupabaseClient();

  const { data, error } = await supabase!.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

// Send email with both magic link and OTP for sign in
export async function signInWithEmail(email: string) {
  checkSupabaseClient();

  const { data, error } = await supabase!.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

// Send OTP to phone for sign up
export async function signUpWithOTP(phone: string, fullName?: string) {
  checkSupabaseClient();

  const { data, error } = await supabase!.auth.signInWithOtp({
    phone,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

// Send OTP to phone for sign in
export async function signInWithOTP(phone: string) {
  checkSupabaseClient();

  const { data, error } = await supabase!.auth.signInWithOtp({
    phone,
  });

  if (error) {
    throw error;
  }

  return data;
}

// Verify OTP token
export async function verifyOTP(
  email: string | undefined,
  phone: string | undefined,
  token: string,
  type: 'email' | 'sms'
) {
  checkSupabaseClient();

  if (type === 'email' && email) {
    const { data, error } = await supabase!.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });

    if (error) {
      throw error;
    }

    return data;
  } else if (type === 'sms' && phone) {
    const { data, error } = await supabase!.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    });

    if (error) {
      throw error;
    }

    return data;
  } else {
    throw new Error('Invalid verification parameters');
  }
}

export async function signOut() {
  checkSupabaseClient();

  const { error } = await supabase!.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    if (!supabase) {
      return null;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    // Return user data without profile lookup for now to avoid hanging
    return {
      id: user.id,
      email: user.email || '',
      full_name: user.user_metadata?.full_name || undefined,
      avatar_url: user.user_metadata?.avatar_url || undefined,
    };
  } catch (error) {
    console.warn('Authentication error:', error);
    return null;
  }
}

export async function updateProfile(updates: Partial<AuthUser>) {
  checkSupabaseClient();

  const {
    data: { user },
  } = await supabase!.auth.getUser();

  if (!user) {
    throw new Error('No authenticated user');
  }

  const { data, error } = await supabase!
    .from('profiles')
    .update(updates)
    .eq('id', user.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Listen to auth state changes
export function onAuthStateChange(callback: (user: AuthUser | null) => void) {
  if (!supabase) {
    return { data: { subscription: { unsubscribe: () => {} } } };
  }

  return supabase.auth.onAuthStateChange(async (_, session) => {
    if (session?.user) {
      const user = await getCurrentUser();
      callback(user);
    } else {
      callback(null);
    }
  });
}
