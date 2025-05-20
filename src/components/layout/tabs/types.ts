export interface Tab {
  id: string
  name: string
  content?: string
}

export interface TabProps {
  tab: Tab
  isSelected: boolean
  onClick: () => void
  onRemove: () => void
}

export interface TabsState {
  tabs: Tab[]
  selectedTab: string | null
  addTab: (tab: Omit<Tab, 'id'>) => void
  removeTab: (id: string) => void
  setSelectedTab: (id: string) => void
  setTabs: (tabs: Tab[]) => void
}
