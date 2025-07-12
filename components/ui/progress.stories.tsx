import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import * as React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value as a percentage (0-100)',
    },
    status: {
      control: { type: 'select' },
      options: ['auto', 'excellent', 'good', 'fair', 'poor'],
      description:
        'Status color - auto uses value to determine color, or explicitly set',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Basic progress story
export const Default: Story = {
  args: {
    value: 90,
  },
};

// Progress with different values
export const ProgressValues: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">0% Progress</h3>
        <Progress value={0} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">25% Progress</h3>
        <Progress value={25} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">50% Progress</h3>
        <Progress value={50} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">75% Progress</h3>
        <Progress value={75} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">100% Progress</h3>
        <Progress value={100} />
      </div>
    </div>
  ),
};

// Progress with custom heights
export const CustomHeights: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Small (h-1)</h3>
        <Progress value={60} className="h-1" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Default (h-2)</h3>
        <Progress value={60} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large (h-4)</h3>
        <Progress value={60} className="h-4" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Extra Large (h-6)</h3>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  ),
};

// Progress with different colors using the color system
export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Primary (Default)</h3>
        <Progress value={65} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Secondary</h3>
        <Progress value={65} className="bg-secondary/20 [&>div]:bg-secondary" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Destructive</h3>
        <Progress
          value={65}
          className="bg-destructive/20 [&>div]:bg-destructive"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Accent</h3>
        <Progress value={65} className="bg-accent/20 [&>div]:bg-accent" />
      </div>
    </div>
  ),
};

// Progress with status colors (auto)
export const StatusColorsAuto: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">
          Excellent Progress (85%) - Auto
        </h3>
        <Progress value={85} status="auto" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Good Progress (70%) - Auto</h3>
        <Progress value={70} status="auto" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Fair Progress (50%) - Auto</h3>
        <Progress value={50} status="auto" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Poor Progress (30%) - Auto</h3>
        <Progress value={30} status="auto" />
      </div>
    </div>
  ),
};

// Progress with explicit status colors
export const StatusColorsExplicit: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">
          Explicit Excellent (50% but excellent status)
        </h3>
        <Progress value={50} status="excellent" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Explicit Good (30% but good status)
        </h3>
        <Progress value={30} status="good" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Explicit Fair (85% but fair status)
        </h3>
        <Progress value={85} status="fair" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Explicit Poor (70% but poor status)
        </h3>
        <Progress value={70} status="poor" />
      </div>
    </div>
  ),
};

// Interactive progress with controls
export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(50);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">
            Interactive Progress: {progress}%
          </h3>
          <Progress value={progress} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setProgress(Math.max(0, progress - 10))}
            className="px-3 py-1 text-sm bg-secondary hover:bg-secondary/80 rounded"
          >
            -10%
          </button>
          <button
            onClick={() => setProgress(Math.min(100, progress + 10))}
            className="px-3 py-1 text-sm bg-secondary hover:bg-secondary/80 rounded"
          >
            +10%
          </button>
          <button
            onClick={() => setProgress(0)}
            className="px-3 py-1 text-sm bg-destructive hover:bg-destructive/80 text-destructive-foreground rounded"
          >
            Reset
          </button>
        </div>
      </div>
    );
  },
};

// Progress in a card context (like in the actual app)
export const InContext: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Task Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Frontend Development</span>
            <span>75%</span>
          </div>
          <Progress value={75} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Backend API</span>
            <span>45%</span>
          </div>
          <Progress value={45} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Database Design</span>
            <span>90%</span>
          </div>
          <Progress value={90} />
        </div>
      </CardContent>
    </Card>
  ),
};

// Progress with labels and descriptions
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Project Completion</span>
          <span className="text-muted-foreground">65%</span>
        </div>
        <Progress value={65} />
        <p className="text-xs text-muted-foreground">
          On track to complete by the end of the month
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Code Review</span>
          <span className="text-muted-foreground">30%</span>
        </div>
        <Progress value={30} />
        <p className="text-xs text-muted-foreground">
          Started yesterday, 3 files remaining
        </p>
      </div>
    </div>
  ),
};
