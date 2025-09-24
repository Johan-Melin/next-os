import AppIcon from "./AppIcon";
import { dockApps } from "@/data/apps";
import { RegistryKey } from "@/data/apps";

export default function Dock({ setOpenWindow }: { setOpenWindow: (id: RegistryKey, title: string) => void }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-end p-2 backdrop-blur-lg border border-border">
      {dockApps.map((app) => (
        <AppIcon key={app.title} Icon={app.Icon} title={app.title} onClick={() => setOpenWindow(app.component, app.title)} />
      ))}
    </div>
  );
}