import { ReactNode } from "react"

export interface WindowItem {
  id: string
  title: string
  content?: ReactNode
}

export interface WindowContextType {
  currentWindow: WindowItem | null
}