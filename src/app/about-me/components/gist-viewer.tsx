'use client'

import { useState, useEffect } from 'react'
import { highlightCode } from '@/lib/utils'
import type { Gist } from '../types'

export default function GistViewer() {
  const [gistFiles, setGistFiles] = useState<Gist[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const gistId = '43cd2c31d523d2c9bec3927d20267f23'
        const res = await fetch(`https://api.github.com/gists/${gistId}`)
        const gist: Gist = await res.json()

        const gistWithHighlightedContent: Gist = {
          owner: {
            login: gist.owner.login,
            avatar_url: gist.owner.avatar_url
          },
          created_at: gist.created_at,
          files: {}
        }

        for (const [filename, file] of Object.entries(gist.files)) {
          const highlightedContent = await highlightCode(file.content)
          gistWithHighlightedContent.files[filename] = {
            filename: file.filename,
            content: highlightedContent
          }
        }

        setGistFiles([gistWithHighlightedContent])
      } catch (err) {
        console.error('Erro ao buscar Gist:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGist()
  }, [])

  return (
    <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
      <div id="code-snippets" className="flex h-[60000px] flex-col">
        <span className="text-sm text-muted-foreground mb-14">
          // Code snippets from my GitHub Gists:
        </span>

        <div className="flex flex-col gap-8">
          {isLoading ? (
            <div className="text-muted">Carregando gists...</div>
          ) : (
            gistFiles.map((gist) => (
              <div key={gist.created_at}>
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden mr-2.5">
                    <img
                      src={gist.owner.avatar_url || 'https://github.com/identicons/app/icon_hash.png'}
                      alt={`${gist.owner.login || 'User'} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-chart-1">{`@${gist.owner.login || 'User'}`}</span>
                    <span className="text-xs text-muted">
                      {`Created ${new Date(gist.created_at || '').toLocaleDateString('pt-BR')}`}
                    </span>
                  </div>
                </div>

                <div className="space-y-7">
                  {Object.values(gist.files).map((file) => (
                    <div key={file.filename} className="bg-card border border-border rounded-2xl overflow-hidden px-7 py-6">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: file.content || 'Loading...'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}