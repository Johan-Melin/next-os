
'use client';

import { useState } from 'react';
import AppIcon from "@/components/AppIcon";
import { apps, getAppByTitle } from "@/data/apps";
import Dock from "@/components/Dock";
import Window from "@/components/Window";

export default function Home() {
  const [openWindow, setOpenWindow] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap content-start gap-4 p-4 h-screen overflow-auto">
      {apps.map((app) => (
        !app.dock && (
          <AppIcon key={app.title} Icon={app.Icon} title={app.title} onClick={() => setOpenWindow(app.title)} />
        )
      ))}
      {openWindow && <Window app={getAppByTitle(openWindow)!} onClose={() => setOpenWindow(null)} />}
      <Dock setOpenWindow={setOpenWindow} />
    </div>
  );
}
