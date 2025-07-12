'use client';

import type React from 'react';
import { Badge } from '@/components/ui/badge';
import { ProgressCard } from '@/components/ProgressCard';
import { AddNewItemDialog } from '@/components/AddNewItemDialog';
import type { ProgressItem } from '@/types/progress';
import { LucideIcon } from 'lucide-react';

interface ParaTabContentProps {
  value: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  items: ProgressItem[];
  loading?: boolean;
  error?: string | null;
  onAdd: (newItem: Omit<ProgressItem, 'icon'>) => void;
  onUpdate: (
    id: string,
    updates: Partial<Omit<ProgressItem, 'icon' | 'id'>>
  ) => Promise<ProgressItem>;
  onRemove: (id: string) => Promise<void>;
  draggedItem: {
    item: ProgressItem;
    type: string;
    index: number;
  } | null;
  dragOverType: string | null;
  onDragStateChange: (
    draggedItem: { item: ProgressItem; type: string; index: number } | null,
    dragOverType: string | null
  ) => void;
  onMoveItem: (fromType: string, fromIndex: number, toType: string) => void;
}

export function ParaTabContent({
  value,
  title,
  description,
  icon: Icon,
  iconColor,
  borderColor,
  items,
  loading,
  error,
  onAdd,
  onUpdate,
  onRemove,
  draggedItem,
  dragOverType,
  onDragStateChange,
  onMoveItem,
}: ParaTabContentProps) {
  const updateItem = async (_: number, updatedItem: ProgressItem) => {
    if (!updatedItem.id) return;
    try {
      await onUpdate(updatedItem.id, {
        name: updatedItem.name,
        progress: updatedItem.progress,
        level: updatedItem.level,
        xp: updatedItem.xp,
        maxXp: updatedItem.maxXp,
        category: updatedItem.category,
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (index: number) => {
    const item = items[index];
    if (!item?.id) return;
    try {
      await onRemove(item.id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: ProgressItem,
    index: number
  ) => {
    onDragStateChange({ item, type: value, index }, null);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = '1';
    onDragStateChange(null, null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragStateChange(null, value);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      onDragStateChange(null, null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { type: sourceType, index: sourceIndex } = draggedItem;

    if (sourceType === value) {
      // Reordering within same group - for now, just skip this functionality
      // This would need a more complex API to support reordering within a category
      console.log('Reordering within same group not implemented yet');
    } else {
      // Moving from another group - use parent's moveItem function
      onMoveItem(sourceType, sourceIndex, value);
    }

    onDragStateChange(null, null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={iconColor}>
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <Badge variant="outline" className={`${iconColor} border-current`}>
            {description}
          </Badge>
          {loading && (
            <Badge variant="secondary" className="text-xs">
              Loading...
            </Badge>
          )}
        </div>
        <AddNewItemDialog
          type={value as 'projects' | 'areas' | 'resources' | 'archive'}
          onAdd={(type, newItem) => onAdd(newItem)}
        />
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          Error: {error}
        </div>
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
          dragOverType === value
            ? `${borderColor} bg-opacity-10`
            : 'border-border'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {items.length === 0 && (
          <div className="col-span-full flex items-center justify-center text-muted-foreground text-center py-8">
            <div>
              <div className={`w-12 h-12 mx-auto mb-2 opacity-50 ${iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p>No {value}</p>
              <p className="text-sm">Drag items here or add new ones</p>
            </div>
          </div>
        )}
        {items.map((item, index) => (
          <ProgressCard
            key={`${item.name}-${index}`}
            item={item}
            type={value}
            index={index}
            draggedItem={draggedItem}
            onDragStart={(e, item, _, index) => handleDragStart(e, item, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e)}
            onUpdate={(_, index, updatedItem) => updateItem(index, updatedItem)}
            onDelete={(_, index) => deleteItem(index)}
            onMove={() => {}} // This would need parent coordination for cross-group moves
          />
        ))}
      </div>
    </div>
  );
}
