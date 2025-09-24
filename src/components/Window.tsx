import React, { ComponentType } from 'react';
import { FiX } from 'react-icons/fi';

interface WindowProps {
  component: ComponentType;
  title: string;
  onClose: () => void;
}

export default function Window({ component: Component, title, onClose }: WindowProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-4xl max-h-[80vh] overflow-hidden border border-border">
        <div 
          className="px-4 py-2 flex justify-between items-center bg-border">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700"
            aria-label="Close window"
          >
            <FiX size={16} />
          </button>
        </div>
        
        {/* Content */}
        <div 
          className="p-4 overflow-y-auto flex-grow bg-background">
          <Component />
        </div>
      </div>
    </div>
  );
}
