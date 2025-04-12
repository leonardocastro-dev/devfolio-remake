'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const routes = [
  { path: '/', label: '_hello' },
  { path: '/about-me', label: '_about-me' },
  { path: '/projects', label: '_projects' },
  { path: '/contact-me', label: '_contact-me', isRight: true }
]

export default function Navigation() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const linkRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const index = routes.findIndex((route) => route.path === pathname)
    if (index !== -1) setActiveIndex(index)
  }, [pathname])

  useEffect(() => {
    const currentEl = linkRefs.current[activeIndex]
    if (currentEl) {
      const { offsetLeft, offsetWidth } = currentEl
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        transition: 'all 0.3s ease'
      })
    }
  }, [activeIndex])

  const leftRoutes = routes.filter((r) => !r.isRight)
  const rightRoutes = routes.filter((r) => r.isRight)

  return (
    <nav className="flex border-b border-border">
      <span className="flex items-center text-muted px-6 py-4">
        leonardo-castro
      </span>

      <div className="flex justify-center flex-grow">
        <div className="max-w-7xl w-full">
          <ul className="flex relative">
            {leftRoutes.map((route, index) => (
              <li
                key={route.path}
                ref={(el) => {
                  linkRefs.current[index] = el
                }}
                className={`${index === leftRoutes.length - 1 ? 'border-r border-border' : ''}`}
              >
                <Link
                  href={route.path}
                  className={`nav-link ${pathname === route.path ? 'text-foreground!' : ''}`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <div
              className="absolute bottom-0 h-[3px] bg-accent"
              style={indicatorStyle}
            />
          </ul>
        </div>
      </div>

      {rightRoutes.map((route, index) => {
        const refIndex = leftRoutes.length + index
        return (
          <Link
            key={route.path}
            href={route.path}
            className={`nav-link px-6 py-4 flex items-center ${pathname === route.path ? 'text-foreground!' : ''}`}
            ref={(el) => {
              linkRefs.current[refIndex] = el
            }}
          >
            {route.label}
          </Link>
        )
      })}
    </nav>
  )
}
