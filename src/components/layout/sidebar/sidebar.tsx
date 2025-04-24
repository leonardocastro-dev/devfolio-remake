import Icon from '@/components/ui/icon'
import React from 'react'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className="px-6 py-4 border-r border-border h-full flex flex-col gap-6">
      <Icon icon="professional-info" currentColor="var(--muted)" />
      <Icon icon="personal-info" currentColor="var(--muted)" />
      <Icon icon="hobbies" currentColor="var(--muted)" />
    </div>
  )
}

export default Sidebar
