import { IconType } from "react-icons";

interface AppIconProps {
  Icon: IconType;
  title?: string;
  target?: React.ReactNode;
}

export default function AppIcon({ Icon, title, target }: AppIconProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center h-14 w-14" 
      style={{ color: "var(--foreground)"}}
    >
      <Icon size={24} />
      <p className="text-xs">{title}</p>
    </div>
  );
}
  