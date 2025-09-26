import { IconType } from "react-icons";

interface AppIconProps {
  Icon: IconType;
  title?: string;
  target?: React.ReactNode;
  onClick?: () => void;
}

export default function AppIcon({ Icon, title, onClick }: AppIconProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center h-14 w-14" 
      onClick={onClick}
    >
      <Icon size={24} />
      <p className="text-xs pt-1 w-full text-center truncate">{title}</p>
    </div>
  );
}
  