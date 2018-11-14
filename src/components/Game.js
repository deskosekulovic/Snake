import React, { Component } from 'react';
import {
  moveResolver,
  checkCollision,
  getRandomNumber
} from '../utilities/helper';
import { drawSnake, drawFood, drawResult, clear } from '../utilities/draw';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 40,
      height: 40,
      snake: [{ x: 0, y: 0 }],
      food: {
        x: Math.floor(Math.random() * 40),
        y: Math.floor(Math.random() * 40),
        color: 'green'
      },
      score: 0,
      walls: true,
      steps: [],
      speed: 100
    };
    this.myRef = React.createRef();
    this.direction = 'right';
    this.play = this.play.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.startReplay = this.startReplay.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
    this.ctx = this.myRef.current.getContext('2d');
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  handleKeys(e) {
    if (e.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
    if (e.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
    if (e.keyCode === 40 && this.direction !== 'up') this.direction = 'down';

    if (e.keyCode === 13) this.play();
    if (e.keyCode === 82) this.startReplay();
  }

  play() {
    const { snake, width, height, food, walls, speed } = this.state;
    const snakeHead = snake[0];
    const nextPosition = moveResolver(
      snakeHead.x,
      snakeHead.y,
      this.direction,
      walls,
      width
    );

    if (checkCollision(snakeHead, snake, width, height, walls)) {
      this.gameOver();
      return;
    } else {
      clear(this.ctx, width, height);
      drawFood(this.ctx, food.x, food.y, food.color);
      drawSnake(this.ctx, nextPosition, snake);
      this.moveSnake(nextPosition);
      this.timeout = setTimeout(this.play, speed);
    }
  }
  moveSnake(nextPosition) {
    const { snake, food, score, speed } = this.state;
    // checking if its going to eat food
    if (nextPosition.x === food.x && nextPosition.y === food.y) {
      clearTimeout(this.timeout);
      let addPoints = food.color === 'blue' ? 2 : 1;
      this.setState({
        snake: [nextPosition, ...snake],
        score: score + addPoints,
        steps: [
          ...this.state.steps,
          {
            snake: [...this.state.snake],
            food: { ...this.state.food },
            score: this.state.score,
            speed
          }
        ]
      });
      this.spawnFood();
    } else {
      this.setState({
        snake: [nextPosition, ...snake.slice(0, snake.length - 1)],
        steps: [
          ...this.state.steps,
          {
            snake: [...this.state.snake],
            food: { ...this.state.food },
            score: this.state.score,
            speed
          }
        ]
      });
    }
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
    let randomNumber = getRandomNumber(10000, 30000);
    this.timeout = setTimeout(() => {
      const foodX = Math.floor(Math.random() * 40);
      const foodY = Math.floor(Math.random() * 40);
      drawFood(this.ctx, foodX, foodY, 'blue');
      this.setState({
        food: {
          x: foodX,
          y: foodY,
          color: 'blue'
        }
      });
    }, randomNumber);
  }
  startReplay() {
    // this.blockKeys = true;
    const { steps } = this.state;
    if (steps.length > 0) {
      this.replay = true;
      let i = 0;
      this.interval = setInterval(() => {
        if (i == steps.length) {
          this.gameOver();
        } else {
          this.setState({
            snake: [...this.state.steps[i].snake],
            food: { ...this.state.steps[i].food },
            speed: this.state.steps[i].speed,
            score: this.state.steps[i].score
          });
          let { food } = this.state.steps[i];
          clear(this.ctx, 800, 800);
          drawFood(this.ctx, food.x, food.y, food.color);
          drawSnake(this.ctx, null, this.state.steps[i].snake, true);
        }
        i++;
      }, this.state.steps[i].speed);
    }
  }
  gameOver() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    drawResult(this.ctx, 40, this.state.score);
  }

  render() {
    const { score } = this.state;
    console.log(this.state);
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
