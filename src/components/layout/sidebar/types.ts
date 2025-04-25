export type SidebarType = 'personal-info' | 'professional-info' | 'hobbies'

export interface SidebarProps {
  onSectionChange: (section: SidebarType) => void
  activeSection: SidebarType
}