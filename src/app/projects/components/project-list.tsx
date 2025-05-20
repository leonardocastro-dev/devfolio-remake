'use client'

import { useState, useEffect } from 'react'
import { useFilterStore } from '@/components/layout/ide-sidebar/components/filter-project/store'
import ProjectCard from './project-card'
import { ProjectCardProps } from '../types'
import { projectsData } from '../constants'

export default function ProjectList() {
  const { selectedTechs } = useFilterStore()
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projectsData)

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

  return (
    <div className="p-8 grid grid-cols-[repeat(auto-fill,_370px)] h-full gap-10 justify-center">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}
