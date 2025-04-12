import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createHighlighter, Highlighter } from 'shiki'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let highlighterPromise: Promise<Highlighter> | null = null

const customTheme = {
  name: 'custom-theme',
  type: 'dark' as const,
  fg: '#ffffff',
  bg: '#00000000',
  settings: [
    { scope: ['storage'], settings: { foreground: '#4d5bce' } },
    { scope: ['variable'], settings: { foreground: '#43d9ad' } },
    { scope: ['string'], settings: { foreground: '#e99287' } },
    { scope: ['number'], settings: { foreground: '#e99287' } },
    { scope: ['entity.name.type'], settings: { foreground: '#fea55f' } },
    { scope: ['entity.name.function'], settings: { foreground: '#c98bdf' } },
    { scope: ['punctuation', 'operator'], settings: { foreground: '#e99287' } }
  ],
  colors: {
    'editor.background': '#00000000'
  }
}

export async function highlightCode(code: string, lang: string = 'ts') {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [customTheme],
      langs: ['ts', 'js', 'javascript', 'typescript', 'md', 'markdown']
    })
  }

  const highlighter = await highlighterPromise

  if (lang === 'md' || lang === 'markdown') {
    return highlighter.codeToHtml(code.trim(), {
      lang,
      theme: {
        name: 'markdown-gray-theme',
        type: 'dark',
        settings: [
          {
            scope: ['text.html.markdown', 'markup'],
            settings: { foreground: '#607b96' }
          }
        ],
        colors: {
          'editor.background': '#00000000'
        }
      }
    })
  }

  return highlighter.codeToHtml(code.trim(), {
    lang,
    theme: 'custom-theme'
  })
}
