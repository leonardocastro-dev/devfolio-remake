import { create } from 'zustand'
import { TechFilter } from './types'
interface FilterState {
  selectedTechs: TechFilter[]
  toggleTech: (tech: TechFilter) => void
  clearFilters: () => void
  isSelected: (tech: TechFilter) => boolean
}

export const useFilterStore = create<FilterState>((set, get) => ({
  selectedTechs: [],

  toggleTech: (tech) => {
    set((state) => {
      const isAlreadySelected = state.selectedTechs.includes(tech)

      if (isAlreadySelected) {
        return {
          selectedTechs: state.selectedTechs.filter((t) => t !== tech)
        }
      } else {
        return {
          selectedTechs: [...state.selectedTechs, tech]
        }
      }
    })
  },

  clearFilters: () => set({ selectedTechs: [] }),

  isSelected: (tech) => get().selectedTechs.includes(tech)
}))
