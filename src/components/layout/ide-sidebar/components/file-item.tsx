'use client'

import React from 'react'
import Icon from '@/components/ui/icon'
import { useTabsStore } from '../../tabs/store'
import { FileItemProps } from '../types'
import { motion } from 'framer-motion'
import { childVariant, paddingLeft } from '../constants'

export default function FileItemComponent({ file, depth }: FileItemProps) {
  const { addTab, selectedTab } = useTabsStore()

  const handleFileClick = () => {
    addTab({ name: file.name })
  }

  const isActive = selectedTab === file.name

  return (
    <motion.div
      variants={childVariant}
      className="flex items-center hover:bg-[#061B2D] pr-3.5 py-2 cursor-pointer group"
      style={{ paddingLeft: paddingLeft(depth) }}
      onClick={handleFileClick}
    >
      <span className="mr-2">
        <Icon
          icon="markdown"
          currentColor="var(--muted-100)"
          className={`${isActive ? 'fill-white' : 'group-hover:fill-white'}`}
        />
      </span>
      <span
        className={`text-sm ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`}
      >
        {file.name}
      </span>
    </motion.div>
  )
}
