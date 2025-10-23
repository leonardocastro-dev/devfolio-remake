import {
  hobbiesFiles,
  personalInfoFiles,
  professionalInfoFiles
} from './constants'
import { sidebarItems } from '@/components/layout/sidebar/constants'

export function getSectionData(activeSection: string) {
  switch (activeSection) {
    case 'personal-info':
      return {
        files: personalInfoFiles,
        label: 'personal-info'
      }
    case 'professional-info':
      return {
        files: professionalInfoFiles,
        label: 'professional-info'
      }
    case 'hobbies':
      return {
        files: hobbiesFiles,
        label: 'hobbies'
      }
    default:
      return {
        files: personalInfoFiles,
        label: 'personal-info'
      }
  }
}

export function getFilePath(tabId: string | null) {
  if (!tabId) return null

  // Procura em todas as seções
  for (const sidebarItem of sidebarItems) {
    const sectionData = getSectionData(sidebarItem.id)

    for (const item of sectionData.files) {
      if (item.type === 'file' && item.name === tabId) {
        // Arquivo direto (sem pasta)
        return {
          section: sectionData.label,
          folder: null,
          file: item.name
        }
      }

      if (item.type === 'folder' && item.children) {
        const file = item.children.find((child) => child.name === tabId)
        if (file) {
          return {
            section: sectionData.label,
            folder: item.name,
            file: file.name
          }
        }
      }
    }
  }

  return null
}
