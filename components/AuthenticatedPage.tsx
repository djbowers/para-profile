'use client';

import React from 'react';
import { useSession } from '../contexts/AuthContext';
import { AuthForm } from './AuthForm';
import { ParaProfile } from './ParaProfile';
import { Button } from './ui/button';
import { signOut } from '../lib/auth';

export function AuthenticatedPage() {
  const session = useSession();

  if (session === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center test-styles">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading... (CSS test)</p>
        </div>
      </div>
    );
  }

  if (session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with user info and sign out */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Para Profile
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome, {session.user.user_metadata?.full_name || session.user.email}
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
