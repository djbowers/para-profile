import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
}

// Send email with both magic link and OTP for sign up
export async function signUpWithEmail(email: string, fullName?: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
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
  const { data, error } = await supabase.auth.signInWithOtp({
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
  const { data, error } = await supabase.auth.signInWithOtp({
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
  const { data, error } = await supabase.auth.signInWithOtp({
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
  if (type === 'email' && email) {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });

    if (error) {
      throw error;
    }

    return data;
  } else if (type === 'sms' && phone) {
    const { data, error } = await supabase.auth.verifyOtp({
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
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get profile data
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return {
    id: user.id,
    email: user.email || '',
    full_name: profile?.full_name || undefined,
    avatar_url: profile?.avatar_url || undefined,
  };
}

export async function updateProfile(updates: Partial<AuthUser>) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('No authenticated user');
  }

  const { data, error } = await supabase
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
  return supabase.auth.onAuthStateChange(async (_, session) => {
    if (session?.user) {
      const user = await getCurrentUser();
      callback(user);
    } else {
      callback(null);
    }
  });
}
