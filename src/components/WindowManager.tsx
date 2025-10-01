'use client'

import { useWindow } from "@/contexts/WindowContext";
import { getContent, RegistryKey } from "@/config/contentMapping";
import Folder from "./Folder";
import { isFolder } from "@/types/desktop";

export default function WindowManager() {
  const { currentWindow, goBack, closeWindow } = useWindow()

  if (!currentWindow) {
    return null
  }

  const ContentComponent = getContent(currentWindow.id as RegistryKey)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[80vh] overflow-hidden border border-muted">
        <div className="px-4 py-2 flex justify-between items-center">
        <button 
            onClick={goBack}
            className="text-xl font-semibold px-2 rounded-full hover:bg-muted"
          >{'<'}</button>
          <h2 className="text-xl font-semibold">{currentWindow.name}</h2>
          <button 
            onClick={closeWindow}
            className="text-xl font-semibold px-2 rounded-full hover:bg-muted"
          >x</button>
        </div>
        
        <div className="p-4 bg-muted">
          {isFolder(currentWindow) 
          ? <Folder folder={currentWindow} /> 
          : ContentComponent && <ContentComponent />
          }
        </div>
      </div>
    </div>
  );
}
