const createInitialSnake = () => {
  const startX = 10
  const startY = 10
  const snake = []

  for (let i = 0; i < 8; i++) {
    snake.push({ x: startX, y: startY + i })
  }

  for (let i = 1; i <= 6; i++) {
    snake.push({ x: startX + i, y: startY + 7 })
  }

  for (let i = 1; i <= 6; i++) {
    snake.push({ x: startX + 6, y: startY + 7 + i })
  }

  return snake
}

export const initialSnake = createInitialSnake()

export const getInitialFoodPosition = () => {
  const snakeHead = initialSnake[0]

  return {
    x: snakeHead.x,
    y: snakeHead.y - 3
  }
}