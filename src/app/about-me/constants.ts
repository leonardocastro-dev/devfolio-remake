import { SidebarItem } from "@/components/layout/ide-sidebar/components/sidebar-file/types";

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
