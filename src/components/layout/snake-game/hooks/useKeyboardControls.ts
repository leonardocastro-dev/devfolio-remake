import { useEffect, useRef } from 'react'
import { Direction, UseKeyboardControlsOptions } from '../types'
import { oppositeDirections, KEY_TO_DIRECTION } from '../constants'

const isValidDirection = (newDir: Direction, currentDir: Direction): boolean => {
  return oppositeDirections[newDir] !== currentDir
}

export function useKeyboardControls({
  enabled,
  maxQueueSize = 3,
  initialDirection = Direction.UP
}: UseKeyboardControlsOptions) {
  const directionQueueRef = useRef<Direction[]>([])
  const lastProcessedDirectionRef = useRef<Direction>(initialDirection)

  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const newDirection = KEY_TO_DIRECTION[e.key]
      if (!newDirection) return

      if (
        newDirection &&
        isValidDirection(newDirection, lastProcessedDirectionRef.current) &&
        directionQueueRef.current.length < maxQueueSize
      ) {
        directionQueueRef.current.push(newDirection)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, maxQueueSize])

  const getNextDirection = (): Direction | null => {
    if (directionQueueRef.current.length === 0) return null

    const nextDirection = directionQueueRef.current.shift()!
    lastProcessedDirectionRef.current = nextDirection
    return nextDirection
  }

  const reset = (direction: Direction = Direction.UP) => {
    directionQueueRef.current = []
    lastProcessedDirectionRef.current = direction
  }

  return {
    getNextDirection,
    reset,
    currentDirection: lastProcessedDirectionRef.current
  }
}
