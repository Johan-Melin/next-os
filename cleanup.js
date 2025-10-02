const fs = require('fs');
const path = require('path');

// Files and directories to remove
const filesToRemove = [
  'src/app/(content)/portfolio/',
  'src/app/(content)/settings/',
  'src/app/(content)/about/',
  'public/screenshots/',
];

// Files to modify
const filesToModify = [
  {
    path: 'src/config/desktop.ts',
    content: `import { DesktopItem } from "@/types/desktop";

export const desktopItems: DesktopItem[] = [
] as const; 

export const dockItems: DesktopItem[] = [
] as const; 
`
  },
  {
    path: 'src/config/contentMapping.ts',
    content: `const registry = {
} as const;

export type RegistryKey = keyof typeof registry;

export const getContent = (contentId: RegistryKey) => {
  return registry[contentId];
};`
  }
];

// Remove files and directories
filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`Removed directory: ${file}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`Removed file: ${file}`);
    }
  } else {
    console.log(`Skipped (not found): ${file}`);
  }
});

// Modify files
filesToModify.forEach(file => {
  const filePath = path.join(process.cwd(), file.path);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, file.content);
  console.log(`Updated: ${file.path}`);
});

console.log('Cleanup complete!');