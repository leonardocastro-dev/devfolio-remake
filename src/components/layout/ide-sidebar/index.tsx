import React, { ReactElement } from 'react'
import SidebarSection from './components/sidebar-section'

export default function IdeSidebar({
  children
}: {
  children: ReactElement<typeof SidebarSection>
}) {
  return (
    <div className="bg-transparent w-full text-white h-full overflow-y-auto border-r border-primary-200">
      {children}
    </div>
  )
}
