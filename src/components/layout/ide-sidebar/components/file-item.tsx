'use client'

import React from 'react'
import Icon from '@/components/ui/icon'
import { useTabsStore } from '../../tabs/store'
import { FileItemProps } from '../types'
import { motion } from 'framer-motion'
import { childVariant, BASE_PADDING, LEVEL_PADDING } from '../constants'

const FileItemComponent: React.FC<FileItemProps> = ({ file, depth }) => {
  const { addTab, selectedTab } = useTabsStore()
  const paddingLeft = BASE_PADDING + depth * LEVEL_PADDING

  const handleFileClick = () => {
    addTab({ name: file.name })
  }

  const isActive = selectedTab === file.name

  return (
    <motion.div
      variants={childVariant}
      className="flex items-center hover:bg-[#061B2D] pr-3.5 py-2.5 cursor-pointer group"
      style={{ paddingLeft }}
      onClick={handleFileClick}
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
    </motion.div>
  )
}

export default FileItemComponent
