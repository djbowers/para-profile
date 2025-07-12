import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Moon, Sun } from 'lucide-react';

import { useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const meta: Meta = {
  title: 'Design System/Color Palette',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// Dark mode toggle component
const DarkModeToggle = ({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onToggle}
    className="h-9 w-9 mb-4"
  >
    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  </Button>
);

// Color swatch component
const ColorSwatch = ({
  name,
  color,
  className = '',
}: {
  name: string;
  color: string;
  className?: string;
}) => (
  <div className="flex flex-col space-y-2">
    <div
      className={`w-20 h-20 rounded-lg border border-border ${className}`}
      style={{ backgroundColor: color }}
    />
    <div className="text-xs font-medium text-foreground">{name}</div>
    <div className="text-xs text-muted-foreground font-mono">{color}</div>
  </div>
);

// Semantic color section
const SemanticColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Semantic Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch
          name="Primary"
          color="hsl(var(--primary))"
          className="bg-primary"
        />
        <ColorSwatch
          name="Secondary"
          color="hsl(var(--secondary))"
          className="bg-secondary"
        />
        <ColorSwatch
          name="Muted"
          color="hsl(var(--muted))"
          className="bg-muted"
        />
        <ColorSwatch
          name="Accent"
          color="hsl(var(--accent))"
          className="bg-accent"
        />
        <ColorSwatch
          name="Destructive"
          color="hsl(var(--destructive))"
          className="bg-destructive"
        />
      </div>
    </CardContent>
  </Card>
);

// Status colors section
const StatusColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Status Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <ColorSwatch
          name="Neutral"
          color="hsl(var(--status-neutral))"
          className="bg-status-neutral"
        />
        <ColorSwatch
          name="Info"
          color="hsl(var(--status-info))"
          className="bg-status-info"
        />
        <ColorSwatch
          name="Positive"
          color="hsl(var(--status-positive))"
          className="bg-status-positive"
        />
        <ColorSwatch
          name="Warning"
          color="hsl(var(--status-warning))"
          className="bg-status-warning"
        />
        <ColorSwatch
          name="Error"
          color="hsl(var(--status-error))"
          className="bg-status-error"
        />
      </div>
    </CardContent>
  </Card>
);

// Progress colors section
const ProgressColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Progress Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch
          name="Excellent (80%+)"
          color="hsl(var(--progress-excellent))"
          className="bg-progress-excellent"
        />
        <ColorSwatch
          name="Good (60-79%)"
          color="hsl(var(--progress-good))"
          className="bg-progress-good"
        />
        <ColorSwatch
          name="Fair (40-59%)"
          color="hsl(var(--progress-fair))"
          className="bg-progress-fair"
        />
        <ColorSwatch
          name="Poor (<40%)"
          color="hsl(var(--progress-poor))"
          className="bg-progress-poor"
        />
      </div>
    </CardContent>
  </Card>
);

// Level colors section
const LevelColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Level Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch
          name="Expert (10+)"
          color="hsl(var(--level-expert))"
          className="bg-level-expert"
        />
        <ColorSwatch
          name="Advanced (7-9)"
          color="hsl(var(--level-advanced))"
          className="bg-level-advanced"
        />
        <ColorSwatch
          name="Intermediate (4-6)"
          color="hsl(var(--level-intermediate))"
          className="bg-level-intermediate"
        />
        <ColorSwatch
          name="Beginner (1-3)"
          color="hsl(var(--level-beginner))"
          className="bg-level-beginner"
        />
      </div>
    </CardContent>
  </Card>
);

// UI colors section
const UIColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>UI Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch
          name="Background"
          color="hsl(var(--background))"
          className="bg-background border-2"
        />
        <ColorSwatch
          name="Foreground"
          color="hsl(var(--foreground))"
          className="bg-foreground"
        />
        <ColorSwatch
          name="Card"
          color="hsl(var(--card))"
          className="bg-card border-2"
        />
        <ColorSwatch
          name="Popover"
          color="hsl(var(--popover))"
          className="bg-popover border-2"
        />
      </div>
    </CardContent>
  </Card>
);

// Muted colors section
const MutedColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Muted Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ColorSwatch
          name="Muted"
          color="hsl(var(--muted))"
          className="bg-muted"
        />
        <ColorSwatch
          name="Muted Foreground"
          color="hsl(var(--muted-foreground))"
          className="bg-muted-foreground"
        />
        <ColorSwatch
          name="Border"
          color="hsl(var(--border))"
          className="bg-border border-2"
        />
        <ColorSwatch
          name="Input"
          color="hsl(var(--input))"
          className="bg-input border-2"
        />
      </div>
    </CardContent>
  </Card>
);

// Text colors section
const TextColors = () => (
  <Card>
    <CardHeader>
      <CardTitle>Text Colors</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="p-4 bg-background rounded-lg">
          <p className="text-foreground">Foreground text color</p>
          <p className="text-muted-foreground">Muted foreground text color</p>
          <p className="text-primary">Primary text color</p>
          <p className="text-secondary">Secondary text color</p>
          <p className="text-accent">Accent text color</p>
          <p className="text-destructive">Destructive text color</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Complete palette story
export const CompletePalette: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);

    return (
      <div
        className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark' : ''}`}
      >
        <div className="space-y-8 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Color Palette
              </h1>
              <p className="text-muted-foreground">
                Complete overview of all colors in the design system
              </p>
            </div>
            <DarkModeToggle
              isDark={isDark}
              onToggle={() => setIsDark(!isDark)}
            />
          </div>

          <SemanticColors />
          <StatusColors />
          <ProgressColors />
          <LevelColors />
          <UIColors />
          <MutedColors />
          <TextColors />
        </div>
      </div>
    );
  },
};

// Individual sections for focused viewing
export const SemanticColorsOnly: Story = {
  render: () => <SemanticColors />,
};

export const StatusColorsOnly: Story = {
  render: () => <StatusColors />,
};

export const ProgressColorsOnly: Story = {
  render: () => <ProgressColors />,
};

export const LevelColorsOnly: Story = {
  render: () => <LevelColors />,
};

export const UIColorsOnly: Story = {
  render: () => <UIColors />,
};

export const MutedColorsOnly: Story = {
  render: () => <MutedColors />,
};

export const TextColorsOnly: Story = {
  render: () => <TextColors />,
};
