import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AuthenticatedPage } from './AuthenticatedPage';
import { AuthProvider } from '@/contexts/AuthContext';

const meta: Meta<typeof AuthenticatedPage> = {
  title: 'Components/AuthenticatedPage',
  component: AuthenticatedPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MockAuthenticatedState: Story = {
  decorators: [
    (Story) => {
      // Mock authenticated session
      const mockSession = {
        user: {
          id: 'mock-user-id',
          email: 'user@example.com',
          user_metadata: {
            full_name: 'John Doe',
          },
        },
      };

      // Override the useSession hook for this story
      const MockAuthProvider = ({ children }: { children: React.ReactNode }) => (
        <div>
          {/* Mock authenticated state */}
          <div className="min-h-screen bg-background">
            <header className="bg-card shadow-sm border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div>
                    <h1 className="text-xl font-semibold text-foreground">
                      Para Profile
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Welcome, {mockSession.user.user_metadata?.full_name ?? mockSession.user.email}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    Sign Out
                  </button>
                </div>
              </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-secondary to-accent border-border rounded-xl border p-6 shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-primary rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                        P
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        0
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground">
                          Productivity Master
                        </h1>
                        <p className="text-muted-foreground">PARA System Practitioner</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">0</div>
                          <div className="text-xs text-muted-foreground">Total Levels</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-status-positive">0%</div>
                          <div className="text-xs text-muted-foreground">Avg Progress</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-chart-3">0</div>
                          <div className="text-xs text-muted-foreground">Active Items</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-muted-foreground py-8">
                  <p>This is a mock authenticated view showing the main application interface.</p>
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      );

      return (
        <MockAuthProvider>
          <Story />
        </MockAuthProvider>
      );
    },
  ],
};

export const UnauthenticatedState: Story = {
  decorators: [
    (Story) => {
      // Mock unauthenticated state
      const MockAuthProvider = ({ children }: { children: React.ReactNode }) => (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-full max-w-md mx-auto rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Sign In</h3>
              <p className="text-sm text-muted-foreground">
                Sign in to your account to continue
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="text-center text-muted-foreground">
                <p>This is a mock unauthenticated view showing the sign-in form.</p>
                {children}
              </div>
            </div>
          </div>
        </div>
      );

      return (
        <MockAuthProvider>
          <Story />
        </MockAuthProvider>
      );
    },
  ],
};

export const LoadingState: Story = {
  decorators: [
    (Story) => {
      // Mock loading state
      const MockAuthProvider = ({ children }: { children: React.ReactNode }) => (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Loading...</p>
            {children}
          </div>
        </div>
      );

      return (
        <MockAuthProvider>
          <Story />
        </MockAuthProvider>
      );
    },
  ],
};