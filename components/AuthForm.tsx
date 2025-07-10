'use client';

import React, { useState } from 'react';
import { signInWithEmail, signUpWithEmail, verifyOTP } from '../lib/auth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

interface AuthFormProps {
  onSuccess?: () => void;
}

type AuthStep = 'input' | 'sent';

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authStep, setAuthStep] = useState<AuthStep>('input');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (authStep === 'input') {
        if (isSignUp) {
          await signUpWithEmail(email, fullName);
        } else {
          await signInWithEmail(email);
        }
        setAuthStep('sent');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await verifyOTP(email, undefined, otpToken, 'email');
      onSuccess?.();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setAuthStep('input');
    setEmail('');
    setFullName('');
    setOtpToken('');
    setError('');
    setShowOtpInput(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          {authStep === 'sent'
            ? 'Check Your Email'
            : isSignUp
              ? 'Create Account'
              : 'Sign In'}
        </CardTitle>
        <CardDescription>
          {authStep === 'sent'
            ? 'We sent you a magic link and verification code. Click the link or enter the code below.'
            : isSignUp
              ? 'Create a new account to start tracking your progress'
              : 'Sign in to your account to continue'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {authStep === 'input' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name for Sign Up */}
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required={isSignUp}
                />
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Error Display */}
            {error && <div className="text-red-500 text-sm">{error}</div>}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? 'Sending...'
                : isSignUp
                  ? 'Create Account'
                  : 'Send Login Email'}
            </Button>

            {/* Sign Up/Sign In Toggle */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  resetForm();
                }}
                className="text-sm text-primary hover:underline"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        )}

        {authStep === 'sent' && (
          <div className="space-y-4">
            {/* Option to enter OTP */}
            {!showOtpInput ? (
              <div className="space-y-4">
                <div className="text-center text-sm text-gray-600">
                  Check your email for a magic link to sign in instantly, or
                  enter the verification code below.
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowOtpInput(true)}
                >
                  Enter Verification Code
                </Button>
              </div>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otpToken">Verification Code</Label>
                  <Input
                    id="otpToken"
                    type="text"
                    value={otpToken}
                    onChange={(e) => setOtpToken(e.target.value)}
                    placeholder="Enter the 6-digit code"
                    required
                    maxLength={6}
                  />
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify Code'}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowOtpInput(false)}
                >
                  Back to Magic Link
                </Button>
              </form>
            )}

            {/* Back to start */}
            <div className="text-center">
              <button
                type="button"
                onClick={resetForm}
                className="text-sm text-primary hover:underline"
              >
                Use different email
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
