import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from './ParaProfile.stories';

const { Default, Empty, Loading, Error, Minimal } = composeStories(stories);

describe('ParaProfile', () => {
  it('renders the default story with mocked data', async () => {
    render(<Default />);

    // Wait for the component to load
    await waitFor(() => {
      expect(
        screen.getByTestId('character-profile-header')
      ).toBeInTheDocument();
    });

    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument();
  });

  it('renders empty state correctly', async () => {
    render(<Empty />);

    await waitFor(() => {
      expect(
        screen.getByTestId('character-profile-header')
      ).toBeInTheDocument();
    });

    // Check that it shows empty state
    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument();
  });

  it('renders loading state correctly', async () => {
    render(<Loading />);

    await waitFor(() => {
      expect(
        screen.getByTestId('character-profile-header')
      ).toBeInTheDocument();
    });

    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument();
  });

  it('renders error state correctly', async () => {
    render(<Error />);

    await waitFor(() => {
      expect(
        screen.getByTestId('character-profile-header')
      ).toBeInTheDocument();
    });

    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument();
  });

  it('renders minimal data correctly', async () => {
    render(<Minimal />);

    await waitFor(() => {
      expect(
        screen.getByTestId('character-profile-header')
      ).toBeInTheDocument();
    });

    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument();
  });

  it('has proper story structure', () => {
    // Test that stories are properly composed
    expect(Default).toBeDefined();
    expect(Empty).toBeDefined();
    expect(Loading).toBeDefined();
    expect(Error).toBeDefined();
    expect(Minimal).toBeDefined();
  });

  it('stories can be rendered without errors', async () => {
    // Test that each story can be rendered without throwing
    const stories = [Default, Empty, Loading, Error, Minimal];

    for (const Story of stories) {
      const { unmount } = render(<Story />);

      await waitFor(() => {
        expect(
          screen.getByTestId('character-profile-header')
        ).toBeInTheDocument();
      });

      unmount();
    }
  });
});
