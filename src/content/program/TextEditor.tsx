'use client';

import { useState } from 'react';

export default function TextEditor() {
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('untitled.txt');
  const [isSaved, setIsSaved] = useState(true);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsSaved(false);
  };

  const handleSave = () => {
    // In a real app, you would save to a file here
    console.log('Saving content:', content);
    setIsSaved(true);
    
    // Create a blob and download link
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between bg-gray-100 p-2 border-b">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-white border rounded px-2 py-1 text-sm w-40"
          />
          <span className={`text-xs px-2 py-1 rounded ${isSaved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {isSaved ? 'Saved' : 'Unsaved'}
          </span>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Save
        </button>
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
        className="flex-1 w-full p-4 font-mono text-sm focus:outline-none resize-none"
        placeholder="Start typing here..."
      />
      <div className="bg-gray-50 p-2 border-t text-xs text-gray-500">
        {content.length} characters • {content.split(/\s+/).filter(Boolean).length} words
      </div>
    </div>
  );
}