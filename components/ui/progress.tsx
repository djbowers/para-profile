'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import * as React from 'react';

import { cn } from '@/utils';
import { getProgressColor } from '@/utils/colors';

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  status?: 'auto' | 'excellent' | 'good' | 'fair' | 'poor';
}

function Progress({
  className,
  value,
  status = 'auto',
  ...props
}: ProgressProps) {
  // Determine status color based on value or explicit status
  const getStatusClasses = () => {
    if (status === 'auto' && value !== undefined && value !== null) {
      const progressColor = getProgressColor(value);
      return {
        root: `bg-${progressColor}/20`,
        indicator: `bg-${progressColor}`,
      };
    }

    // Explicit status overrides
    switch (status) {
      case 'excellent':
        return {
          root: 'bg-progress-excellent/20',
          indicator: 'bg-progress-excellent',
        };
      case 'good':
        return {
          root: 'bg-progress-good/20',
          indicator: 'bg-progress-good',
        };
      case 'fair':
        return {
          root: 'bg-progress-fair/20',
          indicator: 'bg-progress-fair',
        };
      case 'poor':
        return {
          root: 'bg-progress-poor/20',
          indicator: 'bg-progress-poor',
        };
      default:
        return {
          root: 'bg-primary/20',
          indicator: 'bg-primary',
        };
    }
  };

  const statusClasses = getStatusClasses();

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full',
        statusClasses.root,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          'h-full w-full flex-1 transition-all',
          statusClasses.indicator
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
