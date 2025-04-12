import { GRID_SIZE } from '../constants'
import { FoodProps } from '../types'

export function FoodItem({ x, y, gameOver }: FoodProps) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${x * GRID_SIZE}px`,
        top: `${y * GRID_SIZE}px`,
        width: `${GRID_SIZE}px`,
        height: `${GRID_SIZE}px`,
        backgroundColor: gameOver ? '#ff7b92' : '#43d9ad',
        animation: gameOver
          ? 'pulse-destructive 2s infinite'
          : 'pulse 2s infinite'
      }}
    />
  )
}
