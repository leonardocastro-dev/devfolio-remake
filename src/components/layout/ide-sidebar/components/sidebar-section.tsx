'use client'

import React, { useState } from 'react'
import Icon from '@/components/ui/icon'

interface SidebarSectionProps {
  label: string
  isOpen?: boolean
  children: React.ReactNode
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  label,
  isOpen: initialIsOpen = true,
  children
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sidebar-section">
      <div
        className="flex items-center hover:bg-gray-800 px-3.5 py-2.5 cursor-pointer border-b border-border"
        onClick={toggleOpen}
      >
        <span className="mr-3">
          <Icon
            icon="arrow-key"
            className={`${isOpen ? 'rotate-180' : 'rotate-90'} transition-transform`}
            currentColor="white"
          />
        </span>
        <span className="text-sm text-white">{label}</span>
      </div>

      {isOpen && <div className="border-b border-border">{children}</div>}
    </div>
  )
}

export default SidebarSection
