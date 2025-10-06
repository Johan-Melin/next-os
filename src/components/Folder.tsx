import { DesktopItem } from '@/types/desktop'
import DesktopIcon from './DesktopIcon'

function Folder({ folder }: { folder: DesktopItem }) {
  return (
    <div className="flex flex-wrap gap-4">
      {folder.items?.map((item) => (
        <DesktopIcon key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Folder