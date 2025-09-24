import { IconType } from 'react-icons';
import { FiInfo, FiGlobe, FiGrid, FiSettings, FiType } from "react-icons/fi";
import dynamic from 'next/dynamic';

// Import components with SSR disabled
const About = dynamic(() => import('../content/About'), { ssr: false });
const News = dynamic(() => import('../content/News'), { ssr: false });
const Programs = dynamic(() => import('../content/Programs'), { ssr: false });
const Settings = dynamic(() => import('../content/Settings'), { ssr: false });
const TextEditor = dynamic(() => import('../content/program/TextEditor'), { ssr: false });

export interface AppItem {
  Icon: IconType;
  title: string;
  component: React.ComponentType;
}

// App configurations
export const desktopApps: AppItem[] = [
  { Icon: FiInfo, title: "about", component: About, },
  { Icon: FiType, title: "text editor", component: TextEditor, },
]

export const dockApps: AppItem[] = [
  { Icon: FiInfo, title: "about", component: About, },
  { Icon: FiGlobe, title: "news", component: News, },
  { Icon: FiGrid, title: "programs", component: Programs, },
  { Icon: FiSettings, title: "settings", component: Settings,},
];

const programApps: AppItem[] = [
  { Icon: FiInfo, title: "text editor", component: TextEditor,},
]

export const allApps = [
  ...desktopApps,
  ...dockApps,
  ...programApps,
]

// Helper function to get app by title
export const getAppByTitle = (title: string) => {
  return allApps.find(app => app.title.toLowerCase() === title.toLowerCase());
};
