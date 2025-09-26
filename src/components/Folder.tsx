import { FC } from 'react';

interface FolderProps {
  text: string;
}

const Folder: FC<FolderProps> = ({ text }) => {
  return (
    <div>{text}</div>
  );
};

export default Folder;

// This is a factory function to create folder components
export const createFolder = (text: string) => {
  const FolderComponent: FC = () => <Folder text={text} />;
  return FolderComponent;
};