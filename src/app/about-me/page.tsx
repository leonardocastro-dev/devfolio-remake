'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarExplorer from '@/components/layout/ide-sidebar/components/sidebar-explorer'
import TabItem from '@/components/layout/tabs/tabs'
import { personalInfoFiles } from './constants'
import { useTabsStore } from '@/components/layout/tabs/store'
import GistViewer from './components/gist-viewer'
import MarkdownViewer from './components/markdown-viewer'
import Sidebar from '@/components/layout/sidebar/sidebar'
import { AnimatePresence, Reorder } from 'framer-motion'

export default function AboutMe() {
  const { tabs, selectedTab, removeTab, setSelectedTab, setTabs } =
    useTabsStore()

  return (
    <main className="flex h-full">
      <div className="flex max-w-xs w-full h-full">
        <Sidebar />
        <IdeSidebar>
          <>
            <SidebarSection label="personal-info">
              {personalInfoFiles.map((file, i) => (
                <SidebarExplorer key={`personal-info-${i}`} schema={file} />
              ))}
            </SidebarSection>
            <SidebarSection label="contacts">
              <div className="flex flex-col gap-2 px-3.5 py-2.5">
                <p className="text-muted">leonardocastro-dev@pm.me</p>
                <p className="text-muted">+5511992474559</p>
              </div>
            </SidebarSection>
          </>
        </IdeSidebar>
      </div>

      <div className="w-full flex flex-col h-full">
        <nav className="overflow-hidden min-h-10 relative border-b border-border">
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
