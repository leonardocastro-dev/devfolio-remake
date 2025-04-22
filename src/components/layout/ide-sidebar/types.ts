import { Tab } from '../types'

export type SidebarItem = FileItem | FolderItem

export interface TabsState {
  tabs: Tab[]
  selectedTab: string | null
  addTab: (tab: Omit<Tab, 'id'>) => void
  removeTab: (id: string) => void
  setSelectedTab: (id: string) => void
  setTabs: (tabs: Tab[]) => void
}

export type FileItem = {
  type: 'file'
  name: string
}

export type FolderItem = {
  type: 'folder'
  name: string
  color?: string
  children: SidebarItem[]
}

export interface SidebarFileProps {
  schema: SidebarItem
  paddingLeft?: number
}
