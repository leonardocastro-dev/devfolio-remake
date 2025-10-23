'use client'

import { useEffect, useMemo, useState } from 'react'
import { highlightCode } from '@/lib/utils'
import sections from '../schemas/sections'
import { useIsMobile } from '@/app/hooks/useIsMobile'
import { clsx } from 'clsx'
import { getFilePath } from '../utils'

export default function MarkdownViewer({
  selectedTab
}: {
  selectedTab: string | null
}) {
  const isMobile = useIsMobile()
  const [codeMd, setCodeMd] = useState('')

  const filePath = useMemo(() => getFilePath(selectedTab), [selectedTab])

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
    <div
      className={clsx('lg:pt-4 pt-9 pb-4 lg:px-9 px-7 max-h-full', {
        'scrollbar-section': !isMobile
      })}
    >
      <div id="bio" className="lg:h-[60000px]">
        <h2 className="mb-4 lg:hidden">
          {filePath ? (
            <>
              <span className="text-white">{`// ${filePath.section}`}</span>
              {filePath.folder && (
                <span className="text-muted-100"> / ${filePath.folder}</span>
              )}
            </>
          ) : (
            <span className="text-white">{'// select a file'}</span>
          )}
        </h2>
        <div
          className="about-block"
          dangerouslySetInnerHTML={{ __html: codeMd }}
        />
      </div>
    </div>
  )
}
