'use client'

import type React from 'react'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Target,
  MapPin,
  BookOpen,
  Archive,
  Star,
  Zap,
  Trophy,
  Sword,
  Shield,
  Heart,
  Brain,
} from 'lucide-react'
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
import { Plus, Edit, Trash2, Save, X, MoreVertical, ArrowRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface ProgressItem {
  name: string
  progress: number
  level: number
  xp: number
  maxXp: number
  category: string
  icon?: React.ReactNode
}

export default function Component() {
  const [selectedTab, setSelectedTab] = useState('projects')

  const [draggedItem, setDraggedItem] = useState<{
    item: ProgressItem
    type: string
    index: number
  } | null>(null)
  const [dragOverType, setDragOverType] = useState<string | null>(null)

  const [projects, setProjects] = useState<ProgressItem[]>([
    {
      name: 'Mobile App Development',
      progress: 75,
      level: 8,
      xp: 750,
      maxXp: 1000,
      category: 'Development',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: 'Marketing Campaign',
      progress: 45,
      level: 5,
      xp: 450,
      maxXp: 1000,
      category: 'Marketing',
      icon: <Target className="w-4 h-4" />,
    },
    {
      name: 'Website Redesign',
      progress: 90,
      level: 12,
      xp: 900,
      maxXp: 1000,
      category: 'Design',
      icon: <Star className="w-4 h-4" />,
    },
    {
      name: 'Team Training',
      progress: 30,
      level: 3,
      xp: 300,
      maxXp: 1000,
      category: 'Leadership',
      icon: <Shield className="w-4 h-4" />,
    },
  ])

  const [areas, setAreas] = useState<ProgressItem[]>([
    {
      name: 'Health & Fitness',
      progress: 65,
      level: 7,
      xp: 650,
      maxXp: 1000,
      category: 'Personal',
      icon: <Heart className="w-4 h-4" />,
    },
    {
      name: 'Financial Management',
      progress: 80,
      level: 10,
      xp: 800,
      maxXp: 1000,
      category: 'Finance',
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      name: 'Professional Network',
      progress: 55,
      level: 6,
      xp: 550,
      maxXp: 1000,
      category: 'Career',
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      name: 'Learning & Development',
      progress: 85,
      level: 11,
      xp: 850,
      maxXp: 1000,
      category: 'Education',
      icon: <Brain className="w-4 h-4" />,
    },
  ])

  const [resources, setResources] = useState<ProgressItem[]>([
    {
      name: 'AI & Machine Learning',
      progress: 40,
      level: 4,
      xp: 400,
      maxXp: 1000,
      category: 'Technology',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: 'Investment Strategies',
      progress: 60,
      level: 6,
      xp: 600,
      maxXp: 1000,
      category: 'Finance',
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      name: 'Design Principles',
      progress: 70,
      level: 8,
      xp: 700,
      maxXp: 1000,
      category: 'Creative',
      icon: <Star className="w-4 h-4" />,
    },
    {
      name: 'Leadership Skills',
      progress: 50,
      level: 5,
      xp: 500,
      maxXp: 1000,
      category: 'Management',
      icon: <Sword className="w-4 h-4" />,
    },
  ])

  const [archived, setArchived] = useState<ProgressItem[]>([
    {
      name: 'Old Website Project',
      progress: 100,
      level: 15,
      xp: 1000,
      maxXp: 1000,
      category: 'Completed',
      icon: <Archive className="w-4 h-4" />,
    },
    {
      name: 'Previous Marketing Campaign',
      progress: 100,
      level: 12,
      xp: 1000,
      maxXp: 1000,
      category: 'Completed',
      icon: <Archive className="w-4 h-4" />,
    },
  ])

  const getIconByCategory = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      Development: <Zap className="w-4 h-4" />,
      Marketing: <Target className="w-4 h-4" />,
      Design: <Star className="w-4 h-4" />,
      Leadership: <Shield className="w-4 h-4" />,
      Personal: <Heart className="w-4 h-4" />,
      Finance: <Trophy className="w-4 h-4" />,
      Career: <MapPin className="w-4 h-4" />,
      Education: <Brain className="w-4 h-4" />,
      Technology: <Zap className="w-4 h-4" />,
      Creative: <Star className="w-4 h-4" />,
      Management: <Sword className="w-4 h-4" />,
      Completed: <Archive className="w-4 h-4" />,
    }
    return iconMap[category] || <Star className="w-4 h-4" />
  }

  const getDataByType = (type: string) => {
    switch (type) {
      case 'projects':
        return projects
      case 'areas':
        return areas
      case 'resources':
        return resources
      case 'archive':
        return archived
      default:
        return []
    }
  }

  const setDataByType = (type: string, data: ProgressItem[]) => {
    switch (type) {
      case 'projects':
        setProjects(data)
        break
      case 'areas':
        setAreas(data)
        break
      case 'resources':
        setResources(data)
        break
      case 'archive':
        setArchived(data)
        break
    }
  }

  const updateItem = (type: string, index: number, updatedItem: ProgressItem) => {
    const currentData = getDataByType(type)
    const newData = [...currentData]
    newData[index] = { ...updatedItem, icon: getIconByCategory(updatedItem.category) }
    setDataByType(type, newData)
  }

  const deleteItem = (type: string, index: number) => {
    const currentData = getDataByType(type)
    const newData = currentData.filter((_, i) => i !== index)
    setDataByType(type, newData)
  }

  const addNewItem = (type: string, newItem: Omit<ProgressItem, 'icon'>) => {
    const currentData = getDataByType(type)
    const itemWithIcon = { ...newItem, icon: getIconByCategory(newItem.category) }
    setDataByType(type, [...currentData, itemWithIcon])
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    if (progress >= 40) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getLevelColor = (level: number) => {
    if (level >= 10) return 'text-purple-400'
    if (level >= 7) return 'text-blue-400'
    if (level >= 4) return 'text-green-400'
    return 'text-gray-400'
  }

  const moveItemBetweenGroups = (fromType: string, fromIndex: number, toType: string) => {
    if (fromType === toType) return

    const fromData = getDataByType(fromType)
    const toData = getDataByType(toType)
    const itemToMove = fromData[fromIndex]

    // Remove from source
    const newFromData = fromData.filter((_, i) => i !== fromIndex)
    setDataByType(fromType, newFromData)

    // Add to destination
    const newToData = [...toData, itemToMove]
    setDataByType(toType, newToData)
  }

  const reorderItems = (type: string, fromIndex: number, toIndex: number) => {
    const data = getDataByType(type)
    const newData = [...data]
    const [movedItem] = newData.splice(fromIndex, 1)
    newData.splice(toIndex, 0, movedItem)
    setDataByType(type, newData)
  }

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: ProgressItem,
    type: string,
    index: number
  ) => {
    setDraggedItem({ item, type, index })
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML)
    e.currentTarget.style.opacity = '0.5'
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = '1'
    setDraggedItem(null)
    setDragOverType(null)
  }

  const handleDragOver = (e: React.DragEvent, type: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverType(type)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    // Only clear if we're leaving the drop zone entirely
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragOverType(null)
    }
  }

  const handleDrop = (e: React.DragEvent, targetType: string, targetIndex?: number) => {
    e.preventDefault()
    if (!draggedItem) return

    const { type: sourceType, index: sourceIndex } = draggedItem

    if (sourceType === targetType) {
      // Reordering within same group
      if (targetIndex !== undefined && sourceIndex !== targetIndex) {
        reorderItems(sourceType, sourceIndex, targetIndex)
      }
    } else {
      // Moving between groups
      moveItemBetweenGroups(sourceType, sourceIndex, targetType)
    }

    setDraggedItem(null)
    setDragOverType(null)
  }

  const ProgressCard = ({
    item,
    type,
    index,
  }: {
    item: ProgressItem
    type: string
    index: number
  }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editForm, setEditForm] = useState({
      name: item.name,
      progress: item.progress,
      level: item.level,
      xp: item.xp,
      maxXp: item.maxXp,
      category: item.category,
    })

    const handleSave = () => {
      updateItem(type, index, {
        ...editForm,
        icon: getIconByCategory(editForm.category),
      })
      setIsEditing(false)
    }

    const handleCancel = () => {
      setEditForm({
        name: item.name,
        progress: item.progress,
        level: item.level,
        xp: item.xp,
        maxXp: item.maxXp,
        category: item.category,
      })
      setIsEditing(false)
    }

    const getAvailableGroups = () => {
      const allGroups = [
        { value: 'projects', label: 'Projects', icon: <Target className="w-3 h-3" /> },
        { value: 'areas', label: 'Areas', icon: <MapPin className="w-3 h-3" /> },
        { value: 'resources', label: 'Resources', icon: <BookOpen className="w-3 h-3" /> },
        { value: 'archive', label: 'Archive', icon: <Archive className="w-3 h-3" /> },
      ]
      return allGroups.filter(group => group.value !== type)
    }

    if (isEditing) {
      return (
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardHeader className="pb-3">
            <div className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-slate-300">
                  Name
                </Label>
                <Input
                  id="name"
                  value={editForm.name}
                  onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-slate-300">
                  Category
                </Label>
                <Select
                  value={editForm.category}
                  onValueChange={value => setEditForm({ ...editForm, category: value })}
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
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="progress" className="text-slate-300">
                  Progress (%)
                </Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={editForm.progress}
                  onChange={e =>
                    setEditForm({ ...editForm, progress: Number.parseInt(e.target.value) || 0 })
                  }
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <div>
                <Label htmlFor="level" className="text-slate-300">
                  Level
                </Label>
                <Input
                  id="level"
                  type="number"
                  min="1"
                  value={editForm.level}
                  onChange={e =>
                    setEditForm({ ...editForm, level: Number.parseInt(e.target.value) || 1 })
                  }
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="xp" className="text-slate-300">
                  Current XP
                </Label>
                <Input
                  id="xp"
                  type="number"
                  min="0"
                  value={editForm.xp}
                  onChange={e =>
                    setEditForm({ ...editForm, xp: Number.parseInt(e.target.value) || 0 })
                  }
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <div>
                <Label htmlFor="maxXp" className="text-slate-300">
                  Max XP
                </Label>
                <Input
                  id="maxXp"
                  type="number"
                  min="1"
                  value={editForm.maxXp}
                  onChange={e =>
                    setEditForm({ ...editForm, maxXp: Number.parseInt(e.target.value) || 1000 })
                  }
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                <Save className="w-3 h-3 mr-1" />
                Save
              </Button>
              <Button
                onClick={handleCancel}
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 bg-transparent"
              >
                <X className="w-3 h-3 mr-1" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card
        className={`bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 group cursor-move ${
          draggedItem?.type === type && draggedItem?.index === index ? 'opacity-50' : ''
        }`}
        draggable
        onDragStart={e => handleDragStart(e, item, type, index)}
        onDragEnd={handleDragEnd}
        onDragOver={e => {
          e.preventDefault()
          if (draggedItem && draggedItem.type === type && draggedItem.index !== index) {
            handleDragOver(e, type)
          }
        }}
        onDrop={e => {
          if (draggedItem && draggedItem.type === type && draggedItem.index !== index) {
            handleDrop(e, type, index)
          }
        }}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {item.icon}
              <CardTitle className="text-slate-100 text-sm font-medium">{item.name}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 text-slate-400 hover:text-slate-100 hover:bg-slate-700"
                    >
                      <MoreVertical className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-100">
                    <DropdownMenuItem
                      onClick={() => setIsEditing(true)}
                      className="hover:bg-slate-700"
                    >
                      <Edit className="w-3 h-3 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-slate-700" />
                    {getAvailableGroups().map(group => (
                      <DropdownMenuItem
                        key={group.value}
                        onClick={() => moveItemBetweenGroups(type, index, group.value)}
                        className="hover:bg-slate-700"
                      >
                        {group.icon}
                        <ArrowRight className="w-3 h-3 mx-2" />
                        Move to {group.label}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator className="bg-slate-700" />
                    <DropdownMenuItem
                      onClick={() => deleteItem(type, index)}
                      className="hover:bg-slate-700 text-red-400"
                    >
                      <Trash2 className="w-3 h-3 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Badge variant="outline" className={`${getLevelColor(item.level)} border-current`}>
                Lv.{item.level}
              </Badge>
              <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                {item.category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Progress</span>
              <span>{item.progress}%</span>
            </div>
            <div className="relative">
              <Progress value={item.progress} className="h-3 bg-slate-700" />
              <div
                className={`absolute top-0 left-0 h-3 rounded-full ${getProgressColor(
                  item.progress
                )} transition-all duration-500`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>XP</span>
              <span>
                {item.xp}/{item.maxXp}
              </span>
            </div>
            <div className="relative">
              <Progress value={(item.xp / item.maxXp) * 100} className="h-2 bg-slate-700" />
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-blue-500 transition-all duration-500"
                style={{ width: `${(item.xp / item.maxXp) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const AddNewItemDialog = ({ type }: { type: string }) => {
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
        addNewItem(type, newItem)
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
                  onChange={e =>
                    setNewItem({ ...newItem, xp: Number.parseInt(e.target.value) || 0 })
                  }
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

  const totalLevel = [...projects, ...areas, ...resources].reduce(
    (sum, item) => sum + item.level,
    0
  )
  const avgProgress =
    [...projects, ...areas, ...resources].reduce((sum, item) => sum + item.progress, 0) /
    (projects.length + areas.length + resources.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Character Profile Header */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-yellow-500">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-slate-900 text-2xl font-bold">
                    P
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {Math.floor(totalLevel / 10)}
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h1 className="text-3xl font-bold text-slate-100">Productivity Master</h1>
                  <p className="text-slate-400">PARA System Practitioner</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{totalLevel}</div>
                    <div className="text-xs text-slate-400">Total Levels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {Math.round(avgProgress)}%
                    </div>
                    <div className="text-xs text-slate-400">Avg Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      {projects.length + areas.length}
                    </div>
                    <div className="text-xs text-slate-400">Active Items</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PARA System Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-slate-700">
            <TabsTrigger
              value="projects"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700"
            >
              <Target className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="areas"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700"
            >
              <MapPin className="w-4 h-4" />
              Areas
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700"
            >
              <BookOpen className="w-4 h-4" />
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700"
            >
              <Archive className="w-4 h-4" />
              Archive
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold text-slate-100">Active Projects</h2>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Short-term efforts you&apos;re working on now
                </Badge>
              </div>
              <AddNewItemDialog type="projects" />
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                dragOverType === 'projects'
                  ? 'border-green-400 bg-green-400/10'
                  : 'border-slate-700'
              }`}
              onDragOver={e => handleDragOver(e, 'projects')}
              onDragLeave={handleDragLeave}
              onDrop={e => handleDrop(e, 'projects')}
            >
              {projects.length === 0 && (
                <div className="col-span-full flex items-center justify-center text-slate-400 text-center py-8">
                  <div>
                    <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No active projects</p>
                    <p className="text-sm">Drag items here or add new ones</p>
                  </div>
                </div>
              )}
              {projects.map((project, index) => (
                <ProgressCard
                  key={`${project.name}-${index}`}
                  item={project}
                  type="projects"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="areas" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold text-slate-100">Life Areas</h2>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  Long-term responsibilities to manage over time
                </Badge>
              </div>
              <AddNewItemDialog type="areas" />
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                dragOverType === 'areas' ? 'border-blue-400 bg-blue-400/10' : 'border-slate-700'
              }`}
              onDragOver={e => handleDragOver(e, 'areas')}
              onDragLeave={handleDragLeave}
              onDrop={e => handleDrop(e, 'areas')}
            >
              {areas.length === 0 && (
                <div className="col-span-full flex items-center justify-center text-slate-400 text-center py-8">
                  <div>
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No life areas</p>
                    <p className="text-sm">Drag items here or add new ones</p>
                  </div>
                </div>
              )}
              {areas.map((area, index) => (
                <ProgressCard
                  key={`${area.name}-${index}`}
                  item={area}
                  type="areas"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold text-slate-100">Resources</h2>
                <Badge variant="outline" className="text-purple-400 border-purple-400">
                  Topics or interests that may be useful in the future
                </Badge>
              </div>
              <AddNewItemDialog type="resources" />
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                dragOverType === 'resources'
                  ? 'border-purple-400 bg-purple-400/10'
                  : 'border-slate-700'
              }`}
              onDragOver={e => handleDragOver(e, 'resources')}
              onDragLeave={handleDragLeave}
              onDrop={e => handleDrop(e, 'resources')}
            >
              {resources.length === 0 && (
                <div className="col-span-full flex items-center justify-center text-slate-400 text-center py-8">
                  <div>
                    <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No resources</p>
                    <p className="text-sm">Drag items here or add new ones</p>
                  </div>
                </div>
              )}
              {resources.map((resource, index) => (
                <ProgressCard
                  key={`${resource.name}-${index}`}
                  item={resource}
                  type="resources"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="archive" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-bold text-slate-100">Archive</h2>
                <Badge variant="outline" className="text-gray-400 border-gray-400">
                  Inactive items from the other three categories
                </Badge>
              </div>
              <AddNewItemDialog type="archive" />
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                dragOverType === 'archive' ? 'border-gray-400 bg-gray-400/10' : 'border-slate-700'
              }`}
              onDragOver={e => handleDragOver(e, 'archive')}
              onDragLeave={handleDragLeave}
              onDrop={e => handleDrop(e, 'archive')}
            >
              {archived.length === 0 && (
                <div className="col-span-full flex items-center justify-center text-slate-400 text-center py-8">
                  <div>
                    <Archive className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No archived items</p>
                    <p className="text-sm">Drag completed items here</p>
                  </div>
                </div>
              )}
              {archived.map((item, index) => (
                <ProgressCard
                  key={`${item.name}-${index}`}
                  item={item}
                  type="archive"
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
