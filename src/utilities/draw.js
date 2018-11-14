const cellSize = '20';

const drawSnake = (ctx, newPosition, oldPosition, replay) => {
  let snake = [newPosition, ...oldPosition.slice(0, oldPosition.length - 1)];
  if (!replay) {
    snake.map(cell => {
      ctx.fillStyle = 'white';
      ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    });
  } else {
    oldPosition.map(cell => {
      ctx.fillStyle = 'white';
      ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    });
  }
};

const drawFood = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
};

const drawResult = (ctx, size, score) => {
  ctx.font = `${size * 2}px Arial`;
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText('Game over!', size * 10, size * 8);
  ctx.fillText(`Result: ${score}`, size * 10, size * 10);
};

const clear = (ctx, width, height) => {
  ctx.clearRect(0, 0, width * cellSize, height * cellSize);
};

export { drawSnake, drawFood, drawResult, clear };
