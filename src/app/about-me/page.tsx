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
import { getSectionData, getFilePath } from './utils'
import { useIsMobile } from '../hooks/useIsMobile'
import { sidebarItems } from '@/components/layout/sidebar/constants'

export default function AboutMe() {
  const { tabs, selectedTab, removeTab, setSelectedTab, setTabs } =
    useTabsStore()
  const [activeSection, setActiveSection] =
    useState<SidebarType>('professional-info')
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    sidebarItems[0]?.id || null
  )
  const currentSectionData = useMemo(
    () => getSectionData(activeSection),
    [activeSection]
  )
  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col lg:flex-row h-full lg:overflow-auto">
      <h2 className='lg:hidden px-7 pb-7 pt-5 text-sm'>_about-me</h2>
      <div className="flex lg:max-w-xs w-full h-full">
        {!isMobile && (
          <Sidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        )}
        <IdeSidebar>
          <>
            {isMobile ? (
              <>
                {sidebarItems.map((item, index) => {
                  const sectionData = getSectionData(item.id)
                  return (
                    <SidebarSection
                      key={item.id}
                      label={sectionData.label}
                      isOpen={openMobileSection === item.id}
                      onToggle={() => setOpenMobileSection(
                        openMobileSection === item.id ? null : item.id
                      )}
                    >
                      {sectionData.files.map((file, i) => (
                        <SidebarExplorer
                          key={`${item.id}-${i}`}
                          schema={file}
                        />
                      ))}
                    </SidebarSection>
                  )
                })}
              </>
            ) : (
              <SidebarSection
                key={activeSection}
                label={currentSectionData.label}
              >
                {currentSectionData.files.map((file, i) => (
                  <SidebarExplorer key={`${activeSection}-${i}`} schema={file} />
                ))}
              </SidebarSection>
            )}
            <SidebarSection
              label="contacts"
              isLast={true}
              isOpen={isMobile ? openMobileSection === 'contacts' : true}
              onToggle={isMobile ? () => setOpenMobileSection(
                openMobileSection === 'contacts' ? null : 'contacts'
              ) : undefined}
            >
              <div className="flex flex-col gap-2.5 lg:px-3.5 px-7 pt-2.5 lg:pb-2.5">
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
                  <p className="text-muted-foreground">+5511988024732</p>
                </span>
              </div>
            </SidebarSection>
          </>
        </IdeSidebar>
      </div>
      <div className="w-full flex flex-col h-full min-w-0">
        <nav className="hidden lg:block min-h-10 relative border-b border-primary-200">
          <Reorder.Group
            as="ul"
            axis="x"
            values={tabs}
            onReorder={setTabs}
            className="flex scrollbar-tabs"
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
        <div className="flex flex-col lg:grid grid-cols-2 h-full lg:overflow-hidden">
          <MarkdownViewer selectedTab={selectedTab} />
          <GistViewer />
        </div>
      </div>
    </section>
  )
}
