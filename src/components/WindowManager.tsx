'use client'

import { useWindow } from "@/contexts/WindowContext";
import { getContent } from "@/lib/contentMapping";
import { RegistryKey } from "@/lib/contentMapping";

export default function WindowManager() {
  const { currentWindow, closeWindow } = useWindow()

  if (!currentWindow) {
    return null
  }

  const ContentComponent = getContent(currentWindow.id as RegistryKey)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[80vh] overflow-hidden border border-muted">
        <div className="px-4 py-2 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{currentWindow?.title}</h2>
          <button 
            onClick={closeWindow}
            className="text-xl font-semibold"
          >x</button>
        </div>
        
        <div className="p-4 bg-muted">
          {ContentComponent && <ContentComponent />}
        </div>
      </div>
    </div>
  );
}
