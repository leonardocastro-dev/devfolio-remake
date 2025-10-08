'use client'

import { useMediaQuery } from 'react-responsive'

export function useIsMobile() {
  return useMediaQuery({ query: '(max-width: 1024px)' })
}
