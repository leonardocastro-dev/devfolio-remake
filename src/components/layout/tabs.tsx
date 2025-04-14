import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icon'
import { Tab } from '@/components/layout/ide-sidebar/components/sidebar-file/types'
import { useTabsStore } from '@/components/layout/ide-sidebar/components/sidebar-file/store'
import { useRef, useState, useEffect } from 'react'

interface TabsProps {
  tabs: Tab[]
  activeTabId: string | null
  setActiveTab: (id: string) => void
  removeTab: (id: string) => void
}

export default function Tabs({ tabs, activeTabId, setActiveTab, removeTab }: TabsProps) {
  const { reorderTabs } = useTabsStore()
  const dragTabIndex = useRef<number | null>(null)
  const emptyImageRef = useRef<HTMLImageElement | null>(null)

  // Cria uma imagem vazia para substituir o fantasma padrão
  useEffect(() => {
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Imagem transparente 1x1
    emptyImageRef.current = img;
  }, []);

  if (tabs.length === 0) return null

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragTabIndex.current = index
    e.dataTransfer.effectAllowed = 'move'

    // Remove o indicador fantasma usando uma imagem transparente
    if (emptyImageRef.current) {
      e.dataTransfer.setDragImage(emptyImageRef.current, 0, 0);
    }

    // Adiciona uma classe de estilo para feedback visual durante o arrastar
    e.currentTarget.classList.add('opacity-50')
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDragEnter = (e: React.DragEvent, enterIndex: number) => {
    e.preventDefault()

    // Se estiver arrastando sobre outra aba (não a própria)
    if (dragTabIndex.current !== null && dragTabIndex.current !== enterIndex) {
      // Reordena em tempo real
      reorderTabs(dragTabIndex.current, enterIndex)
      // Atualiza o índice de arrasto para o novo índice
      dragTabIndex.current = enterIndex
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    dragTabIndex.current = null
  }

  const handleDragEnd = (e: React.DragEvent) => {
    // Remove a classe de estilo
    e.currentTarget.classList.remove('opacity-50')
    dragTabIndex.current = null
  }

  return (
    <div className="flex border-b border-border">
      {tabs.map((tab: Tab, index) => (
        <div
          key={tab.id}
          className={cn(
            "flex gap-12 items-center px-4 py-2 border-r border-border cursor-pointer transition-transform duration-200 ease-in-out",
            activeTabId === tab.id ? "bg-muted/10 text-white" : "text-muted"
          )}
          onClick={() => setActiveTab(tab.id)}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        >
          <span className="pointer-events-none">{tab.name}</span>
          <button
            className="text-xs pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation()
              removeTab(tab.id)
            }}
          >
            <Icon
              icon="close"
              className={activeTabId === tab.id ? "fill-white" : "fill-muted"}
            />
          </button>
        </div>
      ))}
    </div>
  )
}