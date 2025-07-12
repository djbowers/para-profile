import { useState } from 'react';

import { CharacterProfileHeader } from '@/components/CharacterProfileHeader';
import { ParaSystemTabs } from '@/components/ParaSystemTabs';
import { useProgressItems } from '@/hooks/useProgressItems';

export function ParaProfile() {
  const [selectedTab, setSelectedTab] = useState('projects');

  // Use the API hooks to get real data
  const projectsHook = useProgressItems('project');
  const areasHook = useProgressItems('area');
  const resourcesHook = useProgressItems('resource');
  const archivedHook = useProgressItems('archived');

  // Calculate totals from real data
  const allActiveItems = [
    ...projectsHook.items,
    ...areasHook.items,
    ...resourcesHook.items,
  ];

  const totalLevel = allActiveItems.reduce((sum, item) => sum + item.level, 0);
  const avgProgress =
    allActiveItems.length > 0
      ? allActiveItems.reduce((sum, item) => sum + item.progress, 0) /
        allActiveItems.length
      : 0;

  return (
    <div className="space-y-6">
      <CharacterProfileHeader
        totalLevel={totalLevel}
        avgProgress={avgProgress}
        activeItemsCount={projectsHook.items.length + areasHook.items.length}
      />

      <ParaSystemTabs
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        projectsHook={projectsHook}
        areasHook={areasHook}
        resourcesHook={resourcesHook}
        archivedHook={archivedHook}
      />
    </div>
  );
}
