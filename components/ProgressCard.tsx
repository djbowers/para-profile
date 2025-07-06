'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Archive,
  ArrowRight,
  BookOpen,
  Edit,
  MapPin,
  MoreVertical,
  Save,
  Target,
  Trash2,
  X,
} from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

import type { ProgressItem } from '@/types/progress';
import { getIconByCategory, getLevelColor, getProgressColor } from '@/utils';

interface ProgressCardProps {
  item: ProgressItem;
  type: string;
  index: number;
  draggedItem: {
    item: ProgressItem;
    type: string;
    index: number;
  } | null;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    item: ProgressItem,
    type: string,
    index: number
  ) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent, type: string) => void;
  onDrop: (
    e: React.DragEvent,
    targetType: string,
    targetIndex?: number
  ) => void;
  onUpdate: (type: string, index: number, updatedItem: ProgressItem) => void;
  onDelete: (type: string, index: number) => void;
  onMove: (fromType: string, fromIndex: number, toType: string) => void;
}

export function ProgressCard({
  item,
  type,
  index,
  draggedItem,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  onUpdate,
  onDelete,
  onMove,
}: ProgressCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: item.name,
    progress: item.progress,
    level: item.level,
    xp: item.xp,
    maxXp: item.maxXp,
    category: item.category,
  });

  const handleSave = () => {
    onUpdate(type, index, {
      ...editForm,
      icon: getIconByCategory(editForm.category),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: item.name,
      progress: item.progress,
      level: item.level,
      xp: item.xp,
      maxXp: item.maxXp,
      category: item.category,
    });
    setIsEditing(false);
  };

  const getAvailableGroups = () => {
    const allGroups = [
      {
        value: 'projects',
        label: 'Projects',
        icon: <Target className="w-3 h-3" />,
      },
      { value: 'areas', label: 'Areas', icon: <MapPin className="w-3 h-3" /> },
      {
        value: 'resources',
        label: 'Resources',
        icon: <BookOpen className="w-3 h-3" />,
      },
      {
        value: 'archive',
        label: 'Archive',
        icon: <Archive className="w-3 h-3" />,
      },
    ];
    return allGroups.filter((group) => group.value !== type);
  };

  if (isEditing) {
    return (
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader className="pb-3">
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="category">
                Category
              </Label>
              <Select
                value={editForm.category}
                onValueChange={(value) =>
                  setEditForm({ ...editForm, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Leadership">Leadership</SelectItem>
                  <SelectItem value="Personal">Personal</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Career">Career</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Creative">Creative</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="progress">
                Progress (%)
              </Label>
              <Input
                id="progress"
                type="number"
                min="0"
                max="100"
                value={editForm.progress}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    progress: Number.parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="level">
                Level
              </Label>
              <Input
                id="level"
                type="number"
                min="1"
                value={editForm.level}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    level: Number.parseInt(e.target.value) || 1,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="xp">
                Current XP
              </Label>
              <Input
                id="xp"
                type="number"
                min="0"
                value={editForm.xp}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    xp: Number.parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="maxXp">
                Max XP
              </Label>
              <Input
                id="maxXp"
                type="number"
                min="1"
                value={editForm.maxXp}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    maxXp: Number.parseInt(e.target.value) || 1000,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-status-positive hover:bg-primary"
            >
              <Save className="w-3 h-3 mr-1" />
              Save
            </Button>
            <Button
              onClick={handleCancel}
              size="sm"
              variant="outline"
              className="border-border text-muted-foreground bg-transparent"
            >
              <X className="w-3 h-3 mr-1" />
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`bg-gradient-to-br from-card to-secondary border-border hover:border-primary transition-all duration-300 group cursor-move ${
        draggedItem?.type === type && draggedItem?.index === index
          ? 'opacity-50'
          : ''
      }`}
      draggable
      onDragStart={(e) => onDragStart(e, item, type, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => {
        e.preventDefault();
        if (
          draggedItem &&
          draggedItem.type === type &&
          draggedItem.index !== index
        ) {
          onDragOver(e, type);
        }
      }}
      onDrop={(e) => {
        if (
          draggedItem &&
          draggedItem.type === type &&
          draggedItem.index !== index
        ) {
          onDrop(e, type, index);
        }
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {item.icon}
            <CardTitle className="text-card-foreground text-sm font-medium">
              {item.name}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <MoreVertical className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => setIsEditing(true)}
                    className="hover:bg-muted"
                  >
                    <Edit className="w-3 h-3 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {getAvailableGroups().map((group) => (
                    <DropdownMenuItem
                      key={group.value}
                      onClick={() => onMove(type, index, group.value)}
                      className="hover:bg-muted"
                    >
                      {group.icon}
                      <ArrowRight className="w-3 h-3 mx-2" />
                      Move to {group.label}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => onDelete(type, index)}
                    className="hover:bg-destructive hover:text-destructive-foreground text-destructive"
                  >
                    <Trash2 className="w-3 h-3 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Badge
              variant="outline"
              className={`${getLevelColor(item.level)} border-current`}
            >
              Lv.{item.level}
            </Badge>
            <Badge variant="secondary">
              {item.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{item.progress}%</span>
          </div>
          <div className="relative">
            <Progress value={item.progress} className="h-3" />
            <div
              className={`absolute top-0 left-0 h-3 rounded-full ${getProgressColor(
                item.progress
              )} transition-all duration-500`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>XP</span>
            <span>
              {item.xp}/{item.maxXp}
            </span>
          </div>
          <div className="relative">
            <Progress
              value={(item.xp / item.maxXp) * 100}
              className="h-2 bg-muted"
            />
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(item.xp / item.maxXp) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
