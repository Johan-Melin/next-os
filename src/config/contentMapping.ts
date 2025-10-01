import dynamic from 'next/dynamic';
import About from '@/app/(content)/about/page';
import Settings from '@/app/(content)/settings/page';

//lazy load
const PortfolioPage = dynamic(() => import('@/app/(content)/portfolio/portfolio-site/page'), { ssr: false });

const registry = {
  "about": About,
  "settings": Settings,
  "portfolio-site": PortfolioPage,
} as const;

export type RegistryKey = keyof typeof registry;

export const getContent = (contentId: RegistryKey) => {
  return registry[contentId];
};