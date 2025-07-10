'use client';

import React from 'react';
import { useSession } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { AuthForm } from './AuthForm';
import { ParaProfile } from './ParaProfile';
import { Button } from './ui/button';
import { signOut } from '../lib/auth';
import { Moon, Sun } from 'lucide-react';

export function AuthenticatedPage() {
  const { session } = useSession();
  const { theme, toggleTheme } = useTheme();

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
                Welcome,{' '}
                {session.user.user_metadata?.full_name ?? session.user.email}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => signOut()}
                className="text-sm"
              >
                Sign Out
              </Button>
            </div>
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
