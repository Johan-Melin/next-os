import { IconType } from 'react-icons';
import { FiInfo, FiGlobe, FiGrid, FiSettings, FiFolder } from "react-icons/fi";
import dynamic from 'next/dynamic';
import { createFolder } from '@/components/Folder';

const About = dynamic(() => import('../content/About'), { ssr: false });
const News = dynamic(() => import('../content/News'), { ssr: false });
const Programs = dynamic(() => import('../content/Programs'), { ssr: false });
const Settings = dynamic(() => import('../content/Settings'), { ssr: false });
const TextEditor = dynamic(() => import('../content/program/TextEditor'), { ssr: false });
export type RegistryKey = keyof typeof registry;

interface AppItem {
  Icon: IconType;
  title: string;
  component: RegistryKey;
}

const programsFolder = createFolder("programs");

export const registry = {
  "about": About,
  "textEditor": TextEditor,
  "news": News,
  "programs": Programs,
  "settings": Settings,
  "programsFolder": programsFolder,
};

export const desktopApps: AppItem[] = [
  { Icon: FiInfo, title: "about", component: "about", },
  { Icon: FiFolder, title: "programs", component: "programsFolder", },
]

export const dockApps: AppItem[] = [
  { Icon: FiInfo, title: "about", component: "about", },
  { Icon: FiGlobe, title: "news", component: "news", },
  { Icon: FiGrid, title: "programs", component: "programs", },
  { Icon: FiSettings, title: "settings", component: "settings",},
];

