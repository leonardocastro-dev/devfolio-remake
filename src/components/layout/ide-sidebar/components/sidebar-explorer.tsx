'use client'

import React from 'react'
import { SidebarFileProps, FileItem, FolderItem } from '../types'
import FileItemComponent from './file-item'
import FolderItemComponent from './folder-item'

const SidebarExplorer: React.FC<SidebarFileProps> = ({ schema, depth = 0 }) => {
  const isFolder = schema.type === 'folder'

  if (isFolder) {
    return <FolderItemComponent folder={schema as FolderItem} depth={depth} />
  }

  return <FileItemComponent file={schema as FileItem} depth={depth} />
}

export default SidebarExplorer
