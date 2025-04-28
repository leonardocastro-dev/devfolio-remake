'use client'

import React, { useState } from 'react'
import Icon from '@/components/ui/icon'
import { FolderItemProps } from '../types'
import { motion, AnimatePresence } from 'framer-motion'
import { collapseVariants, paddingLeft } from '../constants'
import SidebarExplorer from './sidebar-explorer'

export default function FolderItemComponent({
  folder,
  depth
}: FolderItemProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <div
        className="flex items-center hover:bg-[#061B2D] pr-3.5 py-2 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        style={{ paddingLeft: paddingLeft(depth) }}
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={folder.name}
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {folder.children?.map((child, i) => (
              <SidebarExplorer
                key={`${child.name}-${i}`}
                schema={child}
                depth={depth + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
