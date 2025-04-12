import React from 'react'
import SidebarSection from './components/sidebar-section'
import SidebarFile, { SidebarItem } from './components/sidebar-file'
import Link from 'next/link'

const IdeSidebar = () => {
  const personalInfoFiles: SidebarItem[] = [
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

  return (
    <div className="bg-transparent text-white w-64 h-full overflow-y-auto border-r border-border">
      <SidebarSection label="personal-info">
        {personalInfoFiles.map((file, index) => (
          <SidebarFile key={`personal-info-${index}`} schema={file} />
        ))}
      </SidebarSection>

      <SidebarSection label="contacts">
        <div className="flex items-center px-3.5 py-2.5">
          <span className="mr-2 text-muted">✉️</span>
          <Link
            href="/contact-me"
            className="text-sm text-muted hover:text-white"
          >
            user@gmail.com
          </Link>
        </div>
        <div className="flex items-center px-3.5 py-2.5">
          <span className="mr-2 text-muted">📞</span>
          <Link
            href="/contact-me"
            className="text-sm text-muted hover:text-white"
          >
            +5511992474559
          </Link>
        </div>
      </SidebarSection>
    </div>
  )
}

export default IdeSidebar
