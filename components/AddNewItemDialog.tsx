'use client'

import type React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus } from 'lucide-react'

import { ProgressItem } from '@/data/exampleData'

interface AddNewItemDialogProps {
  type: string
  onAdd: (type: string, newItem: Omit<ProgressItem, 'icon'>) => void
}

export function AddNewItemDialog({ type, onAdd }: AddNewItemDialogProps) {
  const [newItem, setNewItem] = useState({
    name: '',
    progress: 0,
    level: 1,
    xp: 0,
    maxXp: 1000,
    category: 'Development',
  })

  const handleAdd = () => {
    if (newItem.name.trim()) {
      onAdd(type, newItem)
      setNewItem({
        name: '',
        progress: 0,
        level: 1,
        xp: 0,
        maxXp: 1000,
        category: 'Development',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
          <Plus className="w-4 h-4 mr-2" />
          Add New {type.slice(0, -1).charAt(0).toUpperCase() + type.slice(1, -1)}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 text-slate-100">
        <DialogHeader>
          <DialogTitle>
            Add New {type.slice(0, -1).charAt(0).toUpperCase() + type.slice(1, -1)}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="new-name" className="text-slate-300">
              Name
            </Label>
            <Input
              id="new-name"
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, name: e.target.value })}
              className="bg-slate-700 border-slate-600 text-slate-100"
              placeholder="Enter item name..."
            />
          </div>
          <div>
            <Label htmlFor="new-category" className="text-slate-300">
              Category
            </Label>
            <Select
              value={newItem.category}
              onValueChange={value => setNewItem({ ...newItem, category: value })}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
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
              <Label htmlFor="new-progress" className="text-slate-300">
                Progress (%)
              </Label>
              <Input
                id="new-progress"
                type="number"
                min="0"
                max="100"
                value={newItem.progress}
                onChange={e =>
                  setNewItem({ ...newItem, progress: Number.parseInt(e.target.value) || 0 })
                }
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="new-level" className="text-slate-300">
                Level
              </Label>
              <Input
                id="new-level"
                type="number"
                min="1"
                value={newItem.level}
                onChange={e =>
                  setNewItem({ ...newItem, level: Number.parseInt(e.target.value) || 1 })
                }
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="new-xp" className="text-slate-300">
                Current XP
              </Label>
              <Input
                id="new-xp"
                type="number"
                min="0"
                value={newItem.xp}
                onChange={e => setNewItem({ ...newItem, xp: Number.parseInt(e.target.value) || 0 })}
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="new-maxXp" className="text-slate-300">
                Max XP
              </Label>
              <Input
                id="new-maxXp"
                type="number"
                min="1"
                value={newItem.maxXp}
                onChange={e =>
                  setNewItem({ ...newItem, maxXp: Number.parseInt(e.target.value) || 1000 })
                }
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
          </div>
          <Button onClick={handleAdd} className="w-full bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add {type.slice(0, -1).charAt(0).toUpperCase() + type.slice(1, -1)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
