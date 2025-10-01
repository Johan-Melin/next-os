import dynamic from 'next/dynamic';
import About from '@/app/(content)/about/page';
import Settings from '@/app/(content)/settings/page';

//lazy load
//const Terminal = dynamic(() => import('@/app/(content)/terminal/page'), { ssr: false });

const registry = {
  "about": About,
  "settings": Settings,
} as const;

export type RegistryKey = keyof typeof registry;

export const getContent = (contentId: keyof typeof registry) => {
  return registry[contentId];
};