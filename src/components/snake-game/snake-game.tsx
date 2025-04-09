'use client'

import { useEffect, useRef, useCallback, useReducer } from 'react'
import { Button } from '../ui/button'
import Icon from '../icon'
import { Direction } from './types'
import { BOARD_WIDTH, BOARD_HEIGHT, GAME_SPEED, TOTAL_FOOD } from './constants'
import { GameBoard } from './game-board'
const oppositeDirections = {
  [Direction.UP]: Direction.DOWN,
  [Direction.DOWN]: Direction.UP,
  [Direction.LEFT]: Direction.RIGHT,
  [Direction.RIGHT]: Direction.LEFT
}

// Create the initial snake in the L-inverted shape
// Starting from a position that will fit well on the board
const createInitialSnake = () => {
  const startX = 10
  const startY = 10
  const snake = []

  // First 8 segments going down
  for (let i = 0; i < 8; i++) {
    snake.push({ x: startX, y: startY + i })
  }

  // Next 6 segments going right
  for (let i = 1; i <= 6; i++) {
    snake.push({ x: startX + i, y: startY + 7 })
  }

  // Last 6 segments going down
  for (let i = 1; i <= 6; i++) {
    snake.push({ x: startX + 6, y: startY + 7 + i })
  }

  return snake
}

const initialSnake = createInitialSnake()

// Get the initial food position (3 blocks above the snake's head)
const getInitialFoodPosition = () => {
  // The snake's head is the first element in the initialSnake array
  const snakeHead = initialSnake[0]

  // Position the food 3 blocks above the snake's head
  return {
    x: snakeHead.x,
    y: snakeHead.y - 3
  }
}

// Generate random food position - now with border padding
const getRandomFood = (snake: Array<{ x: number; y: number }>) => {
  let newFood: { x: number; y: number }
  do {
    // Generate position with 1 block padding from borders
    newFood = {
      x: Math.floor(Math.random() * (BOARD_WIDTH - 2)) + 1, // Range: 1 to BOARD_WIDTH-2
      y: Math.floor(Math.random() * (BOARD_HEIGHT - 2)) + 1 // Range: 1 to BOARD_HEIGHT-2
    }
  } while (
    snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
  )
  return newFood
}

// Define game state type
type GameState = {
  snake: Array<{ x: number; y: number }>
  food: { x: number; y: number }
  direction: Direction
  foodCollected: number
  gameStarted: boolean
  gameOver: boolean
  gameWon: boolean
}

