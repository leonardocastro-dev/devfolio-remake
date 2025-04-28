'use client'

import { useState, useEffect } from 'react'
import { useFilterStore } from '@/components/layout/ide-sidebar/components/filter-project/store'
import ProjectCard, { ProjectCardProps } from './project-card'

const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: 'eplay-one',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    image: '/images/projects/ui-animations.jpg',
    techs: ['React', 'Tailwindcss', 'Express'],
    link: 'https://eplay-one.vercel.app/'
  },
  {
    id: 2,
    title: 'tetris-game',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    image: '/images/projects/tetris-game.jpg',
    techs: ['React', 'TypeOrm'],
    link: 'https://eplay-one.vercel.app/'
  },
  {
    id: 3,
    title: 'ethereum',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    image: '/images/projects/ethereum.jpg',
    techs: ['Vue', 'MongoDB'],
    link: 'https://eplay-one.vercel.app/'
  }
]

export default function ProjectList() {
  const { selectedTechs } = useFilterStore()
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>(projectsData)

  useEffect(() => {
    if (selectedTechs.length === 0) {
      setFilteredProjects(projectsData)
      return
    }

    const filtered = projectsData.filter(project =>
      project.techs.some(tech => selectedTechs.includes(tech))
    )

    setFilteredProjects(filtered)
  }, [selectedTechs])

  return (
    <div className="p-8 grid grid-cols-[repeat(auto-fill,_370px)] w-full gap-10 justify-center">
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}
