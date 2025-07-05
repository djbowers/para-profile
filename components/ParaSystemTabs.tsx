'use client'

import type React from 'react'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ParaTabContent } from '@/components/ParaTabContent'
import { ProgressItem } from '@/data/exampleData'
import { Target, MapPin, BookOpen, Archive } from 'lucide-react'

interface ParaSystemTabsProps {
  selectedTab: string
  onTabChange: (value: string) => void
  projects: ProgressItem[]
  areas: ProgressItem[]
  resources: ProgressItem[]
  archived: ProgressItem[]
  onProjectsChange: (projects: ProgressItem[]) => void
  onAreasChange: (areas: ProgressItem[]) => void
  onResourcesChange: (resources: ProgressItem[]) => void
  onArchivedChange: (archived: ProgressItem[]) => void
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
    item: ProgressItem
    type: string
    index: number
  } | null>(null)
  const [dragOverType, setDragOverType] = useState<string | null>(null)

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
        onProjectsChange(data)
        break
      case 'areas':
        onAreasChange(data)
        break
      case 'resources':
        onResourcesChange(data)
        break
      case 'archive':
        onArchivedChange(data)
        break
    }
  }

  const updateItem = (type: string, index: number, updatedItem: ProgressItem) => {
    const currentData = getDataByType(type)
    const newData = [...currentData]
    newData[index] = updatedItem
    setDataByType(type, newData)
  }

  const deleteItem = (type: string, index: number) => {
    const currentData = getDataByType(type)
    const newData = currentData.filter((_, i) => i !== index)
    setDataByType(type, newData)
  }

  const addNewItem = (type: string, newItem: Omit<ProgressItem, 'icon'>) => {
    const currentData = getDataByType(type)
    setDataByType(type, [...currentData, newItem as ProgressItem])
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

  return (
    <Tabs value={selectedTab} onValueChange={onTabChange} className="w-full">
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

      <ParaTabContent
        value="projects"
        title="Active Projects"
        description="Short-term efforts you're working on now"
        icon={<Target className="w-5 h-5" />}
        iconColor="text-green-400"
        borderColor="border-green-400 bg-green-400"
        items={projects}
        draggedItem={draggedItem}
        dragOverType={dragOverType}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onUpdate={updateItem}
        onDelete={deleteItem}
        onMove={moveItemBetweenGroups}
        onAdd={addNewItem}
      />

      <ParaTabContent
        value="areas"
        title="Life Areas"
        description="Long-term responsibilities to manage over time"
        icon={<MapPin className="w-5 h-5" />}
        iconColor="text-blue-400"
        borderColor="border-blue-400 bg-blue-400"
        items={areas}
        draggedItem={draggedItem}
        dragOverType={dragOverType}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onUpdate={updateItem}
        onDelete={deleteItem}
        onMove={moveItemBetweenGroups}
        onAdd={addNewItem}
      />

      <ParaTabContent
        value="resources"
        title="Resources"
        description="Topics or interests that may be useful in the future"
        icon={<BookOpen className="w-5 h-5" />}
        iconColor="text-purple-400"
        borderColor="border-purple-400 bg-purple-400"
        items={resources}
        draggedItem={draggedItem}
        dragOverType={dragOverType}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onUpdate={updateItem}
        onDelete={deleteItem}
        onMove={moveItemBetweenGroups}
        onAdd={addNewItem}
      />

      <ParaTabContent
        value="archive"
        title="Archive"
        description="Inactive items from the other three categories"
        icon={<Archive className="w-5 h-5" />}
        iconColor="text-gray-400"
        borderColor="border-gray-400 bg-gray-400"
        items={archived}
        draggedItem={draggedItem}
        dragOverType={dragOverType}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onUpdate={updateItem}
        onDelete={deleteItem}
        onMove={moveItemBetweenGroups}
        onAdd={addNewItem}
      />
    </Tabs>
  )
}
