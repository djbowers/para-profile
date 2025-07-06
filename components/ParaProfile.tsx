'use client';

import type React from 'react';

import { useState } from 'react';

import { CharacterProfileHeader } from '@/components/CharacterProfileHeader';
import { ParaSystemTabs } from '@/components/ParaSystemTabs';
import type { ProgressItem } from '@/types/progress';

interface ParaProfileProps {
  initialProjects?: ProgressItem[];
  initialAreas?: ProgressItem[];
  initialResources?: ProgressItem[];
  initialArchived?: ProgressItem[];
}

export function ParaProfile({
  initialProjects = [],
  initialAreas = [],
  initialResources = [],
  initialArchived = [],
}: ParaProfileProps) {
  const [selectedTab, setSelectedTab] = useState('projects');

  const [projects, setProjects] = useState<ProgressItem[]>(initialProjects);
  const [areas, setAreas] = useState<ProgressItem[]>(initialAreas);
  const [resources, setResources] = useState<ProgressItem[]>(initialResources);
  const [archived, setArchived] = useState<ProgressItem[]>(initialArchived);

  const totalLevel = [...projects, ...areas, ...resources].reduce(
    (sum, item) => sum + item.level,
    0
  );
  const avgProgress =
    [...projects, ...areas, ...resources].reduce(
      (sum, item) => sum + item.progress,
      0
    ) /
    (projects.length + areas.length + resources.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <CharacterProfileHeader
          totalLevel={totalLevel}
          avgProgress={avgProgress}
          activeItemsCount={projects.length + areas.length}
        />

        <ParaSystemTabs
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          projects={projects}
          areas={areas}
          resources={resources}
          archived={archived}
          onProjectsChange={setProjects}
          onAreasChange={setAreas}
          onResourcesChange={setResources}
          onArchivedChange={setArchived}
        />
      </div>
    </div>
  );
}
