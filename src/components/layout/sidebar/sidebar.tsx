import Icon from '@/components/ui/icon'
import React from 'react'
import { SidebarProps } from './types'
import { sidebarItems } from './constants'

export default function Sidebar({
  onSectionChange,
  activeSection
}: SidebarProps) {
  return (
    <div className="px-6 py-4 border-r border-border h-full flex flex-col gap-6">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          className="cursor-pointer group"
          onClick={() => onSectionChange(item.id)}
        >
          <Icon
            icon={item.icon}
            className="group-hover:fill-muted"
            currentColor={
              activeSection === item.id
                ? 'var(--muted)'
                : 'rgba(96, 123, 150, 0.4)'
            }
          />
        </button>
      ))}
    </div>
  )
}
