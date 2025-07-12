'use client';

import { Archive, BookOpen, LucideIcon, MapPin, Target } from 'lucide-react';

import { useState } from 'react';

import { ParaTabContent } from '@/components/ParaTabContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ProgressItem } from '@/types/progress';
import { cn } from '@/utils';

type ProgressHook = {
  items: ProgressItem[];
  loading: boolean;
  error: string | null;
  addItem: (item: Omit<ProgressItem, 'icon' | 'id'>) => Promise<ProgressItem>;
  updateItem: (
    id: string,
    updates: Partial<Omit<ProgressItem, 'icon' | 'id'>>
  ) => Promise<ProgressItem>;
  removeItem: (id: string) => Promise<void>;
  moveItem: (
    id: string,
    newType: 'project' | 'area' | 'resource' | 'archived'
  ) => Promise<ProgressItem>;
  refetch: () => void;
};

interface ParaSystemTabsProps {
  selectedTab: string;
  onTabChange: (value: string) => void;
  projectsHook: ProgressHook;
  areasHook: ProgressHook;
  resourcesHook: ProgressHook;
  archivedHook: ProgressHook;
}

export function ParaSystemTabs({
  selectedTab,
  onTabChange,
  projectsHook,
  areasHook,
  resourcesHook,
  archivedHook,
}: ParaSystemTabsProps) {
  const [draggedItem, setDraggedItem] = useState<{
    item: ProgressItem;
    type: string;
    index: number;
  } | null>(null);
  const [dragOverType, setDragOverType] = useState<string | null>(null);

  const getHookByType = (type: string) => {
    switch (type) {
      case 'projects':
        return projectsHook;
      case 'areas':
        return areasHook;
      case 'resources':
        return resourcesHook;
      case 'archive':
        return archivedHook;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  };

  const addNewItem = async (
    type: string,
    newItem: Omit<ProgressItem, 'icon'>
  ) => {
    const hook = getHookByType(type);
    try {
      await hook.addItem(newItem);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const moveItemBetweenGroups = async (
    fromType: string,
    fromIndex: number,
    toType: string
  ) => {
    if (fromType === toType) return;

    const fromHook = getHookByType(fromType);
    const itemToMove = fromHook.items[fromIndex];

    if (!itemToMove?.id) return;

    // Map type names to API types
    const typeMap: Record<
      string,
      'project' | 'area' | 'resource' | 'archived'
    > = {
      projects: 'project',
      areas: 'area',
      resources: 'resource',
      archive: 'archived',
    };

    const newApiType = typeMap[toType];
    if (!newApiType) return;

    try {
      await fromHook.moveItem(itemToMove.id, newApiType);
      // Refresh the destination hook to show the moved item
      const toHook = getHookByType(toType);
      toHook.refetch();
    } catch (error) {
      console.error('Error moving item:', error);
    }
  };

  const handleDragStateChange = (
    newDraggedItem: { item: ProgressItem; type: string; index: number } | null,
    newDragOverType: string | null
  ) => {
    setDraggedItem(newDraggedItem);
    setDragOverType(newDragOverType);
  };

  return (
    <Tabs
      value={selectedTab}
      onValueChange={onTabChange}
      className="w-full"
      data-testid="para-system-tabs"
    >
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
          items={projectsHook.items}
          loading={projectsHook.loading}
          error={projectsHook.error}
          onAdd={(newItem) => addNewItem('projects', newItem)}
          onDragStateChange={handleDragStateChange}
          onUpdate={projectsHook.updateItem}
          onRemove={projectsHook.removeItem}
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
          items={areasHook.items}
          loading={areasHook.loading}
          error={areasHook.error}
          onAdd={(newItem) => addNewItem('areas', newItem)}
          onDragStateChange={handleDragStateChange}
          onUpdate={areasHook.updateItem}
          onRemove={areasHook.removeItem}
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
          items={resourcesHook.items}
          loading={resourcesHook.loading}
          error={resourcesHook.error}
          onAdd={(newItem) => addNewItem('resources', newItem)}
          onDragStateChange={handleDragStateChange}
          onUpdate={resourcesHook.updateItem}
          onRemove={resourcesHook.removeItem}
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
          items={archivedHook.items}
          loading={archivedHook.loading}
          error={archivedHook.error}
          onAdd={(newItem) => addNewItem('archive', newItem)}
          onDragStateChange={handleDragStateChange}
          onUpdate={archivedHook.updateItem}
          onRemove={archivedHook.removeItem}
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
        // Cursor
        'cursor-pointer'
      )}
    >
      <Icon className="w-4 h-4" />
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </TabsTrigger>
  );
};
