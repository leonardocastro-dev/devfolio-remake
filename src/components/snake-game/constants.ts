import { Direction } from './types'

export const GRID_SIZE = 8
export const BOARD_WIDTH = 30
export const BOARD_HEIGHT = 50
export const GAME_SPEED = 150
export const TOTAL_FOOD = 10

export const oppositeDirections = {
  [Direction.UP]: Direction.DOWN,
  [Direction.DOWN]: Direction.UP,
  [Direction.LEFT]: Direction.RIGHT,
  [Direction.RIGHT]: Direction.LEFT
}

export const config = {
  gameOver: {
    title: 'GAME OVER!',
    buttonText: 'start-again',
    titleColor: 'text-destructive'
  },
  gameWon: {
    title: 'WELL DONE!',
    buttonText: 'play-again',
    titleColor: 'text-chart-2'
  },
  start: {
    title: '',
    buttonText: 'start-game',
    titleColor: ''
  }
}
