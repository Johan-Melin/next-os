import { IconType } from 'react-icons';
import { FiInfo, FiGlobe, FiGrid, FiSettings } from "react-icons/fi";

export interface AppItem {
  Icon: IconType;
  title: string;
}

export const apps: AppItem[] = [
    { Icon: FiInfo, title: "info" },
    { Icon: FiGlobe, title: "news" },
    { Icon: FiGrid, title: "program" },
    { Icon: FiSettings, title: "settings" },
];
  
export const dockApps: AppItem[] = [
  { Icon: FiInfo, title: "info" },
  { Icon: FiGlobe, title: "news" },
  { Icon: FiGrid, title: "program" },
  { Icon: FiSettings, title: "settings" },
];
