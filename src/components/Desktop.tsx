import DesktopIcon from "./DesktopIcon";
import { DesktopItem } from "@/types/desktop";

const desktopItems: DesktopItem[] = [
  { id: "documents", name: "Documents", icon: "📁" },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "terminal", name: "Terminal", icon: "💻" },
]

function Desktop() {
  return (
    <div className="flex flex-col items-start h-screen">
      {desktopItems.map((item) => (
        <DesktopIcon key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Desktop