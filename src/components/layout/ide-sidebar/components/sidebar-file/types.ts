import { Tab } from '@/components/layout/types'

export interface TabsState {
  tabs: Tab[]
  selectedTab: string | null
  addTab: (tab: Omit<Tab, 'id'>) => void
  removeTab: (id: string) => void
  setActiveTab: (id: string) => void
  isTabOpen: (name: string) => boolean
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

export type SidebarItem = FileItem | FolderItem

export interface SidebarFileProps {
  schema: SidebarItem
  paddingLeft?: number
}
