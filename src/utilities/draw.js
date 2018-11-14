const cellSize = '20';

const drawSnake = (ctx, snake) => {
  snake.map(cell => {
    ctx.fillStyle = 'white';
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  });
};

const clear = (ctx, width, height) => {
  ctx.clearRect(0, 0, width * cellSize, height * cellSize);
};

export { drawSnake, clear };
