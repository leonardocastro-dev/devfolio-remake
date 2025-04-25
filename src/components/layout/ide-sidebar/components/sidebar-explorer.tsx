'use client'

import React from 'react'
import { SidebarFileProps, FileItem, FolderItem } from '../types'
import FileItemComponent from './file-item'
import FolderItemComponent from './folder-item'

export default function SidebarExplorer({ schema, depth = 0 }: SidebarFileProps) {
  if (schema.type === 'folder') {
    return <FolderItemComponent folder={schema as FolderItem} depth={depth} />
  }

  return <FileItemComponent file={schema as FileItem} depth={depth} />
}