// Define action types
type GameAction =
  | { type: 'START_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'SET_DIRECTION'; payload: Direction }
  | { type: 'MOVE_SNAKE' }
  | { type: 'EAT_FOOD' }
  | { type: 'GAME_OVER' }
  | { type: 'GAME_WON' }

// Initial state
const initialState: GameState = {
  snake: initialSnake,
  food: getInitialFoodPosition(),
  direction: Direction.UP,
  foodCollected: 0,
  gameStarted: false,
  gameOver: false,
  gameWon: false
}

// Game reducer
function gameReducer(state: GameState, action: GameAction): GameState {
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

      // Move head based on direction
      switch (state.direction) {
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

      // Check for wall collision
      if (
        head.x < 0 ||
        head.x >= BOARD_WIDTH ||
        head.y < 0 ||
        head.y >= BOARD_HEIGHT
      ) {
        return { ...state, gameOver: true }
      }

      // Check for self collision using Map for efficiency
      const snakeMap = new Map()
      for (let i = 0; i < state.snake.length - 1; i++) {
        const segment = state.snake[i]
        snakeMap.set(`${segment.x},${segment.y}`, true)
      }

      if (snakeMap.has(`${head.x},${head.y}`)) {
        return { ...state, gameOver: true }
      }

      // Check for food collision
      if (head.x === state.food.x && head.y === state.food.y) {
        // Food eaten - don't remove tail
        const newSnake = [head, ...state.snake]
        const newFoodCollected = state.foodCollected + 1

        // Check for win condition
        if (newFoodCollected >= TOTAL_FOOD) {
          return {
            ...state,
            snake: newSnake,
            foodCollected: newFoodCollected,
            gameWon: true
          }
        }

        // Generate new food position
        const newFood = getRandomFood(newSnake)

        return {
          ...state,
          snake: newSnake,
          food: newFood,
          foodCollected: newFoodCollected
        }
      }

      // Regular move - remove tail
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

export default function SnakeGame() {
  const [gameState, dispatch] = useReducer(gameReducer, initialState)
  const { gameStarted, gameOver, gameWon } = gameState

  const { foodCollected, ...gameStateForBoard } = gameState

  // Refs that don't trigger re-renders
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)
  const directionQueueRef = useRef<Direction[]>([])
  const lastProcessedDirectionRef = useRef<Direction>(Direction.UP)

  // Process direction queue and move snake
  const moveSnake = useCallback(() => {
    // Process the next direction from the queue
    if (directionQueueRef.current.length > 0) {
      const newDirection = directionQueueRef.current.shift()
      if (
        newDirection &&
        oppositeDirections[newDirection] !== lastProcessedDirectionRef.current
      ) {
        dispatch({ type: 'SET_DIRECTION', payload: newDirection })
        lastProcessedDirectionRef.current = newDirection
      }
    }

    // Move the snake
    dispatch({ type: 'MOVE_SNAKE' })
  }, [])

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return

    gameLoopRef.current = setInterval(moveSnake, GAME_SPEED)
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [gameStarted, gameOver, gameWon, moveSnake])

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) return

      let newDirection: Direction | null = null

      switch (e.key) {
        case 'ArrowUp':
          newDirection = Direction.UP
          break
        case 'ArrowDown':
          newDirection = Direction.DOWN
          break
        case 'ArrowLeft':
          newDirection = Direction.LEFT
          break
        case 'ArrowRight':
          newDirection = Direction.RIGHT
          break
        default:
          return // Ignore other keys
      }

      // Only add to queue if it's not the opposite of the last processed direction
      if (
        newDirection &&
        oppositeDirections[newDirection] !== lastProcessedDirectionRef.current
      ) {
        // Limit queue size to prevent excessive buffering
        if (directionQueueRef.current.length < 3) {
          directionQueueRef.current.push(newDirection)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gameStarted])

  // Reset game e inicia imediatamente
  const resetAndStartGame = () => {
    lastProcessedDirectionRef.current = Direction.UP
    directionQueueRef.current = []
    dispatch({ type: 'START_GAME' })
  }

  // Reset game (apenas para o botão "skip")
  const resetGame = () => {
    directionQueueRef.current = []
    dispatch({ type: 'RESET_GAME' })
  }

  return (
    <div className="relative">
      {/* Blur SVG posicionado parcialmente dentro e fora do container */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-25%',
          left: '-10%',
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.2,
          filter: 'blur(174px)',
          animation:
            'pulse-blur 7s ease-in-out infinite, float-blur 15s ease-in-out infinite'
        }}
      >
        <img src="/blur-1.svg" alt="" className="w-full h-full" />
      </div>
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-23%',
          right: '-41%',
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.2,
          filter: 'blur(174px)',
          animation:
            'pulse-blur 9s ease-in-out infinite alternate, float-blur-reverse 18s ease-in-out infinite'
        }}
      >
        <img src="/blur-2.svg" alt="" className="w-full h-full" />
      </div>

      <div className="game-container px-7 py-9 relative z-10">
        <div className="flex gap-4">
          <GameBoard
            {...gameStateForBoard}
            resetAndStartGame={resetAndStartGame}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="rounded-lg bg-secondary-foreground/19 px-3 py-4">
                <p className="text-sm" style={{ fontWeight: 450 }}>
                  // use keyboard
                </p>
                <p className="text-sm" style={{ fontWeight: 450 }}>
                  // arrows to play
                </p>

                <div className="mt-4 grid grid-cols-3 gap-1">
                  <div></div>
                  <div className="arrow-key">
                    <Icon icon="arrow" />
                  </div>
                  <div></div>
                  <div className="arrow-key">
                    <Icon icon="arrow" className="rotate-270" />
                  </div>
                  <div className="arrow-key">
                    <Icon icon="arrow" className="rotate-180" />
                  </div>
                  <div className="arrow-key">
                    <Icon icon="arrow" className="rotate-90" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm" style={{ fontWeight: 450 }}>
                  // food left
                </p>
                <div className="inline-grid grid-cols-5 gap-2 mt-2">
                  {Array.from({ length: TOTAL_FOOD }).map((_, i) => (
                    <div
                      key={i}
                      className={`p-[3px] bg-chart-2/10 rounded-full ${i >= foodCollected && 'opacity-30'}`}
                    >
                      <div className="p-[3.35px] bg-chart-2/20 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-chart-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={resetGame} variant="outline" className="self-end">
              skip
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
