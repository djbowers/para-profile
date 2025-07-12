'use client';

import type React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { getLevelColor, getProgressColor } from '@/utils/colors';

interface CharacterProfileHeaderProps {
  totalLevel: number;
  avgProgress: number;
  activeItemsCount: number;
}

export function CharacterProfileHeader({
  totalLevel,
  avgProgress,
  activeItemsCount,
}: CharacterProfileHeaderProps) {
  return (
    <Card
      className="bg-card border-border"
      data-testid="character-profile-header"
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                P
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              {Math.floor(totalLevel / 10)}
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
                <div
                  className={`text-2xl font-bold text-${getLevelColor(totalLevel)}`}
                >
                  {totalLevel}
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Levels
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold text-${getProgressColor(avgProgress)}`}
                >
                  {Math.round(avgProgress)}%
                </div>
                <div className="text-xs text-muted-foreground">
                  Avg Progress
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-status-info">
                  {activeItemsCount}
                </div>
                <div className="text-xs text-muted-foreground">
                  Active Items
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
