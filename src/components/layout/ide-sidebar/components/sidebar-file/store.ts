import { create } from 'zustand'
import { TabsState } from './types'
import { Tab } from '@/components/layout/types'

const defaultTab: Tab = {
  id: 'intro',
  name: 'intro'
}

export const useTabsStore = create<TabsState>((set, get) => ({
  tabs: [defaultTab],
  selectedTab: defaultTab.id,

  addTab: (tab) => {
    const tabs = get().tabs
    const existing = tabs.find((t) => t.name === tab.name)
    if (existing) return set({ selectedTab: existing.id })

    const newTab: Tab = { ...tab, id: tab.name }

    set((state) => ({
      tabs: [...state.tabs, newTab],
      selectedTab: newTab.id
    }))
  },

  removeTab: (id) => {
    const { tabs, selectedTab } = get()
    const filtered = tabs.filter((t) => t.id !== id)

    set({
      tabs: filtered,
      selectedTab:
        id === selectedTab ? (filtered.at(-1)?.id ?? null) : selectedTab
    })
  },

  setActiveTab: (id) => set({ selectedTab: id }),

  isTabOpen: (name) => get().tabs.some((t) => t.name === name),

  setTabs: (tabs: Tab[]) => set({ tabs })
}))
