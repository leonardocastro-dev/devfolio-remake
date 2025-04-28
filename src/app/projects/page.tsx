'use client'

import IdeSidebar from '@/components/layout/ide-sidebar/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import FilterProject from '@/components/layout/ide-sidebar/components/filter-project/filter-project'
import TabItem from '@/components/layout/tabs/tabs'
import { Tab } from '@/components/layout/tabs/types'
import { AnimatePresence, Reorder } from 'framer-motion'
import Icon from '@/components/ui/icon'
import ProjectList from './components/project-list'
import { useFilterStore } from '@/components/layout/ide-sidebar/components/filter-project/store'
import { useEffect, useState } from 'react'

export default function Projects() {
  const { selectedTechs } = useFilterStore()
  const [filterTab, setFilterTab] = useState<Tab | null>(null)

  useEffect(() => {
    if (selectedTechs.length === 0) {
      setFilterTab(null)
      return
    }

    setFilterTab({
      id: 'filters',
      name: `Filters (${selectedTechs.length})`
    })
  }, [selectedTechs])

  const handleRemoveTab = () => {
    useFilterStore.getState().clearFilters()
  }

  return (
    <main className="flex h-full">
      <div className="flex max-w-xs w-full h-full">
        <IdeSidebar>
          <>
            <SidebarSection label="projects">
              <FilterProject />
            </SidebarSection>
            <SidebarSection label="contacts" isLast={true}>
              <div className="flex flex-col gap-2.5 px-3.5 py-2.5">
                <span className="flex items-center gap-2">
                  <Icon icon="mail" currentColor="var(--muted)" />
                  <p className="cursor-default text-muted">
                    leonardocastro-dev@pm.me
                  </p>
                </span>
                <span className="flex items-center gap-2">
                  <Icon icon="phone" currentColor="var(--muted)" />
                  <p className="text-muted">+5511992474559</p>
                </span>
              </div>
            </SidebarSection>
          </>
        </IdeSidebar>
      </div>
      <div className="w-full flex flex-col h-full">
        <nav className="overflow-hidden min-h-10 relative border-b border-border">
          <Reorder.Group
            as="ul"
            axis="x"
            values={filterTab ? [filterTab] : []}
            onReorder={() => {}}
            className="flex"
          >
            <AnimatePresence initial={false}>
              {filterTab && (
                <TabItem
                  key={filterTab.id}
                  tab={filterTab}
                  isSelected={true}
                  onClick={() => {}}
                  onRemove={handleRemoveTab}
                />
              )}
            </AnimatePresence>
          </Reorder.Group>
        </nav>
        <ProjectList />
      </div>
    </main>
  )
}