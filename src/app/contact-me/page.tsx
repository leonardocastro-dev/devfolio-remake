'use client'

import IdeSidebar from '@/components/layout/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import TabItem from '@/components/layout/tabs'
import { Tab } from '@/components/layout/tabs/types'
import { AnimatePresence, Reorder } from 'framer-motion'
import Icon from '@/components/ui/icon'
import { useFilterStore } from '@/components/layout/ide-sidebar/components/filter-project/store'
import { useEffect, useState } from 'react'
import ContactForm from './components/contact-form'
import ContactCode from './components/contact-code'

export default function ContactMe() {
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
            <SidebarSection label="contacts">
              <div className="flex flex-col gap-2.5 px-3.5 py-2.5">
                <span className="flex items-center gap-2">
                  <Icon icon="mail" currentColor="var(--muted-100)" />
                  <p className="text-muted-foreground">
                    leonardocastro-dev@pm.me
                  </p>
                </span>
                <span className="flex items-center gap-2">
                  <Icon icon="phone" currentColor="var(--muted-100)" />
                  <p className="text-muted-foreground">+5511992474559</p>
                </span>
              </div>
            </SidebarSection>
            <SidebarSection label="find-me-also-in" isLast={true}>
              <div></div>
            </SidebarSection>
          </>
        </IdeSidebar>
      </div>
      <div className="w-full flex flex-col h-full">
        <nav className="overflow-hidden min-h-10 relative border-b border-primary-200">
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
        <div className="grid grid-cols-2 h-full overflow-hidden">
          <ContactForm />
          <ContactCode />
        </div>
      </div>
    </main>
  )
}
