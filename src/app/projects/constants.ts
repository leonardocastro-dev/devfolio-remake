import { ProjectCardProps } from './types'

export const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: 'crm-prototype',
    description:
      'Application to manage customer relationships and sales processes.',
    image: '/crm.png',
    techs: ['React', 'Tailwindcss', 'Nextjs', 'SQL'],
    link: 'https://crm-woad-five.vercel.app/'
  },
  {
    id: 2,
    title: 'todo-list',
    description:
      'Application to manage daily tasks efficiently and in an organized manner.',
    image: '/todo-list.png',
    techs: ['Vue', 'Tailwindcss', 'Nuxt', 'Firebase'],
    link: 'https://todo-list-rho-sandy.vercel.app/'
  }
]
