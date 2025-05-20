import { TechFilter } from '@/components/layout/ide-sidebar/components/filter-project/types'

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  techs: TechFilter[]
  link: string
}
