import { FiX } from 'react-icons/fi';

type FolderProps = {
  onClose: () => void;
  title: string;
};

export default function Window({ onClose, title }: FolderProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div 
          className="px-4 py-2 flex justify-between items-center"
          style={{ backgroundColor: "var(--window-panel)" }}
        >
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
          className="p-4 overflow-y-auto flex-grow"
          style={{ backgroundColor: "var(--window-background)" }}
        >
          Text
        </div>
      </div>
    </div>
  );
}
