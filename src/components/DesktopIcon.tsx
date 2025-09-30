import React from 'react'
import { DesktopItem } from '@/types/desktop'

function DesktopIcon({ item }: { item: DesktopItem }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 cursor-pointer w-24 text-center">
      <div className="text-4xl mb-1 hover:scale-110 w-12 h-12 flex items-center justify-center">{item.icon}</div>
      <span className="text-sm text-center w-full truncate">{item.name}</span>
    </div>
  )
}

export default DesktopIcon