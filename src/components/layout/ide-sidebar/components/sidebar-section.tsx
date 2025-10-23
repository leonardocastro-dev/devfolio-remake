'use client'

import React, { useEffect, useState } from 'react'
import Icon from '@/components/ui/icon'
import { motion, AnimatePresence } from 'framer-motion'
import { collapseVariants, childVariant } from '../constants'
import { SidebarSectionProps } from '../types'

export default function SidebarSection({
  label,
  isOpen: initialIsOpen = true,
  isLast = false,
  children,
  onToggle
}: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const [showSection, setShowSection] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSection(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (onToggle) {
      setIsOpen(initialIsOpen)
    }
  }, [initialIsOpen, onToggle])

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div>
      <div
        className="flex items-center min-h-10 lg:hover:bg-[#061B2D] bg-[#1E2D3D] lg:bg-transparent lg:px-3.5 px-7 cursor-pointer border-b border-primary-200"
        onClick={handleToggle}
      >
        <span className="mr-3">
          <Icon
            icon="arrow-key"
            className={`${isOpen ? 'rotate-180' : 'rotate-90'} transition-transform`}
            currentColor="white"
          />
        </span>
        <span className="text-sm text-white">{label}</span>
      </div>
      <AnimatePresence>
        {isOpen && showSection && (
          <motion.div
            key={label}
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={!isLast ? 'lg:border-b border-primary-200' : ''}
          >
            {React.Children.map(children, (child, index) => (
              <motion.div key={index} variants={childVariant}>
                {child}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
