'use client'

import type React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CharacterProfileHeaderProps {
  totalLevel: number
  avgProgress: number
  activeItemsCount: number
}

export function CharacterProfileHeader({
  totalLevel,
  avgProgress,
  activeItemsCount,
}: CharacterProfileHeaderProps) {
  return (
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
                <div className="text-2xl font-bold text-green-400">{Math.round(avgProgress)}%</div>
                <div className="text-xs text-slate-400">Avg Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{activeItemsCount}</div>
                <div className="text-xs text-slate-400">Active Items</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
