import DesktopIcon from "./DesktopIcon";
import { DesktopItem } from "@/types/desktop";
import WindowManager from "./WindowManager";

const desktopItems: DesktopItem[] = [
  { id: "documents", name: "Documents", icon: "📁" },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "about", name: "About", icon: "ℹ️" },
]

function Desktop() {
  return (
    <div className="flex flex-col items-start h-screen">
      {desktopItems.map((item) => (
        <DesktopIcon key={item.id} item={item} />
      ))}
      <WindowManager />
    </div>
  )
}

export default Desktop