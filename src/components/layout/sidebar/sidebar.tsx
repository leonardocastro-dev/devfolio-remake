import React from 'react'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className="px-6 py-4 border-r border-border h-full flex flex-col gap-2">
      <div className="w-6 h-6 bg-muted rounded-md"></div>
      <div className="w-6 h-6 bg-muted rounded-md"></div>
      <div className="w-6 h-6 bg-muted rounded-md"></div>
    </div>
  )
}

export default Sidebar
