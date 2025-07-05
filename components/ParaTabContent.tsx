'use client'

import type React from 'react'
import { TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ProgressCard } from '@/components/ProgressCard'
import { AddNewItemDialog } from '@/components/AddNewItemDialog'
import { ProgressItem } from '@/data/exampleData'
import {
  Zap,
  Target,
  Star,
  Shield,
  Heart,
  Trophy,
  MapPin,
  Brain,
  Sword,
  Archive,
} from 'lucide-react'

interface ParaTabContentProps {
  value: string
  title: string
  description: string
  icon: React.ReactNode
  iconColor: string
  borderColor: string
  items: ProgressItem[]
  draggedItem: {
    item: ProgressItem
    type: string
    index: number
  } | null
  dragOverType: string | null
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    item: ProgressItem,
    type: string,
    index: number
  ) => void
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
  onDragOver: (e: React.DragEvent, type: string) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent, targetType: string, targetIndex?: number) => void
  onUpdate: (type: string, index: number, updatedItem: ProgressItem) => void
  onDelete: (type: string, index: number) => void
  onMove: (fromType: string, fromIndex: number, toType: string) => void
  onAdd: (type: string, newItem: Omit<ProgressItem, 'icon'>) => void
}

export function ParaTabContent({
  value,
  title,
  description,
  icon,
  iconColor,
  borderColor,
  items,
  draggedItem,
  dragOverType,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
  onUpdate,
  onDelete,
  onMove,
  onAdd,
}: ParaTabContentProps) {
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

  return (
    <TabsContent value={value} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={iconColor}>{icon}</div>
          <h2 className="text-xl font-bold text-slate-100">{title}</h2>
          <Badge variant="outline" className={`${iconColor} border-current`}>
            {description}
          </Badge>
        </div>
        <AddNewItemDialog type={value} onAdd={onAdd} />
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] p-4 rounded-lg border-2 border-dashed transition-colors ${
          dragOverType === value ? `${borderColor} bg-opacity-10` : 'border-slate-700'
        }`}
        onDragOver={e => onDragOver(e, value)}
        onDragLeave={onDragLeave}
        onDrop={e => onDrop(e, value)}
      >
        {items.length === 0 && (
          <div className="col-span-full flex items-center justify-center text-slate-400 text-center py-8">
            <div>
              <div className={`w-12 h-12 mx-auto mb-2 opacity-50 ${iconColor}`}>{icon}</div>
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
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onMove={onMove}
            getIconByCategory={getIconByCategory}
            getLevelColor={getLevelColor}
            getProgressColor={getProgressColor}
          />
        ))}
      </div>
    </TabsContent>
  )
}
