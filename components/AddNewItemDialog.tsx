'use client';

import { Plus } from 'lucide-react';

import type React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { ProgressItem } from '@/types/progress';

interface AddNewItemDialogProps {
  type: 'projects' | 'areas' | 'resources' | 'archive';
  onAdd: (
    type: 'projects' | 'areas' | 'resources' | 'archive',
    newItem: Omit<ProgressItem, 'icon'>
  ) => void;
}

export function AddNewItemDialog({ type, onAdd }: AddNewItemDialogProps) {
  const [newItem, setNewItem] = useState({
    name: '',
    progress: 0,
    level: 1,
    xp: 0,
    maxXp: 1000,
    category: 'Development',
  });

  const getDisplayName = (
    type: 'projects' | 'areas' | 'resources' | 'archive'
  ) => {
    switch (type) {
      case 'projects':
        return 'Project';
      case 'areas':
        return 'Area';
      case 'resources':
        return 'Resource';
      case 'archive':
        return 'Archive';
    }
  };

  const handleAdd = () => {
    if (newItem.name.trim()) {
      onAdd(type, newItem);
      setNewItem({
        name: '',
        progress: 0,
        level: 1,
        xp: 0,
        maxXp: 1000,
        category: 'Development',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New {getDisplayName(type)}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border text-card-foreground">
        <DialogHeader>
          <DialogTitle>Add New {getDisplayName(type)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="new-name">Name</Label>
            <Input
              id="new-name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Enter item name..."
            />
          </div>
          <div>
            <Label htmlFor="new-category">Category</Label>
            <Select
              value={newItem.category}
              onValueChange={(value) =>
                setNewItem({ ...newItem, category: value })
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
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="new-progress">Progress (%)</Label>
              <Input
                id="new-progress"
                type="number"
                min="0"
                max="100"
                value={newItem.progress}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    progress: Number.parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="new-level">Level</Label>
              <Input
                id="new-level"
                type="number"
                min="1"
                value={newItem.level}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    level: Number.parseInt(e.target.value) || 1,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="new-xp">Current XP</Label>
              <Input
                id="new-xp"
                type="number"
                min="0"
                value={newItem.xp}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    xp: Number.parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="new-maxXp">Max XP</Label>
              <Input
                id="new-maxXp"
                type="number"
                min="1"
                value={newItem.maxXp}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    maxXp: Number.parseInt(e.target.value) || 1000,
                  })
                }
              />
            </div>
          </div>
          <Button onClick={handleAdd} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add {getDisplayName(type)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
