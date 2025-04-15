import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icon'
import { Tab } from '@/components/layout/types'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import { TAB_CLASSES } from './constants'
import { useTabsHandlers } from './hooks/useTabsHandlers'
import { TabsProps } from './types'

export default function Tabs({
  tabs,
  activeTabId,
  setActiveTab,
  removeTab
}: TabsProps) {
  const { reorderTabs } = useTabsStore()
  const {
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDrop,
    handleDragEnd
  } = useTabsHandlers({ tabs, setActiveTab, reorderTabs })

  if (tabs.length === 0) return null

  return (
    <div className="flex border-b border-border">
      {tabs.map((tab: Tab, index) => (
        <div
          key={tab.id}
          className={cn(
            'flex gap-12 items-center px-4 py-2 border-r border-border cursor-pointer',
            activeTabId === tab.id
              ? `${TAB_CLASSES.ACTIVE.BG} ${TAB_CLASSES.ACTIVE.TEXT}`
              : TAB_CLASSES.INACTIVE.TEXT,
            '[&.tab-dragging>*]:invisible'
          )}
          onClick={() => setActiveTab(tab.id)}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        >
          <span className="pointer-events-none">{tab.name}</span>
          <button
            className="text-xs pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation()
              removeTab(tab.id)
            }}
          >
            <Icon
              icon="close"
              className={
                activeTabId === tab.id
                  ? TAB_CLASSES.ACTIVE.ICON
                  : TAB_CLASSES.INACTIVE.ICON
              }
            />
          </button>
        </div>
      ))}
    </div>
  )
}
