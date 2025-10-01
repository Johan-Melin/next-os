import { ComponentType } from "react"
import { DesktopItem } from "./desktop"

export interface WindowItem extends DesktopItem {
  content?: ComponentType
}

export interface WindowContextType {
  currentWindow: WindowItem | null
  openWindow: (window: WindowItem) => void
  goBack: () => void
  closeWindow: () => void
}