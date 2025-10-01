import DesktopIcon from "./DesktopIcon";
import { desktopItems } from "@/config/desktop";
import WindowManager from "./WindowManager";
import Dock from "./Dock";

function Desktop() {
  return (
    <div className="flex flex-col items-start h-screen gap-4 py-3">
      {desktopItems.map((item) => (
        <DesktopIcon key={item.id} item={item} />
      ))}
      <WindowManager />
      <Dock />
    </div>
  )
}

export default Desktop