import DesktopIcon from "./DesktopIcon";
import { desktopItems } from "@/config/desktop";
import WindowManager from "./WindowManager";
import Dock from "./Dock";

function Desktop() {
  return (
    <div className="flex content-start gap-4 py-3 flex-wrap">
      {desktopItems.map((item) => (
        <DesktopIcon key={item.id} item={item} />
      ))}
      <WindowManager />
      <Dock />
    </div>
  )
}

export default Desktop