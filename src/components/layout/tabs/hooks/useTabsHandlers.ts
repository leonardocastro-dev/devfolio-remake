'use client'

import { useRef, useCallback } from 'react'
import { TAB_CLASSES, DRAG_IMAGE_POSITION } from '../constants'
import { createDragImage } from '../utils'
import { TabsHandlersProps } from '../types'

export function useTabsHandlers({
  tabs,
  setActiveTab,
  reorderTabs
}: TabsHandlersProps) {
  const dragTabIndex = useRef<number | null>(null)

  const handleDragStart = useCallback(
    (e: React.DragEvent, index: number) => {
      dragTabIndex.current = index
      e.dataTransfer.effectAllowed = 'move'

      const tabId = tabs[index].id
      setActiveTab(tabId)

      const element = e.currentTarget as HTMLElement
      requestAnimationFrame(() => {
        element.classList.add(TAB_CLASSES.DRAGGING)
      })

      const dragImageEl = createDragImage(element)
      e.dataTransfer.setDragImage(
        dragImageEl,
        DRAG_IMAGE_POSITION.OFFSET_X,
        DRAG_IMAGE_POSITION.OFFSET_Y
      )
    },
    [tabs, setActiveTab]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDragEnter = useCallback(
    (e: React.DragEvent, enterIndex: number) => {
      e.preventDefault()
      if (
        dragTabIndex.current !== null &&
        dragTabIndex.current !== enterIndex
      ) {
        reorderTabs(dragTabIndex.current, enterIndex)
        dragTabIndex.current = enterIndex
      }
    },
    [reorderTabs]
  )

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragTabIndex.current = null
  }, [])

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    ;(e.currentTarget as HTMLElement).classList.remove(TAB_CLASSES.DRAGGING)
    dragTabIndex.current = null
  }, [])

  return {
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDrop,
    handleDragEnd
  }
}
