import { IconType } from "react-icons";

export default function AppIcon({ Icon, title }: { Icon: IconType, title?: string }) {
  return (
    <div 
      className="flex flex-col items-center justify-center h-14 w-14" 
      style={{ color: "var(--foreground)", backgroundColor: "var(--background)" }}
    >
      <Icon size={24} />
      <p className="text-xs">{title}</p>
    </div>
  );
}
  