import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AuthForm } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'Components/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSuccess: {
      action: 'onSuccess',
      description: 'Callback when authentication is successful',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: () => {
      console.log('Authentication successful!');
    },
  },
};

export const WithSuccessCallback: Story = {
  args: {
    onSuccess: () => {
      alert('Authentication successful!');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows the AuthForm with a success callback that displays an alert when authentication is successful.',
      },
    },
  },
};

export const SignInFlow: Story = {
  args: {
    onSuccess: () => {
      console.log('Sign in successful!');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default view shows the sign-in form. Users can enter their email to receive a magic link.',
      },
    },
  },
};

export const SignUpFlow: Story = {
  args: {
    onSuccess: () => {
      console.log('Sign up successful!');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Click "Don&apos;t have an account? Sign up" to see the sign-up form with the additional name field.',
      },
    },
  },
};

export const EmailSentState: Story = {
  args: {
    onSuccess: () => {
      console.log('Authentication successful!');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'After submitting the form, users see this state with options to use the magic link or enter a verification code.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    onSuccess: () => {
      alert('Welcome! You have successfully authenticated.');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Try the full authentication flow: toggle between sign-in and sign-up, submit the form, and handle the email verification step.',
      },
    },
  },
};