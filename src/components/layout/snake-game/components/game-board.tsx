import Snake from './snake'

import { BOARD_WIDTH, BOARD_HEIGHT, GRID_SIZE } from '../constants'
import { FoodItem } from './food-item'
import { Overlay } from './overlay'
import { GameBoardProps } from '../types'

export function GameBoard({
  snake,
  food,
  direction,
  gameOver,
  gameWon,
  gameStarted,
  resetAndStartGame,
  ...props
}: GameBoardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-primary-400/84"
      style={{
        width: `${BOARD_WIDTH * GRID_SIZE}px`,
        height: `${BOARD_HEIGHT * GRID_SIZE}px`
      }}
      {...props}
    >
      <Snake
        snake={snake}
        direction={direction}
        gridSize={GRID_SIZE}
        gameOver={gameOver}
      />

      {!gameWon && <FoodItem x={food.x} y={food.y} gameOver={gameOver} />}

      {gameOver && <Overlay type="gameOver" onAction={resetAndStartGame} />}
      {gameWon && <Overlay type="gameWon" onAction={resetAndStartGame} />}
      {!gameStarted && !gameOver && !gameWon && (
        <Overlay type="start" onAction={resetAndStartGame} />
      )}
    </div>
  )
}
