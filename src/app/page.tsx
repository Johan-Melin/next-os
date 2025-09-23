import AppIcon from "@/components/AppIcon";
import { apps } from "@/data/apps";

export default function Home() {
  return (
    <div 
      className="flex flex-wrap content-start gap-4 p-4 h-screen overflow-auto"
      style={{ color: "var(--foreground)", backgroundColor: "var(--background)" }}
    >
      {apps.map((app) => (
        <AppIcon key={app.title} Icon={app.Icon} title={app.title} />
      ))}
    </div>
  );
}
