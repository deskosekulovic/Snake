const cellSize = '20';

const drawSnake = (ctx, newPosition, oldPosition) => {
  let snake = [newPosition, ...oldPosition.slice(0, oldPosition.length - 1)];
  snake.map(cell => {
    ctx.fillStyle = 'white';
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  });
};

const drawFood = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
};

const clear = (ctx, width, height) => {
  ctx.clearRect(0, 0, width * cellSize, height * cellSize);
};

export { drawSnake, drawFood, clear };
