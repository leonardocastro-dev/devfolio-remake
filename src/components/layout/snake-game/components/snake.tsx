import React from 'react'
import { Direction, SnakeProps } from '../types'

export default function Snake({
  snake,
  direction,
  gridSize,
  gameOver
}: SnakeProps) {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className="bg-chart-2 absolute"
          style={{
            width: `${gridSize}px`,
            height: `${gridSize}px`,
            left: `${segment.x * gridSize}px`,
            top: `${segment.y * gridSize}px`,
            backgroundColor: gameOver ? '#ff7b92' : '#43d9ad',
            opacity: 1 - index / snake.length,
            borderRadius:
              index === 0 && !gameOver
                ? direction === Direction.UP
                  ? '50% 50% 0 0'
                  : direction === Direction.DOWN
                    ? '0 0 50% 50%'
                    : direction === Direction.LEFT
                      ? '50% 0 0 50%'
                      : '0 50% 50% 0'
                : '0'
          }}
        />
      ))}
    </>
  )
}
