import { useEffect, useRef, useCallback, useReducer } from 'react'
import { Direction } from '../types'
import { GAME_SPEED, initialState } from '../constants'
import { useKeyboardControls } from './useKeyboardControls'
import { gameReducer } from '../gameReducer'

export function useSnakeGame() {
  const [gameState, dispatch] = useReducer(gameReducer, initialState)
  const { gameStarted, gameOver, gameWon } = gameState

  const keyboardControls = useKeyboardControls({
    enabled: gameStarted && !gameOver && !gameWon,
    initialDirection: Direction.UP
  })

  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const processGameTick = useCallback(() => {
    const newDirection = keyboardControls.getNextDirection()
    if (newDirection) {
      dispatch({ type: 'SET_DIRECTION', payload: newDirection })
    }

    dispatch({ type: 'MOVE_SNAKE' })
  }, [keyboardControls])

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return

    gameIntervalRef.current = setInterval(processGameTick, GAME_SPEED)
    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current)
    }
  }, [gameStarted, gameOver, gameWon, processGameTick])

  const resetAndStartGame = () => {
    keyboardControls.reset(Direction.UP)
    dispatch({ type: 'START_GAME' })
  }

  const resetGame = () => {
    keyboardControls.reset()
    dispatch({ type: 'RESET_GAME' })
  }

  return {
    gameState,
    resetAndStartGame,
    resetGame
  }
}
