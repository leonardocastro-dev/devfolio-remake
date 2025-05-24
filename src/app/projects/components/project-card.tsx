'use client'

import Image from 'next/image'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProjectCardProps } from '../types'

export default function ProjectCard({
  id,
  title,
  description,
  image,
  techs,
  link
}: ProjectCardProps) {
  return (
    <div className="flex w-[370px] flex-col gap-3.5">
      <h3 className="text-muted-foreground">
        <span className="text-[#4D5BCE] font-bold">Project {id} </span>
        {`// _${title}`}
      </h3>
      <div className="bg-primary-500 rounded-2xl flex flex-col h-[315px] overflow-hidden border border-primary-200">
        <div className="relative border-b border-primary-200 h-[145px] w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute top-5 right-5 flex gap-2">
            {techs.map((tech) => (
              <div key={tech} className="w-6 h-6 rounded-xs bg-primary">
                <Icon
                  icon={tech.toLowerCase()}
                  currentColor="var(--chart-2)"
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
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
