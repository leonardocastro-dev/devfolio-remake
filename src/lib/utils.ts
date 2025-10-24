import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createHighlighter, Highlighter } from 'shiki'
import { getSectionData } from '@/app/about-me/utils'
import { sidebarItems } from '@/components/layout/sidebar/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let highlighterPromise: Promise<Highlighter> | null = null

const cardTheme = {
  name: 'card-theme',
  type: 'dark' as const,
  fg: '#607b96',
  bg: '#00000000',
  settings: [
    {
      scope: ['keyword', 'storage'],
      settings: { foreground: '#e99287' }
    },
    {
      scope: ['entity.name.type'],
      settings: { foreground: '#43d9ad' }
    },
    {
      scope: ['support.type', 'support.class', 'entity.name.class'],
      settings: { foreground: '#fea55f' }
    },
    {
      scope: ['keyword.operator', 'punctuation.definition.typeparameters'],
      settings: { foreground: '#4d5bce' }
    },
    {
      scope: ['string', 'constant.numeric'],
      settings: { foreground: '#e99287' }
    },
    {
      scope: ['variable.other.constant.object', 'meta.function-call'],
      settings: { foreground: '#c98bdf' }
    },
    {
      scope: ['variable', 'meta.function'],
      settings: { foreground: '#607b96' }
    }
  ],
  colors: {
    'editor.background': '#00000000'
  }
}

const signalTheme = {
  name: 'signal-theme',
  type: 'dark' as const,
  fg: '#607b96',
  bg: '#00000000',
  settings: [
    {
      scope: ['keyword.operator', 'storage'],
      settings: { foreground: '#c98bdf' }
    },
    {
      scope: ['string'],
      settings: { foreground: '#fea55f' }
    },
    {
      scope: ['variable', 'entity.name.function', 'meta.object-literal.key'],
      settings: { foreground: '#4d5bce' }
    }
  ],
  colors: {
    'editor.background': '#00000000'
  }
}

export async function highlightCode(
  code: string,
  lang: string = 'ts',
  variant: 'card' | 'signal' = 'card'
) {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [cardTheme, signalTheme],
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
    theme: variant === 'card' ? 'card-theme' : 'signal-theme'
  })
}

type GetFilePathOptions =
  | {
      type: 'about-me'
      tabId: string | null
    }
  | {
      type: 'projects'
      selectedTechs: string[]
    }

export function getFilePath(options: GetFilePathOptions) {
  if (options.type === 'about-me') {
    const { tabId } = options
    if (!tabId) return null

    // Procura em todas as seções
    for (const sidebarItem of sidebarItems) {
      const sectionData = getSectionData(sidebarItem.id)

      for (const item of sectionData.files) {
        if (item.type === 'file' && item.name === tabId) {
          // Arquivo direto (sem pasta)
          return {
            section: sectionData.label,
            folder: null,
            file: item.name
          }
        }

        if (item.type === 'folder' && item.children) {
          const file = item.children.find((child) => child.name === tabId)
          if (file) {
            return {
              section: sectionData.label,
              folder: item.name,
              file: file.name
            }
          }
        }
      }
    }

    return null
  }

  if (options.type === 'projects') {
    const { selectedTechs } = options

    if (selectedTechs.length === 0) {
      return {
        section: 'projects',
        folder: 'all',
        file: null
      }
    }

    if (selectedTechs.length === 1) {
      return {
        section: 'projects',
        folder: selectedTechs[0].toLowerCase(),
        file: null
      }
    }

    return {
      section: 'projects',
      folder: `${selectedTechs.length} filters`,
      file: null
    }
  }

  return null
}
