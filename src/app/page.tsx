
'use client';

import { useState } from 'react';
import AppIcon from "@/components/AppIcon";
import { desktopApps } from "@/data/apps";
import Dock from "@/components/Dock";
import Window from "@/components/Window";
import { registry, RegistryKey } from "@/data/apps";

export default function Home() {
  const [openWindow, setOpenWindow] = useState<{ id: RegistryKey; title: string } | null>(null);

  return (
    <div className="flex flex-wrap content-start gap-4 p-4 h-screen overflow-auto">
      {desktopApps.map((app) => (
        <AppIcon key={app.title} Icon={app.Icon} title={app.title} onClick={() => setOpenWindow({id: app.component, title: app.title})} />
      ))}
      {openWindow && <Window component={registry[openWindow.id]} title={openWindow.title} onClose={() => setOpenWindow(null)} />}
      <Dock setOpenWindow={(id, title) => setOpenWindow({id, title})} />
    </div>
  );
}
