import { Tab } from '../types'

interface TabsBaseProps {
  tabs: Tab[]
  setActiveTab: (id: string) => void
}

export interface TabsProps extends TabsBaseProps {
  selectedTab: string | null
  removeTab: (id: string) => void
}

export interface TabsHandlersProps extends TabsBaseProps {
  reorderTabs: (fromIndex: number, toIndex: number) => void
}
