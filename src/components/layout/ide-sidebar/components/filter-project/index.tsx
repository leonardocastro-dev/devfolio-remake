'use client'

import { useFilterStore } from './store'
import { technologies } from './constants'

export default function FilterProject() {
  const { toggleTech, isSelected } = useFilterStore()

  return (
    <div className="pt-4 lg:pb-4 px-7 lg:px-4 flex flex-col gap-4">
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
            <span
              className={`ml-4 text-sm ${selected ? 'text-white' : 'text-muted-foreground'}`}
            >
              {tech}
            </span>
          </label>
        )
      })}
    </div>
  )
}
