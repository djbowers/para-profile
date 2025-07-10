'use client';

import { useState } from 'react';
import { ParaTabContent } from '@/components/ParaTabContent';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { ProgressItem } from '@/types/progress';
import { Archive, BookOpen, MapPin, Target } from 'lucide-react';
import { getDataByType, setDataByType } from '@/utils';

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
        <TabsTrigger
          value="projects"
          className="flex items-center gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer hover:bg-status-positive hover:text-primary-foreground transition-colors"
        >
          <Target className="w-4 h-4" />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="areas"
          className="flex items-center gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <MapPin className="w-4 h-4" />
          Areas
        </TabsTrigger>
        <TabsTrigger
          value="resources"
          className="flex items-center gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer hover:bg-chart-3 hover:text-primary-foreground transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Resources
        </TabsTrigger>
        <TabsTrigger
          value="archive"
          className="flex items-center gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer hover:bg-muted-foreground hover:text-primary-foreground transition-colors"
        >
          <Archive className="w-4 h-4" />
          Archive
        </TabsTrigger>
      </TabsList>

      <TabsContent value="projects" className="space-y-4">
        <ParaTabContent
          value="projects"
          title="Active Projects"
          description="Short-term efforts you're working on now"
          icon={<Target className="w-5 h-5" />}
          iconColor="text-status-positive"
          borderColor="border-status-positive bg-status-positive"
          items={projects}
          onItemsChange={onProjectsChange}
          onAdd={(newItem) => addNewItem('projects', newItem)}
          draggedItem={draggedItem}
          dragOverType={dragOverType}
          onDragStateChange={handleDragStateChange}
          onMoveItem={moveItemBetweenGroups}
        />
      </TabsContent>

      <TabsContent value="areas" className="space-y-4">
        <ParaTabContent
          value="areas"
          title="Life Areas"
          description="Long-term responsibilities to manage over time"
          icon={<MapPin className="w-5 h-5" />}
          iconColor="text-primary"
          borderColor="border-primary bg-primary"
          items={areas}
          onItemsChange={onAreasChange}
          onAdd={(newItem) => addNewItem('areas', newItem)}
          draggedItem={draggedItem}
          dragOverType={dragOverType}
          onDragStateChange={handleDragStateChange}
          onMoveItem={moveItemBetweenGroups}
        />
      </TabsContent>

      <TabsContent value="resources" className="space-y-4">
        <ParaTabContent
          value="resources"
          title="Resources"
          description="Topics or interests that may be useful in the future"
          icon={<BookOpen className="w-5 h-5" />}
          iconColor="text-chart-3"
          borderColor="border-chart-3 bg-chart-3"
          items={resources}
          onItemsChange={onResourcesChange}
          onAdd={(newItem) => addNewItem('resources', newItem)}
          draggedItem={draggedItem}
          dragOverType={dragOverType}
          onDragStateChange={handleDragStateChange}
          onMoveItem={moveItemBetweenGroups}
        />
      </TabsContent>

      <TabsContent value="archive" className="space-y-4">
        <ParaTabContent
          value="archive"
          title="Archive"
          description="Inactive items from the other three categories"
          icon={<Archive className="w-5 h-5" />}
          iconColor="text-muted-foreground"
          borderColor="border-muted-foreground bg-muted-foreground"
          items={archived}
          onItemsChange={onArchivedChange}
          onAdd={(newItem) => addNewItem('archive', newItem)}
          draggedItem={draggedItem}
          dragOverType={dragOverType}
          onDragStateChange={handleDragStateChange}
          onMoveItem={moveItemBetweenGroups}
        />
      </TabsContent>
    </Tabs>
  );
}
