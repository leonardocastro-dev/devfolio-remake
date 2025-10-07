'use client'

import { useSnakeGame } from './hooks/useSnakeGame'
import { GameBoard } from './components/game-board'
import { GameControls } from './components/game-controls'
import Icon from '@/components/ui/icon'

export default function SnakeGame() {
  const { gameState, resetAndStartGame } = useSnakeGame()

  const { foodCollected, ...gameStateForBoard } = gameState

  return (
    <section className="relative hidden lg:block">
      <div className="blur-effect-1">
        <svg
          className="w-full h-full"
          width="516"
          height="436"
          viewBox="0 0 516 436"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M499.469 84.4819L515.984 303.861L481.759 408.726L311.295 435.598L239.003 274.57L123.588 313.343L10.0585 137.368L-5.74887e-05 3.74637L278.567 0.827732L349.099 111.846L499.469 84.4819Z"
            fill="#43D9AD"
          />
        </svg>
      </div>
      <div className="blur-effect-2">
        <svg
          className="w-full h-full"
          width="534"
          height="483"
          viewBox="0 0 534 483"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M303.946 482.519L90.0317 431.132L0.663448 366.469L27.2261 195.957L202.649 176.39L201.041 54.6473L403.309 0.391736L533.602 31.6911L451.165 297.797L323.892 330.987L303.946 482.519Z"
            fill="#4D5BCE"
          />
        </svg>
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
          <GameControls foodCollected={foodCollected} />
        </div>
      </div>
    </section>
  )
}
