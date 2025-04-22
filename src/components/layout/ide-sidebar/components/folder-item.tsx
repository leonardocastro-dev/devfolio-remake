'use client'

import React, { useState } from 'react'
import Icon from '@/components/ui/icon'
import { FolderItemProps } from '../types'
import { motion, AnimatePresence } from 'framer-motion'
import { collapseVariants, BASE_PADDING, LEVEL_PADDING } from '../constants'
import SidebarExplorer from './sidebar-explorer'

const FolderItemComponent: React.FC<FolderItemProps> = ({ folder, depth }) => {
  const [isOpen, setIsOpen] = useState(true)
  const paddingLeft = BASE_PADDING + depth * LEVEL_PADDING

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <div
        className="flex items-center hover:bg-[#061B2D] px-3.5 py-2.5 cursor-pointer group"
        onClick={handleToggle}
        style={{ paddingLeft }}
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

export default FolderItemComponent
