import { SidebarItem } from '@/components/layout/ide-sidebar/types'

export const personalInfoFiles: SidebarItem[] = [
  {
    type: 'folder',
    name: 'bio',
    color: 'var(--chart-5)',
    children: [
      {
        type: 'file',
        name: 'intro'
      },
      {
        type: 'file',
        name: 'personality'
      },
      {
        type: 'file',
        name: 'background'
      }
    ]
  },
  {
    type: 'file',
    name: 'interests'
  },
  {
    type: 'folder',
    name: 'education',
    color: 'var(--chart-1)',
    children: [
      {
        type: 'file',
        name: 'harvard'
      },
      {
        type: 'file',
        name: 'ebac'
      }
    ]
  }
]

export const professionalInfoFiles: SidebarItem[] = [
  {
    type: 'folder',
    name: 'experience',
    color: 'var(--chart-3)',
    children: [
      {
        type: 'file',
        name: 'simpleshub'
      },
      {
        type: 'file',
        name: 'houzewerks'
      },
      {
        type: 'file',
        name: 'mks'
      },
      {
        type: 'file',
        name: 'freelance'
      }
    ]
  },
  {
    type: 'folder',
    name: 'skills',
    color: 'var(--chart-2)',
    children: [
      {
        type: 'file',
        name: 'frontend'
      },
      {
        type: 'file',
        name: 'backend'
      },
      {
        type: 'file',
        name: 'languages'
      }
    ]
  }
]

export const hobbiesFiles: SidebarItem[] = [
  {
    type: 'folder',
    name: 'gaming',
    color: 'var(--chart-4)',
    children: [
      {
        type: 'file',
        name: 'pc-games'
      },
      {
        type: 'file',
        name: 'board-games'
      }
    ]
  },
  {
    type: 'file',
    name: 'cooking'
  },
  {
    type: 'file',
    name: 'traveling'
  }
]
