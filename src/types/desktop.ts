export interface DesktopItem {
  id: string
  name: string
  icon?: string
  items?: DesktopItem[]
}

export function isFolder(item: DesktopItem): item is DesktopItem {
  return 'items' in item;
}