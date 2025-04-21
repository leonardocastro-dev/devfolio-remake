'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarFile from '@/components/layout/ide-sidebar/components/sidebar-file/sidebar-file'
import TabItem from '@/components/layout/tabs/tabs'
import { personalInfoFiles } from './constants'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import GistViewer from './components/gist-viewer'
import MarkdownViewer from './components/markdown-viewer'

import { AnimatePresence, Reorder } from 'framer-motion'

export default function AboutMe() {
  const { tabs, selectedTab, removeTab, setActiveTab, setTabs } = useTabsStore()

  return (
    <main className="flex h-full">
      <IdeSidebar>
        <>
          <SidebarSection label="personal-info">
            {personalInfoFiles.map((file, i) => (
              <SidebarFile key={`personal-info-${i}`} schema={file} />
            ))}
          </SidebarSection>
          <SidebarSection label="contacts">
            <span />
          </SidebarSection>
        </>
      </IdeSidebar>

      <div className="w-full flex flex-col h-full">
        {tabs.length > 0 && (
          <Reorder.Group
            as="ul"
            axis="x"
            values={tabs}
            onReorder={setTabs}
            className="flex border-b border-border"
          >
            <AnimatePresence initial={false}>
              {tabs.map((tab) => (
                <TabItem
                  key={tab.id}
                  tab={tab}
                  isSelected={selectedTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onRemove={() => removeTab(tab.id)}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        )}

        <div className="grid grid-cols-2 h-full overflow-hidden">
          <MarkdownViewer selectedTab={selectedTab} />
          <GistViewer />
        </div>
      </div>
    </main>
  )
}
