export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export interface SnakeProps {
  snake: Array<{ x: number; y: number }>
  direction: Direction
  gridSize: number
  gameOver: boolean
}

export interface FoodProps {
  x: number
  y: number
  gameOver: boolean
}

export interface OverlayProps {
  type: 'gameOver' | 'gameWon' | 'start'
  onAction: () => void
}

export interface GameBoardProps {
  snake: Array<{ x: number; y: number }>
  food: { x: number; y: number }
  direction: Direction
  gameOver: boolean
  gameWon: boolean
  gameStarted: boolean
  resetAndStartGame: () => void
}
