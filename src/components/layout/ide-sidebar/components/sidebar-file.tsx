'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Icon from '@/components/ui/icon'

// Tipos
type FileType = 'file' | 'folder'

interface BaseItem {
  type: FileType
  name: string
}

interface FileItem extends BaseItem {
  type: 'file'
  path: string
}

interface FolderItem extends BaseItem {
  type: 'folder'
  color?: string
  children: SidebarItem[]
}

export type SidebarItem = FileItem | FolderItem

interface SidebarFileProps {
  schema: SidebarItem
  paddingLeft?: number
}

const SidebarFile: React.FC<SidebarFileProps> = ({
  schema,
  paddingLeft = 14
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const isFolder = schema.type === 'folder'

  const handleToggle = () => isFolder && setIsOpen(!isOpen)

  const renderFile = (file: FileItem) => (
    <div
      className="flex items-center hover:bg-gray-800 pr-3.5 py-2.5 cursor-pointer group"
      style={{ paddingLeft }}
    >
      <span className="mr-2">
        <Icon
          icon="markdown"
          currentColor="var(--muted)"
          className="group-hover:fill-white"
        />
      </span>
      <Link
        href={file.path}
        className="text-sm text-muted group-hover:text-white"
      >
        {file.name}
      </Link>
    </div>
  )

  const renderFolder = (folder: FolderItem) => (
    <div>
      <div
        className="flex items-center hover:bg-gray-800 px-3.5 py-2.5 cursor-pointer group"
        onClick={handleToggle}
      >
        <span className="mr-3">
          <Icon
            icon="arrow"
            className={`${isOpen ? 'rotate-180' : 'rotate-90'} transition-transform`}
            currentColor="var(--muted)"
          />
        </span>
        <Icon
          className="mr-2"
          icon="folder"
          currentColor={folder.color || 'var(--muted)'}
        />
        <span className="text-sm text-muted group-hover:text-white">
          {folder.name}
        </span>
      </div>

      {isOpen &&
        folder.children?.map((child, index) => (
          <SidebarFile
            key={`${child.name}-${index}`}
            schema={child}
            paddingLeft={paddingLeft + 25}
          />
        ))}
    </div>
  )

  return isFolder
    ? renderFolder(schema as FolderItem)
    : renderFile(schema as FileItem)
}

export default SidebarFile
