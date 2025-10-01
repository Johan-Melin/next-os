import DesktopIcon from "./DesktopIcon";
import { desktopItems } from "@/config/desktop";
import WindowManager from "./WindowManager";

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