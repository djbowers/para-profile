'use client';

import { useState } from 'react';
import { ParaTabContent } from '@/components/ParaTabContent';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { ProgressItem } from '@/types/progress';
import { Archive, BookOpen, LucideIcon, MapPin, Target } from 'lucide-react';
import { cn, getDataByType, setDataByType } from '@/utils';

interface ParaSystemTabsProps {
  selectedTab: string;
  onTabChange: (value: string) => void;
  projects: ProgressItem[];
  areas: ProgressItem[];
  resources: ProgressItem[];
  archived: ProgressItem[];
  onProjectsChange: (projects: ProgressItem[]) => void;
  onAreasChange: (areas: ProgressItem[]) => void;
  onResourcesChange: (resources: ProgressItem[]) => void;
  onArchivedChange: (archived: ProgressItem[]) => void;
}

export function ParaSystemTabs({
  selectedTab,
  onTabChange,
  projects,
  areas,
  resources,
  archived,
  onProjectsChange,
  onAreasChange,
  onResourcesChange,
  onArchivedChange,
}: ParaSystemTabsProps) {
  const [draggedItem, setDraggedItem] = useState<{
    item: ProgressItem;
    type: string;
    index: number;
  } | null>(null);
  const [dragOverType, setDragOverType] = useState<string | null>(null);

  const addNewItem = (type: string, newItem: Omit<ProgressItem, 'icon'>) => {
    const currentData = getDataByType(
      type,
      projects,
      areas,
      resources,
      archived
    );
    setDataByType(
      type,
      [...currentData, newItem as ProgressItem],
      onProjectsChange,
      onAreasChange,
      onResourcesChange,
      onArchivedChange
    );
  };

  const moveItemBetweenGroups = (
    fromType: string,
    fromIndex: number,
    toType: string
  ) => {
    if (fromType === toType) return;

    const fromData = getDataByType(
      fromType,
      projects,
      areas,
      resources,
      archived
    );
    const toData = getDataByType(toType, projects, areas, resources, archived);
    const itemToMove = fromData[fromIndex];

    // Remove from source
    const newFromData = fromData.filter((_, i) => i !== fromIndex);
    setDataByType(
      fromType,
      newFromData,
      onProjectsChange,
      onAreasChange,
      onResourcesChange,
      onArchivedChange
    );

    // Add to destination
    const newToData = [...toData, itemToMove];
    setDataByType(
      toType,
      newToData,
      onProjectsChange,
      onAreasChange,
      onResourcesChange,
      onArchivedChange
    );
  };

  const handleDragStateChange = (
    newDraggedItem: { item: ProgressItem; type: string; index: number } | null,
    newDragOverType: string | null
  ) => {
    setDraggedItem(newDraggedItem);
    setDragOverType(newDragOverType);
  };

  return (
    <Tabs value={selectedTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
        <ParaTabTrigger value="projects" icon={Target} />
        <ParaTabTrigger value="areas" icon={MapPin} />
        <ParaTabTrigger value="resources" icon={BookOpen} />
        <ParaTabTrigger value="archive" icon={Archive} />
      </TabsList>

      <TabsContent value="projects">
        <ParaTabContent
          borderColor="border-status-positive bg-status-positive"
          description="Short-term efforts you're working on now"
          dragOverType={dragOverType}
          draggedItem={draggedItem}
          icon={Target}
          iconColor="text-status-positive"
          items={projects}
          onAdd={(newItem) => addNewItem('projects', newItem)}
          onDragStateChange={handleDragStateChange}
          onItemsChange={onProjectsChange}
          onMoveItem={moveItemBetweenGroups}
          title="Active Projects"
          value="projects"
        />
      </TabsContent>

      <TabsContent value="areas">
        <ParaTabContent
          borderColor="border-status-info bg-status-info"
          description="Long-term responsibilities to manage over time"
          dragOverType={dragOverType}
          draggedItem={draggedItem}
          icon={MapPin}
          iconColor="text-status-info"
          items={areas}
          onAdd={(newItem) => addNewItem('areas', newItem)}
          onDragStateChange={handleDragStateChange}
          onItemsChange={onAreasChange}
          onMoveItem={moveItemBetweenGroups}
          title="Life Areas"
          value="areas"
        />
      </TabsContent>

      <TabsContent value="resources">
        <ParaTabContent
          borderColor="border-status-highlight bg-status-highlight"
          description="Topics or interests that may be useful in the future"
          dragOverType={dragOverType}
          draggedItem={draggedItem}
          icon={BookOpen}
          iconColor="text-status-highlight"
          items={resources}
          onAdd={(newItem) => addNewItem('resources', newItem)}
          onDragStateChange={handleDragStateChange}
          onItemsChange={onResourcesChange}
          onMoveItem={moveItemBetweenGroups}
          title="Resources"
          value="resources"
        />
      </TabsContent>

      <TabsContent value="archive">
        <ParaTabContent
          borderColor="border-status-neutral bg-status-neutral"
          description="Inactive items from the other three categories"
          dragOverType={dragOverType}
          draggedItem={draggedItem}
          icon={Archive}
          iconColor="text-status-neutral"
          items={archived}
          onAdd={(newItem) => addNewItem('archive', newItem)}
          onDragStateChange={handleDragStateChange}
          onItemsChange={onArchivedChange}
          onMoveItem={moveItemBetweenGroups}
          title="Archive"
          value="archive"
        />
      </TabsContent>
    </Tabs>
  );
}

const ParaTabTrigger = ({
  value,
  icon: Icon,
}: {
  value: string;
  icon: LucideIcon;
}) => {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        // Layout
        'flex items-center gap-2',
        // Text color
        'text-muted-foreground',
        // State: active
        'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        // Cursor
        'cursor-pointer',
        // Transition
        'transition-colors'
      )}
    >
      <Icon className="w-4 h-4" />
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </TabsTrigger>
  );
};
