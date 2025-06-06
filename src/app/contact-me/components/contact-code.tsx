import { useEffect, useState } from 'react'
import { highlightCode } from '@/lib/utils'
import { getCode } from './constants'
import { useInputStore } from '@/components/ui/input-store'

export default function ContactCode() {
  const [highlighted, setHighlighted] = useState('')
  const values = useInputStore((state) => state.values)

  const now = new Date()
  const date = `${now.toLocaleDateString('en-US', {
    weekday: 'short'
  })} ${now.getDate()} ${now.toLocaleDateString('en-US', { month: 'short' })}`

  useEffect(() => {
    const loadCode = async () => {
      const codeWithSpaces = getCode({
        name: values.name,
        email: values.email,
        message: values.message,
        date
      }).replace(/^\s*$/gm, ' ')
      const highlighted = await highlightCode(codeWithSpaces, 'ts', 'signal')
      setHighlighted(highlighted)
    }

    loadCode()
  }, [values, date])

  return (
    <div className="pb-4 pt-16 px-9 scrollbar-section max-h-full 2xl:pt-30">
      <div className="h-[60000px]">
        <div
          className="about-block max-w-[630px] mx-auto"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
    </div>
  )
}
