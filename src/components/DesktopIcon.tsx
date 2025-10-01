'use client'

import React from 'react'
import { DesktopItem } from '@/types/desktop'
import { useWindow } from '@/contexts/WindowContext'

function DesktopIcon({ item }: { item: DesktopItem }) {
  const { openWindow } = useWindow();

  const handleClick = () => {
    openWindow(item)
  }

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col items-center justify-center p-3 cursor-pointer w-24 text-center"
    >
      <div className="text-4xl mb-1 hover:scale-110 w-12 h-12 flex items-center justify-center">{item.icon || '📁'}</div>
      <span className="text-sm text-center w-full truncate">{item.name}</span>
    </div>
  )
}

export default DesktopIcon