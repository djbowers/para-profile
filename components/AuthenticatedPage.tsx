'use client';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AuthForm } from './AuthForm';
import { ParaProfile } from './ParaProfile';
import { Button } from './ui/button';
import { signOut } from '../lib/auth';

export function AuthenticatedPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with user info and sign out */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Para Profile
              </h1>
              <p className="text-sm text-gray-500">
                Welcome, {user.full_name || user.email}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="text-sm"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ParaProfile
          initialProjects={[]}
          initialAreas={[]}
          initialResources={[]}
          initialArchived={[]}
        />
      </main>
    </div>
  );
}
