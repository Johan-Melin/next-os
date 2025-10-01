import { DesktopItem } from "@/types/desktop";

export const desktopItems: DesktopItem[] = [
  { id: "portfolio", name: "Portfolio", items: [
    { id: "portfolio-site", name: "Portfolio Site", icon: "🎨" },
  ] },
] as const; // as const to make root ids unique. make sure child items[] ids are unique

export const dockItems: DesktopItem[] = [
  { id: "about", name: "About", icon: "ℹ️" },
  { id: "settings", name: "Settings", icon: "⚙️" },
] as const; // as const to make root ids unique. make sure child items[] ids are unique
