import { ProjectCardProps } from './types'

export const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: 'crm-prototype',
    description:
      'Application to manage customer relationships and sales processes.',
    image: '/crm-prototype.png',
    techs: ['React', 'Tailwindcss', 'Nextjs', 'SQL'],
    link: 'https://crm-woad-five.vercel.app/'
  },
  {
    id: 2,
    title: 'todo-list',
    description:
      'App to manage and organize daily tasks efficiently and effortlessly.',
    image: '/todo-list.png',
    techs: ['Vue', 'Tailwindcss', 'Nuxt', 'Firebase'],
    link: 'https://todo-list-rho-sandy.vercel.app/'
  },
  {
    id: 3,
    title: 'crypto-dashboard',
    description: 'Cryptocurrency trading dashboard with real-time monitoring.',
    image: '/crypto-dashboard.png',
    techs: ['React', 'Vite', 'SCSS'],
    link: 'https://crypto-dashboard-beige-three.vercel.app/'
  }
]
