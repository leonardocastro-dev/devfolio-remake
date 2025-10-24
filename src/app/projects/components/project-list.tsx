'use client'

import { useState, useEffect, useMemo } from 'react'
import { useFilterStore } from '@/components/layout/ide-sidebar/components/filter-project/store'
import ProjectCard from './project-card'
import { ProjectCardProps } from '../types'
import { projectsData } from '../constants'
import { getFilePath } from '@/lib/utils'
import { useIsMobile } from '@/app/hooks/useIsMobile'

export default function ProjectList() {
  const isMobile = useIsMobile()
  const { selectedTechs } = useFilterStore()
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projectsData)

  const filePath = useMemo(
    () => getFilePath({ type: 'projects', selectedTechs }),
    [selectedTechs]
  )

  useEffect(() => {
    if (selectedTechs.length === 0) {
      setFilteredProjects(projectsData)
      return
    }

    const filtered = projectsData.filter((project) =>
      project.techs.some((tech) => selectedTechs.includes(tech))
    )

    setFilteredProjects(filtered)
  }, [selectedTechs])

  const handleClearFilters = () => {
    useFilterStore.getState().clearFilters()
  }

  return (
    <div className="lg:p-8 px-7 py-9 flex flex-col">
      {isMobile && filePath && (
        <h2 className="mb-4 lg:hidden flex-wrap gap-2 flex items-center justify-between">
          <span>
            <span className="text-white">{`// ${filePath.section}`}</span>
            {filePath.folder && (
              <span className="text-muted-100"> / {filePath.folder}</span>
            )}
          </span>
          <button
            onClick={handleClearFilters}
            className={`transition-colors ${
              selectedTechs.length > 0 ? 'text-white' : 'text-muted-100'
            }`}
          >
            _clear-filters
          </button>
        </h2>
      )}
      <div className="flex flex-col lg:grid scrollbar-section grid-cols-[repeat(auto-fill,_370px)] h-full lg:gap-10 gap-5 justify-center">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
