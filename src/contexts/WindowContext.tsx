"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { WindowItem, WindowContextType } from "../types/window"

const WindowContext = createContext<WindowContextType | undefined>(undefined)

export function WindowProvider({ children }: { children: ReactNode }) {
  const [currentWindow, setCurrentWindow] = useState<WindowItem | null>(null)

  const openWindow = (window: WindowItem) => {
    setCurrentWindow(window);
  }

  const closeWindow = () => {
    setCurrentWindow(null);
  }

  return (
    <WindowContext.Provider
      value={{
        currentWindow,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  const context = useContext(WindowContext)
  if (context === undefined) {
    throw new Error("useWindow must be used within a WindowProvider")
  }
  return context
}
