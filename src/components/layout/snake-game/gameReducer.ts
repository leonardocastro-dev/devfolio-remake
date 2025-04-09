import { Direction, GameState, GameAction } from './types'
import { BOARD_WIDTH, BOARD_HEIGHT, TOTAL_FOOD, initialState } from './constants'

function moveHead(head: { x: number, y: number }, direction: Direction): void {
  switch (direction) {
    case Direction.UP:
      head.y -= 1
      break
    case Direction.DOWN:
      head.y += 1
      break
    case Direction.LEFT:
      head.x -= 1
      break
    case Direction.RIGHT:
      head.x += 1
      break
  }
}

function isOutOfBounds(head: { x: number, y: number }): boolean {
  return (
    head.x < 0 ||
    head.x >= BOARD_WIDTH ||
    head.y < 0 ||
    head.y >= BOARD_HEIGHT
  )
}

function isCollidingWithBody(head: { x: number, y: number }, body: Array<{ x: number, y: number }>): boolean {
  for (const segment of body) {
    if (segment.x === head.x && segment.y === head.y) {
      return true
    }
  }
  return false
}

const getRandomFood = (snake: Array<{ x: number; y: number }>) => {
  let newFood: { x: number; y: number }
  do {
    newFood = {
      x: Math.floor(Math.random() * (BOARD_WIDTH - 2)) + 1,
      y: Math.floor(Math.random() * (BOARD_HEIGHT - 2)) + 1
    }
  } while (
    snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
  )
  return newFood
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        gameStarted: true
      }

    case 'RESET_GAME':
      return {
        ...initialState
      }

    case 'SET_DIRECTION':
      return {
        ...state,
        direction: action.payload
      }

    case 'MOVE_SNAKE': {
      const head = { ...state.snake[0] }

      moveHead(head, state.direction)

      if (isOutOfBounds(head)) {
        return { ...state, gameOver: true }
      }

      if (isCollidingWithBody(head, state.snake.slice(0, -1))) {
        return { ...state, gameOver: true }
      }

      if (head.x === state.food.x && head.y === state.food.y) {
        const newSnake = [head, ...state.snake]
        const newFoodCollected = state.foodCollected + 1

        if (newFoodCollected >= TOTAL_FOOD) {
          return {
            ...state,
            snake: newSnake,
            foodCollected: newFoodCollected,
            gameWon: true
          }
        }

        const newFood = getRandomFood(newSnake)

        return {
          ...state,
          snake: newSnake,
          food: newFood,
          foodCollected: newFoodCollected
        }
      }

      return {
        ...state,
        snake: [head, ...state.snake.slice(0, -1)]
      }
    }

    case 'GAME_OVER':
      return {
        ...state,
        gameOver: true
      }

    case 'GAME_WON':
      return {
        ...state,
        gameWon: true
      }

    default:
      return state
  }
}