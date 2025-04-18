'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarFile from '@/components/layout/ide-sidebar/components/sidebar-file/sidebar-file'
import Tabs from '@/components/layout/tabs/tabs'
import { personalInfoFiles } from './constants'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import GistViewer from './components/gist-viewer'
import MarkdownViewer from './components/markdown-viewer'

export default function AboutMe() {
  const { tabs, activeTabId, removeTab, setActiveTab } = useTabsStore()

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
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          setActiveTab={setActiveTab}
          removeTab={removeTab}
        />

        <div className="grid grid-cols-2 h-full overflow-hidden">
          <MarkdownViewer activeTabId={activeTabId} />
          <GistViewer />
        </div>
      </div>
    </main>
  )
}
