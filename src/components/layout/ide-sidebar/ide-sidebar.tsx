import React, { ReactElement } from 'react'
import SidebarSection from './components/sidebar-section'

interface IdeSidebarProps {
  children: ReactElement<typeof SidebarSection>
}

export default function IdeSidebar({ children }: IdeSidebarProps) {
  return (
    <div className="bg-transparent w-full text-white h-full overflow-y-auto border-r border-border">
      {children}
    </div>
  )
}
