import Icon from '@/components/ui/icon'
import { motion, Reorder } from 'framer-motion'
import { TabProps } from './types'

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
        backgroundColor: isSelected
          ? 'var(--color-primary-300)'
          : 'transparent',
        color: isSelected ? '#fff' : '#607b96',
        y: 0,
        transition: { duration: 0.15 }
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: 'var(--color-primary-200)' }}
      whileHover={{ backgroundColor: 'var(--color-primary-300)' }}
      className="flex gap-12 items-center px-3 py-2 border-r border-primary-200 cursor-pointer min-w-[100px] flex-shrink-0"
      onPointerDown={onClick}
    >
      <motion.span layout="position" className="pointer-events-none">
        {tab.name}
      </motion.span>
      <motion.button
        layout
        className="flex cursor-pointer items-center justify-center h-5 w-5 hover:bg-border rounded-xs transition-colors duration-300"
        initial={false}
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
      >
        <Icon
          icon="close"
          className={isSelected ? 'fill-white' : 'fill-muted-100'}
        />
      </motion.button>
    </Reorder.Item>
  )
}
