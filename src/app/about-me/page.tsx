'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import { highlightCode } from '@/lib/utils'

const bioCode = `/**
* Sobre mim
* Olá! Sou Leonardo Castro, um desenvolvedor apaixonado por criar soluções web
* inovadoras e funcionais. Minha jornada na programação começou há 5 anos,
* quando descobri minha paixão por transformar ideias em código.
*/
* Atualmente, trabalho com tecnologias como React, Next.js, TypeScript
* e outras ferramentas modernas de desenvolvimento web.
*/`

export default function AboutMe() {
  const [codeHtml, setCodeHtml] = useState('')

  useEffect(() => {
    const loadCode = async () => {
      const html = await highlightCode(bioCode, 'md')
      setCodeHtml(html)
    }

    loadCode()
  }, [])
  return (
    <main className="flex h-full">
      <IdeSidebar />
      <div className="w-full flex flex-col h-full">
        <div className="flex border-b border-border">
          <div className="px-4 py-2 border-r border-border text-muted">
            personal-info
          </div>
        </div>
        <div className="grid grid-cols-2 h-full overflow-hidden">
          <div className="py-4 px-9 overflow-y-auto custom-scrollbar max-h-full">
            <div id="bio" className="h-[60000px]">
              <div
                className="about-block"
                dangerouslySetInnerHTML={{ __html: codeHtml }}
              />
            </div>
            {/* Você pode adicionar mais seções conforme necessário */}
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
