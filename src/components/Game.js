import React, { Component } from 'react';
import { moveResolver } from '../utilities/helper';
import { drawSnake, drawFood, clear } from '../utilities/draw';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 40,
      height: 40,
      snake: [{ x: -1, y: 0 }],
      food: {
        x: Math.floor(Math.random() * 40),
        y: Math.floor(Math.random() * 40),
        color: 'green'
      },
      score: 0
    };
    this.myRef = React.createRef();
    this.direction = 'right';
    this.play = this.play.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
    this.ctx = this.myRef.current.getContext('2d');
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
    clearTimeout(this.timeout);
  }

  handleKeys(e) {
    if (e.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
    if (e.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
    if (e.keyCode === 40 && this.direction !== 'up') this.direction = 'down';

    if (e.keyCode === 13) this.play();
  }

  play() {
    const { snake, width, height, food, walls } = this.state;
    const snakeHead = snake[0];
    const nextPosition = moveResolver(snakeHead.x, snakeHead.y, this.direction);

    if (checkCollision(snakeHead, snake, width, height, walls)) {
      this.gameOver();
      return;
    } else {
      clear(this.ctx, width, height);
      drawFood(this.ctx, food.x, food.y, food.color);
      drawSnake(this.ctx, nextPosition, snake);
      this.moveSnake(nextPosition);
      this.timeout = setTimeout(this.play, 1000);
    }
  }
  moveSnake(nextPosition) {
    const { snake, food } = this.state;
    // checking if its going to eat food
    if (nextPosition.x === food.x && nextPosition.y === food.y) {
      this.ateFood(food.color);
      this.setState({
        snake: [nextPosition, ...snake]
      });
    } else {
      this.setState({
        snake: [nextPosition, ...snake.slice(0, snake.length - 1)]
      });
    }
  }
  ateFood() {
    const { score } = this.state;
    this.setState({
      score: score + 1
    });
    this.spawnFood();
  }
  spawnFood() {
    const foodX = Math.floor(Math.random() * 40);
    const foodY = Math.floor(Math.random() * 40);
    drawFood(this.ctx, foodX, foodY, 'green');
    this.setState({
      food: {
        x: foodX,
        y: foodY,
        color: 'green'
      }
    });
  }
  gameOver() {
    clearTimeout(this.timeout);
    drawResult(this.ctx, 40, this.state.score);
  }

  render() {
    const { score } = this.state;
    return (
      <div>
        <div style={{ padding: '10px', fontSize: '18px' }}>
          <h3>
            Result: <span>{score}</span>
          </h3>
        </div>
        <canvas
          ref={this.myRef}
          width="800"
          height="800"
          style={{ border: '1px solid #000000', backgroundColor: 'black' }}
        />
      </div>
    );
  }
}

export default Game;
