'use client'

import IdeSidebar from '@/components/layout/ide-sidebar'
import SidebarSection from '@/components/layout/ide-sidebar/components/sidebar-section'
import Icon from '@/components/ui/icon'
import ContactForm from './components/contact-form'
import ContactCode from './components/contact-code'

export default function ContactMe() {
  return (
    <section className="flex h-full">
      <div className="flex max-w-xs w-full h-full">
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
        <nav className="overflow-hidden min-h-10 relative border-b border-primary-200"></nav>
        <div className="grid grid-cols-2 h-full overflow-hidden">
          <ContactForm />
          <ContactCode />
        </div>
      </div>
    </section>
  )
}
