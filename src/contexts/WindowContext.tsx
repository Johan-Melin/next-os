"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { WindowItem, WindowContextType } from "../types/window"

const WindowContext = createContext<WindowContextType | undefined>(undefined)

export function WindowProvider({ children }: { children: ReactNode }) {
  const [currentWindow, setCurrentWindow] = useState<WindowItem | null>(null)
  const [windowHistory, setWindowHistory] = useState<WindowItem[]>([])

  const openWindow = (window: WindowItem) => {
    setWindowHistory(prevHistory => 
      currentWindow ? [...prevHistory, currentWindow] : prevHistory
    );
    setCurrentWindow(window);
  }

  const goBack = () => {
    if (windowHistory.length > 0) {
      setCurrentWindow(windowHistory[windowHistory.length - 1]);
      setWindowHistory(windowHistory.slice(0, windowHistory.length - 1));
    } else {
      closeWindow();
    }
  }

  const closeWindow = () => {
    setCurrentWindow(null);
    setWindowHistory([]);
  }

  return (
    <WindowContext.Provider
      value={{
        currentWindow,
        openWindow,
        goBack,
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
