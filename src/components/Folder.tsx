import { FC } from 'react';
import { AppItem } from '@/data/apps';
import AppIcon from './AppIcon';

interface FolderProps {
  app: AppItem[];
}

const Folder: FC<FolderProps> = ({ app }) => {
  return (
    <div>
      {app.map((app) => 
        <AppIcon key={app.title} Icon={app.Icon} title={app.title} />
      )}
    </div>
  );
};

export default Folder;

// This is a factory function to create folder components
export const createFolder = ( app: AppItem[]) => {
  const FolderComponent: FC = () => <Folder app={app} />;
  return FolderComponent;
};