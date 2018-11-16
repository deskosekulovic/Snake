export const moveResolver = (x, y, direction, walls, size) => {
  if (!walls) {
    if (x === size - 1 && direction === 'right') {
      x = -1;
    }
    if (x === 0 && direction === 'left') {
      x = size;
    }
    if (y === 0 && direction === 'up') {
      y = size;
    }
    if (y === size - 1 && direction === 'down') {
      y = -1;
    }
  }
  switch (direction) {
  case 'left':
    return {
      x: x - 1,
      y
    };

  case 'right':
    return {
      x: x + 1,
      y
    };

  case 'up':
    return { x, y: y - 1 };

  case 'down':
    return { x, y: y + 1 };
  }
};

export const checkCollision = (nextPosition, snake, width, height, walls) => {
  let IsOutOfArea = false;
  let hitBody = false;
  //checking if it hits walls, and are there walls
  if (
    (nextPosition.x >= width ||
      nextPosition.y >= height ||
      nextPosition.x < 0 ||
      nextPosition.y < 0) &&
    walls
  ) {
    IsOutOfArea = true;
  } else if (
    //checking if it ate it self
    snake.length > 4 &&
    snake.slice(4, snake.length).find(cell => {
      if (cell.x === snake[0].x && cell.y === snake[0].y) {
        return true;
      }
    })
  ) {
    hitBody = true;
  }
  return IsOutOfArea || hitBody;
};

export function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFoodCoordinates(size, color) {
  return {
    x: Math.floor(Math.random() * size),
    y: Math.floor(Math.random() * size),
    color
  };
}

export function getSnakeCoordinates(size) {
  return {
    x: Math.floor(size / 2),
    y: Math.floor(size / 2)
  };
}
