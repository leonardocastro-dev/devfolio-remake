import { Tab } from '@/components/layout/types'

export interface TabsState {
  tabs: Tab[]
  activeTabId: string | null
  addTab: (tab: Omit<Tab, 'id'>) => void
  removeTab: (id: string) => void
  setActiveTab: (id: string) => void
  isTabOpen: (name: string) => boolean
  reorderTabs: (dragIndex: number, dropIndex: number) => void
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
