'use client'

import { useSnakeGame } from './hooks/useSnakeGame'
import { GameBoard } from './game-board'
import { GameControls } from './game-controls'
import Icon from '@/components/ui/icon'

export default function SnakeGame() {
  const { gameState, resetAndStartGame, resetGame } = useSnakeGame()

  const { foodCollected } = gameState

  const { foodCollected: _, ...gameStateForBoard } = gameState

  return (
    <section className="relative">
      <div className="blur-effect-1">
        <img src="/blur-1.svg" alt="" className="w-full h-full" />
      </div>

      <div className="blur-effect-2">
        <img src="/blur-2.svg" alt="" className="w-full h-full" />
      </div>

      <div
        className="test border border-ring backdrop-blur-3xl rounded-lg px-8 py-9 relative z-10"
        style={{
          backgroundImage:
            'linear-gradient(135deg,rgba(23, 85, 83, 0.7) 0%,rgba(67, 217, 173, 0.09) 100%)',
          boxShadow: 'inset 0 2px 0px 0 rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="corner-screw gradient-green top-3 left-3">
          <Icon icon="cross" currentColor="#103a37" />
        </div>
        <div className="corner-screw gradient-green top-3 right-3">
          <Icon icon="cross" currentColor="#0d312f" />
        </div>
        <div className="corner-screw gradient-green bottom-3 left-3">
          <Icon icon="cross" currentColor="#0a2928" />
        </div>
        <div className="corner-screw gradient-purple bottom-3 right-3">
          <Icon icon="cross" currentColor="#11273f" />
        </div>

        <div className="flex gap-6">
          <GameBoard
            {...gameStateForBoard}
            resetAndStartGame={resetAndStartGame}
          />
          <GameControls foodCollected={foodCollected} onSkip={resetGame} />
        </div>
      </div>
    </section>
  )
}
