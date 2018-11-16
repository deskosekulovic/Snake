const drawSnake = (ctx, snake, cellSize) => {
  snake.map(cell => {
    ctx.fillStyle = 'white';
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  });
};

const drawFood = (ctx, x, y, color, cellSize) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
};

const drawResult = (ctx, size, score, cellSize) => {
  ctx.font = `${(size * cellSize) / 10}px Arial`;
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText('Game over!', (size * cellSize) / 2, (size * cellSize) / 2.5);
  ctx.fillText(
    `Result: ${score}`,
    (size * cellSize) / 2,
    (size * cellSize) / 2
  );
};

const clear = (ctx, width, height, cellSize) => {
  ctx.clearRect(0, 0, width * cellSize, height * cellSize);
};

export { drawSnake, drawFood, drawResult, clear };
