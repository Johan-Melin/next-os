import { IconType } from 'react-icons';
import { FiInfo, FiGlobe, FiGrid, FiSettings } from "react-icons/fi";
import dynamic from 'next/dynamic';

// Import components with SSR disabled
const About = dynamic(() => import('../content/About'), { ssr: false });
const News = dynamic(() => import('../content/News'), { ssr: false });
const Programs = dynamic(() => import('../content/Programs'), { ssr: false });
const Settings = dynamic(() => import('../content/Settings'), { ssr: false });

export interface AppItem {
  Icon: IconType;
  title: string;
  component: React.ComponentType;
  dock?: boolean;
}

// App configurations
export const apps: AppItem[] = [
  { 
    Icon: FiInfo, 
    title: "about",
    component: About,
  },
  { 
    Icon: FiInfo, 
    title: "about",
    component: About,
    dock: true
  },
  { 
    Icon: FiGlobe, 
    title: "news",
    component: News,
    dock: true
  },
  { 
    Icon: FiGrid, 
    title: "programs",
    component: Programs,
    dock: true
  },
  { 
    Icon: FiSettings, 
    title: "settings",
    component: Settings,
    dock: true
  },
];

// Helper function to get app by title
export const getAppByTitle = (title: string) => {
  return apps.find(app => app.title.toLowerCase() === title.toLowerCase());
};
