'use client'

import { useEffect, useState } from 'react'
import { highlightCode } from '@/lib/utils'
import sections from '../schemas/sections'

export default function MarkdownViewer({
  selectedTab
}: {
  selectedTab: string | null
}) {
  const [codeMd, setCodeMd] = useState('')

  useEffect(() => {
    const loadCode = async () => {
      if (!selectedTab) {
        setCodeMd('')
        return
      }

      const sectionKey = selectedTab as keyof typeof sections
      const sectionContent = sections[sectionKey]

      if (sectionContent) {
        const html = await highlightCode(sectionContent, 'md')
        setCodeMd(html)
      } else {
        setCodeMd('')
      }
    }

    loadCode()
  }, [selectedTab])

  return (
    <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
      <div id="bio" className="h-[60000px]">
        <div
          className="about-block"
          dangerouslySetInnerHTML={{ __html: codeMd }}
        />
      </div>
    </div>
  )
}
