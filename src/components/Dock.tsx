import AppIcon from "./AppIcon";
import { apps } from "@/data/apps";

export default function Dock({ setOpenWindow }: { setOpenWindow: (title: string) => void }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-end p-2 backdrop-blur-lg border border-window-border">
      {apps.map((app) => (
        app.dock && (
          <div key={app.title} className="mx-1">
            <AppIcon Icon={app.Icon} title={app.title} onClick={() => setOpenWindow(app.title)} />
          </div>
        )
      ))}
    </div>
  );
}