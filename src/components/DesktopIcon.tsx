'use client'

import React from 'react'
import { DesktopItem } from '@/types/desktop'
import { useWindow } from '@/contexts/WindowContext'

function DesktopIcon({ item, variant = '' }: { 
  item: DesktopItem;
  variant?: string;
  className?: string;
}) {
  const { openWindow } = useWindow();

  const handleClick = () => {
    openWindow(item)
  }

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col items-center justify-center cursor-pointer text-center w-20"
    >
      <div className="mb-1 hover:scale-110 w-12 h-12 flex items-center justify-center text-4xl">{item.icon || '📁'}</div>
      <span className="text-xs text-center w-full truncate">{item.name}</span>
    </div>
  )
}

export default DesktopIcon