import DesktopIcon from "./DesktopIcon";
import { dockItems } from "@/config/desktop";

export default function Dock() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-end p-2 backdrop-blur-lg border border-muted">
      {dockItems.map((app) => (
        <DesktopIcon 
          key={app.name} 
          item={app}
          variant="dock"
         />
      ))}
    </div>
  );
}