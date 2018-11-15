import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  moveResolver,
  checkCollision,
  getRandomNumber
} from '../utilities/helper';
import { drawSnake, drawFood, drawResult, clear } from '../utilities/draw';

const cellSize = 20;
class Game extends Component {
  constructor(props) {
    super(props);
    this.initData = {
      width: 40,
      height: 40,
      snake: [
        {
          x: Math.floor(this.props.size / 2),
          y: Math.floor(this.props.size / 2)
        }
      ],
      food: {
        x: Math.floor(Math.random() * this.props.size),
        y: Math.floor(Math.random() * this.props.size),
        color: 'green'
      },
      score: 0,
      walls: true,
      steps: [],
      speed: 50
    };
    this.state = {
      ...this.initData
    };
    this.myRef = React.createRef();
    this.direction = 'right';
    this.blockKeys = false;
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
    const { left, right, up, down, start, replay } = this.props;
    if (!this.blockKeys) {
      if (e.keyCode === start) {
        this.resetGame();
        this.play();
      }
      if (e.keyCode === replay) this.startReplay();
    }
    if (e.keyCode === left && this.direction !== 'right')
      this.direction = 'left';
    if (e.keyCode === up && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === right && this.direction !== 'left')
      this.direction = 'right';
    if (e.keyCode === down && this.direction !== 'up') this.direction = 'down';
  }

  play() {
    this.blockKeys = true;
    const { snake } = this.state;
    const { size, walls, speed } = this.props;
    const snakeHead = snake[0];
    const nextPosition = moveResolver(
      snakeHead.x,
      snakeHead.y,
      this.direction,
      walls,
      size
    );

    if (checkCollision(snakeHead, snake, size, size, walls)) {
      this.gameOver();
    } else {
      this.moveSnake(nextPosition);
      this.timeout = setTimeout(this.play, speed);
    }
  }
  moveSnake(nextPosition) {
    const { snake, food, score } = this.state;
    const { size, speed } = this.props;
    // checking if its going to eat food
    let addPoints = 0;
    let newPosition;

    if (nextPosition.x === food.x && nextPosition.y === food.y) {
      addPoints = food.color === 'blue' ? 2 : 1;
      newPosition = [nextPosition, ...snake];
      this.spawnFood();
    } else {
      newPosition = [nextPosition, ...snake.slice(0, snake.length - 1)];
    }
    this.setState({
      snake: newPosition,
      score: score + addPoints,
      steps: [
        ...this.state.steps,
        {
          snake: newPosition,
          food: { ...this.state.food },
          score: this.state.score,
          speed
        }
      ]
    });
    clear(this.ctx, size, size);
    drawFood(this.ctx, food.x, food.y, food.color);
    drawSnake(this.ctx, newPosition);
  }
  spawnFood() {
    const { size } = this.props;
    /**optional*************/
    let number = getRandomNumber(1, 100);
    let color = number < 10 ? 'blue' : 'green';
    /************************/
    const foodX = Math.floor(Math.random() * size);
    const foodY = Math.floor(Math.random() * size);
    this.setState({
      food: {
        x: foodX,
        y: foodY,
        color
      }
    });
  }
  startReplay() {
    this.blockKeys = true;
    const { steps } = this.state;
    if (steps.length > 0) {
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
          clear(this.ctx, this.props.size, this.props.size);
          drawFood(this.ctx, food.x, food.y, food.color);
          drawSnake(this.ctx, this.state.steps[i].snake);
        }
        i++;
      }, this.state.steps[i].speed);
    }
  }
  gameOver() {
    this.blockKeys = false;
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    drawResult(this.ctx, this.props.size, this.state.score);
  }
  resetGame() {
    clear(this.ctx, this.props.size, this.props.size);
    this.replay = false;
    this.setState({
      ...this.initData
    });
  }

  render() {
    const { score } = this.state;
    const { size } = this.props;
    return (
      <div>
        <div style={{ padding: '10px', fontSize: '18px' }}>
          <h3>
            Result: <span>{score}</span>
          </h3>
        </div>
        <canvas
          ref={this.myRef}
          width={size * cellSize}
          height={size * cellSize}
          style={{ border: '1px solid #000000', backgroundColor: 'black' }}
        />
      </div>
    );
  }
}

Game.propTypes = {
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  up: PropTypes.number.isRequired,
  down: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  replay: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  walls: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};

export default Game;
