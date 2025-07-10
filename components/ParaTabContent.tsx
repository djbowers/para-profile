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
  onItemsChange: (items: ProgressItem[]) => void;
  onAdd: (newItem: Omit<ProgressItem, 'icon'>) => void;
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
  onItemsChange,
  onAdd,
  draggedItem,
  dragOverType,
  onDragStateChange,
  onMoveItem,
}: ParaTabContentProps) {
  const updateItem = (index: number, updatedItem: ProgressItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    onItemsChange(newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onItemsChange(newItems);
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

  const handleDrop = (e: React.DragEvent, targetIndex?: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { type: sourceType, index: sourceIndex } = draggedItem;

    if (sourceType === value) {
      // Reordering within same group
      if (targetIndex !== undefined && sourceIndex !== targetIndex) {
        const newItems = [...items];
        const [movedItem] = newItems.splice(sourceIndex, 1);
        newItems.splice(targetIndex, 0, movedItem);
        onItemsChange(newItems);
      }
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
        </div>
        <AddNewItemDialog
          type={value as 'projects' | 'areas' | 'resources' | 'archive'}
          onAdd={(type, newItem) => onAdd(newItem)}
        />
      </div>
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
            onDrop={(e, _, targetIndex) => handleDrop(e, targetIndex)}
            onUpdate={(_, index, updatedItem) => updateItem(index, updatedItem)}
            onDelete={(_, index) => deleteItem(index)}
            onMove={() => {}} // This would need parent coordination for cross-group moves
          />
        ))}
      </div>
    </div>
  );
}
