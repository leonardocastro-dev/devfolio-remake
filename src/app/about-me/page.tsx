'use client'

import { useEffect, useState } from 'react'
import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import SidebarFile from '@/components/layout/ide-sidebar/components/sidebar-file/sidebar-file'
import Tabs from '@/components/layout/tabs/tabs'
import { highlightCode } from '@/lib/utils'
import sections from './schemas/sections'
import { personalInfoFiles } from './constants'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import type { Gist } from './types'

interface GistFile {
  filename: string
  raw_url: string
  language: string
  type: string
  size: number
}

export default function AboutMe() {
  const { tabs, activeTabId, removeTab, setActiveTab } = useTabsStore()
  const [codeMd, setCodeMd] = useState('')
  const [gistFiles, setGistFiles] = useState<(GistFile & { content?: string })[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const gistId = '43cd2c31d523d2c9bec3927d20267f23'
        const res = await fetch(`https://api.github.com/gists/${gistId}`)
        const gist: Gist = await res.json()

        const filesWithContent = await Promise.all(
          Object.values(gist.files).map(async (file) => {
            const contentResponse = await fetch(file.raw_url)
            const content = await contentResponse.text()
            const highlightedContent = await highlightCode(content)

            return {
              ...file,
              content: highlightedContent
            }
          })
        )

        setGistFiles(filesWithContent)
      } catch (err) {
        console.error('Erro ao buscar Gist:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGist()
  }, [])

  useEffect(() => {
    const loadCode = async () => {
      const sectionKey = activeTabId as keyof typeof sections
      const sectionContent = sections[sectionKey]

      if (sectionContent) {
        const html = await highlightCode(sectionContent, 'md')
        setCodeMd(html)
      } else {
        setCodeMd('')
      }
    }

    loadCode()
  }, [activeTabId])

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
          <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
            <div id="bio" className="h-[60000px]">
              <div
                className="about-block"
                dangerouslySetInnerHTML={{ __html: codeMd }}
              />
            </div>
          </div>

          <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
            <div id="code-snippets" className="h-[60000px]">
              <span className="text-sm text-muted-foreground">
                // Code snippets from my GitHub Gists:
              </span>

              {isLoading ? (
                <div className="text-muted">Carregando gists...</div>
              ) : (
                gistFiles.map((file) => (
                  <div
                    key={file.filename}
                    className="bg-card rounded-lg overflow-hidden mt-4"
                  >
                    <div
                      className="px-4 py-2"
                      dangerouslySetInnerHTML={{
                        __html: file.content || 'Carregando...'
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
