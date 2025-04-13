import { SidebarItem } from '@/components/layout/ide-sidebar/components/sidebar-file'

export const personalInfoFiles: SidebarItem[] = [
  {
    type: 'folder',
    name: 'bio',
    color: 'var(--chart-5)',
    children: [
      {
        type: 'file',
        name: 'intro',
        path: '/about-me/bio#intro'
      },
      {
        type: 'file',
        name: 'personality',
        path: '/about-me/bio#personality'
      },
      {
        type: 'file',
        name: 'background',
        path: '/about-me/bio#background'
      }
    ]
  },
  {
    type: 'file',
    name: 'interests',
    path: '/about-me#interests'
  },
  {
    type: 'folder',
    name: 'education',
    color: 'var(--chart-1)',
    children: [
      {
        type: 'file',
        name: 'harvard',
        path: '/about-me/education#harvard'
      },
      {
        type: 'file',
        name: 'ebac',
        path: '/about-me/education#ebac'
      }
    ]
  }
]
