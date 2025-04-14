import { create } from 'zustand'
import { Tab, TabsState } from './types'

const defaultTab: Tab = {
  id: 'intro',
  name: 'intro'
}

export const useTabsStore = create<TabsState>((set, get) => ({
  tabs: [defaultTab],
  activeTabId: defaultTab.id,

  addTab: (tab) => {
    const tabs = get().tabs
    const existing = tabs.find((t) => t.name === tab.name)
    if (existing) return set({ activeTabId: existing.id })

    const newTab: Tab = { ...tab, id: tab.name }

    set((state) => ({
      tabs: [...state.tabs, newTab],
      activeTabId: newTab.id
    }))
  },

  removeTab: (id) => {
    const { tabs, activeTabId } = get()
    const filtered = tabs.filter((t) => t.id !== id)

    set({
      tabs: filtered,
      activeTabId:
        id === activeTabId ? (filtered.at(-1)?.id ?? null) : activeTabId
    })
  },

  setActiveTab: (id) => set({ activeTabId: id }),

  isTabOpen: (name) => get().tabs.some((t) => t.name === name),

  reorderTabs: (dragIndex, dropIndex) => {
    const tabs = [...get().tabs]
    const draggedTab = tabs[dragIndex]

    tabs.splice(dragIndex, 1)
    tabs.splice(dropIndex, 0, draggedTab)

    set({ tabs })
  }
}))
