import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createHighlighter, Highlighter } from 'shiki'

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
