'use client'

import React, { useState } from 'react'
import Icon from '@/components/ui/icon'
import { useTabsStore } from './store'
import { SidebarFileProps, FileItem, FolderItem } from './types'

const SidebarFile: React.FC<SidebarFileProps> = ({
  schema,
  paddingLeft = 14
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const isFolder = schema.type === 'folder'
  const { addTab, selectedTab } = useTabsStore()

  const handleToggle = () => isFolder && setIsOpen(!isOpen)

  const handleFileClick = (file: FileItem) => {
    addTab({
      name: file.name
    })
  }

  const renderFile = (file: FileItem) => {
    const isActive = selectedTab === file.name

    return (
      <div
        className="flex items-center hover:bg-muted/5 pr-3.5 py-2.5 cursor-pointer group"
        style={{ paddingLeft }}
        onClick={() => handleFileClick(file)}
      >
        <span className="mr-2">
          <Icon
            icon="markdown"
            currentColor="var(--muted)"
            className={`${isActive ? 'fill-white' : 'group-hover:fill-white'}`}
          />
        </span>
        <span
          className={`text-sm ${isActive ? 'text-white' : 'text-muted group-hover:text-white'}`}
        >
          {file.name}
        </span>
      </div>
    )
  }

  const renderFolder = (folder: FolderItem) => (
    <div>
      <div
        className="flex items-center hover:bg-muted/5 px-3.5 py-2.5 cursor-pointer group"
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
