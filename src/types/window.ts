import { ReactNode } from "react"
import { DesktopItem } from "./desktop"

export interface WindowItem extends DesktopItem {
  content?: ReactNode
}

export interface WindowContextType {
  currentWindow: WindowItem | null
  openWindow: (window: WindowItem) => void
  closeWindow: () => void
}