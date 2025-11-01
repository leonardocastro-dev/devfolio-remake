'use client'

import IdeSidebar from '@/components/layout/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import Icon from '@/components/ui/icon'
import ContactForm from './components/contact-form'
import ContactCode from './components/contact-code'
import { Activity } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export default function ContactMe() {
  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col lg:flex-row h-full">
      <h2 className="lg:hidden px-7 pb-7 pt-5 text-sm">_contact-me</h2>
      <div className="flex lg:max-w-xs w-full">
        <IdeSidebar>
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
                <p className="text-muted-foreground">+5511988024732</p>
              </span>
            </div>
          </SidebarSection>
        </IdeSidebar>
      </div>
      <div className="w-full flex flex-col h-full">
        <nav className="hidden lg:block overflow-hidden min-h-10 relative border-b border-primary-200"></nav>
        <div className="lg:grid grid-cols-2 h-full overflow-hidden">
          <ContactForm />
          <Activity mode={isMobile ? 'hidden' : 'visible'}>
            <ContactCode />
          </Activity>
        </div>
      </div>
    </section>
  )
}
