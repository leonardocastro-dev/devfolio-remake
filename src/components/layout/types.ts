import { Tab } from '@/components/layout/ide-sidebar/components/sidebar-file/types'

export interface TabsProps {
  tabs: Tab[]
  activeTabId: string | null
  setActiveTab: (id: string) => void
  removeTab: (id: string) => void
}