'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { routes } from '@/routes'

export default function Navigation() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0)
  const linkRefs = useRef<(HTMLElement | null)[]>([])
  const [ready, setReady] = useState(false)

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
    <nav className="flex border-b border-primary-200">
      <span className="max-w-xs w-full border-r border-primary-200 flex items-center text-muted-foreground px-6 py-4">
        leonardo-castro
      </span>

      <div className="flex flex-grow relative justify-between w-full">
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
    </nav>
  )
}
