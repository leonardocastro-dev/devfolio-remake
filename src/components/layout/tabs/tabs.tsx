import Icon from '@/components/ui/icon'
import { Tab } from '@/components/layout/types'
import { motion, Reorder } from 'framer-motion'

interface TabProps {
  tab: Tab
  isSelected: boolean
  onClick: () => void
  onRemove: () => void
}

export default function TabItem({
  tab,
  isSelected,
  onClick,
  onRemove
}: TabProps) {
  return (
    <Reorder.Item
      value={tab}
      id={tab.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? 'rgba(96, 123, 150, 0.1)' : 'transparent',
        color: isSelected ? '#fff' : '#607b96',
        y: 0,
        transition: { duration: 0.15 }
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: 'red' }}
      className="flex gap-12 items-center px-4 py-2 border-r border-border cursor-pointer min-w-[100px] flex-shrink-0"
      onPointerDown={onClick}
    >
      <motion.span className="pointer-events-none">{tab.name}</motion.span>
      <motion.button
        className="text-xs pointer-events-auto"
        initial={false}
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
      >
        <Icon
          icon="close"
          className={isSelected ? 'fill-white' : 'fill-muted'}
        />
      </motion.button>
    </Reorder.Item>
  )
}
