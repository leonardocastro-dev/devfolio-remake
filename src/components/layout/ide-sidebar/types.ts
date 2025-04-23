export type SidebarItem = FileItem | FolderItem

export type FileItem = {
  type: 'file'
  name: string
}

export interface FileItemProps {
  file: FileItem
  depth: number
}

export type FolderItem = {
  type: 'folder'
  name: string
  color?: string
  children: SidebarItem[]
}

export interface FolderItemProps {
  folder: FolderItem
  depth: number
}

export interface SidebarFileProps {
  schema: SidebarItem
  depth?: number
}
