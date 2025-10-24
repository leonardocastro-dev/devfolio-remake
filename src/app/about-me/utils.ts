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
