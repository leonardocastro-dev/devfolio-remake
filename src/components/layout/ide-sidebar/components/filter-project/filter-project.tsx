'use client'

import Icon from '@/components/ui/icon'
import { useFilterStore } from './store'
import { technologies } from './constants'

export default function FilterProject() {
  const { toggleTech, isSelected } = useFilterStore()

  return (
    <div className="p-4 flex flex-col gap-4">
      {technologies.map(({ tech }) => {
        const selected = isSelected(tech)
        return (
          <label key={tech} className="flex items-center cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                className="checkbox"
                checked={selected}
                onChange={() => toggleTech(tech)}
              />
              <span className="checkmark"></span>
            </div>
            <div className="flex items-center gap-2.5 ml-6">
              <Icon
                icon={tech.toLowerCase()}
                currentColor={selected ? 'white' : 'var(--muted)'}
              />
              <span
                className={`text-sm ${selected ? 'text-white' : 'text-muted'}`}
              >
                {tech}
              </span>
            </div>
          </label>
        )
      })}
    </div>
  )
}
