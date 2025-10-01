import { DesktopItem } from "@/types/desktop";

export const desktopItems: DesktopItem[] = [
  { id: "portfolio", name: "Portfolio", items: [
    { id: "portfolio-site", name: "Portfolio Site", icon: "🎨" },
  ] },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "about", name: "About", icon: "ℹ️" },
] as const; // as const to make root ids unique. make sure child items[] ids are unique
