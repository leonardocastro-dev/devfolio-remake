import React, { ReactElement } from 'react'
import SidebarSection from './components/sidebar-section'

interface IdeSidebarProps {
  children: ReactElement<typeof SidebarSection>
}

const IdeSidebar: React.FC<IdeSidebarProps> = ({ children }) => {
  return (
    <div className="bg-transparent text-white w-64 h-full overflow-y-auto border-r border-border">
      {children}
    </div>
  )
}

export default IdeSidebar
