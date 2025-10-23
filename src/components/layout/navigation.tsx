'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { routes } from '@/routes'

export default function Navigation() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0)
  const linkRefs = useRef<(HTMLElement | null)[]>([])
  const [ready, setReady] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const allReady = linkRefs.current.every((ref) => ref !== null)
    const index = routes.findIndex((route) => route.path === pathname)

    if (allReady && index !== -1) {
      setActiveIndex(index)

      const timer = setTimeout(() => {
        setReady(true)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [pathname])

  const leftRoutes = routes.filter((r) => !r.isRight)
  const rightRoutes = routes.filter((r) => r.isRight)

  return (
    <>
      <nav className="flex p-[18px] lg:p-0 justify-between items-center lg:justify-start border-b border-primary-200 fixed lg:relative top-0 left-0 right-0 z-50 bg-primary-400 lg:bg-transparent">
        <span className="max-w-xs border-primary-200 flex items-center text-muted-foreground lg:px-6 lg:py-4 lg:w-full lg:border-r">
          leonardo-castro
        </span>

        <div className="hidden flex-grow relative justify-between w-full lg:flex">
          <ul className="flex">
            {leftRoutes.map((route, index) => (
              <li
                key={route.path}
                ref={(el) => {
                  linkRefs.current[index] = el
                }}
              >
                <Link
                  href={route.path}
                  className={`nav-link ${pathname === route.path ? 'text-primary-foreground!' : ''}`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex">
            {rightRoutes.map((route, index) => {
              const refIndex = leftRoutes.length + index
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`nav-link border-l border-r-0! ${pathname === route.path ? 'text-primary-foreground!' : ''}`}
                  ref={(el) => {
                    linkRefs.current[refIndex] = el
                  }}
                >
                  {route.label}
                </Link>
              )
            })}
          </ul>

          {ready && (
            <motion.div
              className="absolute bottom-0 h-[3px] bg-accent"
              layoutId="navigation-underline"
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.3
              }}
              animate={{
                width: linkRefs.current[activeIndex]?.offsetWidth,
                left: linkRefs.current[activeIndex]?.offsetLeft
              }}
            />
          )}
        </div>
        <div
          className={clsx('nav-burguer lg:hidden', {
            open: isMenuOpen
          })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[61px] lg:hidden bg-primary-400 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut'
            }}
          >
            <ul>
              {routes.map((route, index) => {
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`nav-link border-b ${pathname === route.path ? 'text-primary-foreground!' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    ref={(el) => {
                      linkRefs.current[index] = el
                    }}
                  >
                    {route.label}
                  </Link>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
