'use client'

import Image from 'next/image'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProjectCardProps } from '../types'
import { useIsMobile } from '@/app/hooks/useIsMobile'

type MainTech = 'React' | 'Vue'

const TECH_COLORS: Record<MainTech, string> = {
  React: '#86E1F9',
  Vue: '#81D4AF'
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  techs,
  link
}: ProjectCardProps) {
  const isMobile = useIsMobile()
  const mainTech = techs.find((tech) => tech === 'React' || tech === 'Vue') as
    | MainTech
    | undefined

  return (
    <div className="flex lg:w-[370px] flex-col gap-3.5">
      <h3 className="text-muted-foreground">
        <span className="text-[#4D5BCE] font-bold">Project {id} </span>
        {`${isMobile ? '/' : '//'} _${title}`}
      </h3>
      <div className="bg-primary-500 rounded-2xl flex flex-col lg:h-[315px] h-[328px] overflow-hidden border border-primary-200">
        <div className="relative border-b border-primary-200 h-[146px] w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          {mainTech && (
            <div className="absolute top-5 right-5">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: TECH_COLORS[mainTech] }}
              >
                <Icon
                  icon={mainTech.toLowerCase()}
                  currentColor="var(--chart-2)"
                  className="w-5 h-5"
                />
              </div>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <p className="text-sm text-muted-foreground">{description}</p>
          <Link href={link} target="_blank">
            <Button variant="default">view-project</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
