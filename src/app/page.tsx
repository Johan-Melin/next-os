import AppIcon from "@/components/AppIcon";
import { FiInfo, FiGlobe, FiGrid, FiSettings } from "react-icons/fi";

export default function Home() {
  return (
    <div 
      className="flex flex-wrap content-start gap-4 p-4 w-full h-full overflow-auto"
      style={{ color: "var(--foreground)", backgroundColor: "var(--background)" }}
    >
      <AppIcon Icon={FiInfo} title="info" />
      <AppIcon Icon={FiGlobe} title="news" />
      <AppIcon Icon={FiGrid} title="program" />
      <AppIcon Icon={FiSettings} title="settings" />
    </div>
  );
}
