export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export type Position = {
  x: number
  y: number
}

export type SnakeSegment = Position

export type BaseGameState = {
  gameOver: boolean
}

export interface SnakeProps extends BaseGameState {
  snake: SnakeSegment[]
  direction: Direction
  gridSize: number
}

export interface FoodProps extends Position, BaseGameState {}

export interface OverlayProps {
  type: 'gameOver' | 'gameWon' | 'start'
  onAction: () => void
}

export interface GameBoardProps {
  snake: SnakeSegment[]
  food: Position
  direction: Direction
  gameOver: boolean
  gameWon: boolean
  gameStarted: boolean
  resetAndStartGame: () => void
}

export interface GameControlsProps {
  foodCollected: number
  onSkip: () => void
}

export type UseKeyboardControlsOptions = {
  enabled: boolean
  maxQueueSize?: number
  initialDirection?: Direction
}

export type GameState = {
  snake: SnakeSegment[]
  food: Position
  direction: Direction
  foodCollected: number
  gameStarted: boolean
  gameOver: boolean
  gameWon: boolean
}

export type GameAction =
  | { type: 'START_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'SET_DIRECTION'; payload: Direction }
  | { type: 'MOVE_SNAKE' }
  | { type: 'EAT_FOOD' }
  | { type: 'GAME_OVER' }
  | { type: 'GAME_WON' }
