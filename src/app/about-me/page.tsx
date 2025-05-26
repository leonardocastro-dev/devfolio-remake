'use client'

import IdeSidebar from '@/components/layout/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarExplorer from '@/components/layout/ide-sidebar/components/sidebar-explorer'
import TabItem from '@/components/layout/tabs'
import { useTabsStore } from '@/components/layout/tabs/store'
import GistViewer from './components/gist-viewer'
import MarkdownViewer from './components/markdown-viewer'
import Sidebar from '@/components/layout/sidebar'
import { SidebarType } from '@/components/layout/sidebar/types'
import { AnimatePresence, Reorder } from 'framer-motion'
import Icon from '@/components/ui/icon'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useState, useMemo } from 'react'
import { getSectionData } from './utils'

export default function AboutMe() {
  const { tabs, selectedTab, removeTab, setSelectedTab, setTabs } =
    useTabsStore()
  const [activeSection, setActiveSection] =
    useState<SidebarType>('professional-info')
  const currentSectionData = useMemo(
    () => getSectionData(activeSection),
    [activeSection]
  )

  return (
    <main className="flex h-full">
      <div className="flex max-w-xs w-full h-full">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <IdeSidebar>
          <>
            <SidebarSection
              key={activeSection}
              label={currentSectionData.label}
            >
              {currentSectionData.files.map((file, i) => (
                <SidebarExplorer key={`${activeSection}-${i}`} schema={file} />
              ))}
            </SidebarSection>
            <SidebarSection label="contacts" isLast={true}>
              <div className="flex flex-col gap-2.5 px-3.5 py-2.5">
                <span className="flex items-center gap-2">
                  <Icon icon="mail" currentColor="var(--muted-100)" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="cursor-default text-muted-foreground">
                        leonardocastro...
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>leonardocastro-dev@pm.me</p>
                    </TooltipContent>
                  </Tooltip>
                </span>
                <span className="flex items-center gap-2">
                  <Icon icon="phone" currentColor="var(--muted-100)" />
                  <p className="text-muted-foreground">+5511992474559</p>
                </span>
              </div>
            </SidebarSection>
          </>
        </IdeSidebar>
      </div>
      <div className="w-full flex flex-col h-full">
        <nav className="min-h-10 relative border-b border-primary-200">
          <Reorder.Group
            as="ul"
            axis="x"
            values={tabs}
            onReorder={setTabs}
            className="flex"
          >
            <AnimatePresence initial={false}>
              {tabs.map((tab) => (
                <TabItem
                  key={tab.id}
                  tab={tab}
                  isSelected={selectedTab === tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  onRemove={() => removeTab(tab.id)}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </nav>
        <div className="grid grid-cols-2 h-full overflow-hidden">
          <MarkdownViewer selectedTab={selectedTab} />
          <GistViewer />
        </div>
      </div>
    </main>
  )
}
