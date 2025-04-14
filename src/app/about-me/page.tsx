'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import { useState, useEffect } from 'react'
import { highlightCode } from '@/lib/utils'
import sections from './schemas/sections'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarFile from '@/components/layout/ide-sidebar/components/sidebar-file/sidebar-file'
import { personalInfoFiles } from './constants'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import Tabs from '@/components/layout/tabs'

export default function AboutMe() {
  const { tabs, activeTabId, removeTab, setActiveTab } = useTabsStore()
  const [codeHtml, setCodeHtml] = useState('')

  useEffect(() => {
    const loadCode = async () => {
      const sectionKey = activeTabId as keyof typeof sections
      const sectionContent = sections[sectionKey]

      if (sectionContent) {
        const html = await highlightCode(sectionContent, 'md')
        setCodeHtml(html)
      } else {
        setCodeHtml('')
      }
    }

    loadCode()
  }, [activeTabId])

  return (
    <main className="flex h-full">
      <IdeSidebar>
        <>
          <SidebarSection label="personal-info">
            {personalInfoFiles.map((file, index) => (
              <SidebarFile key={`personal-info-${index}`} schema={file} />
            ))}
          </SidebarSection>
          <SidebarSection label="contacts">
            <span></span>
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
          <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
            <div id="bio" className="h-[60000px]">
              <div
                className="about-block"
                dangerouslySetInnerHTML={{ __html: codeHtml }}
              />
            </div>
          </div>
          <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
            <div id="bio" className="h-[60000px]">
              <pre className="text-sm rounded-lg px-4 py-2 bg-primary text-white overflow-x-auto">
                <code>
                  {`function AboutMe() {
                      return (
                        <div>
                          <h1>Leonardo Castro</h1>
                          <p>Desenvolvedor Web Full Stack</p>
                          <p>Apaixonado por criar experiências web incríveis</p>
                        </div>
                      );
                    }`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
