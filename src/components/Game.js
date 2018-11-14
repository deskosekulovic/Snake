import React, { Component } from 'react';
import { moveResolver } from '../utilities/helper';
import { drawSnake, drawFood, clear } from '../utilities/draw';

const cellSize = 20;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 40,
      height: 40,
      snake: [{ x: 0, y: 0 }],
      food: { x: -cellSize, y: -cellSize }
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
    const { snake, width, height, food } = this.state;
    const snakeHead = snake[0];
    const nextPosition = moveResolver(snakeHead.x, snakeHead.y, this.direction);
    let newSnake = [nextPosition, ...snake.slice(0, snake.length - 1)];
    clear(this.ctx, width, height);
    drawFood(this.ctx, food.x, food.y, food.color);
    drawSnake(this.ctx, newSnake);
    this.moveSnake(newSnake);
    this.timeout = setTimeout(this.play, 1000);
  }
  moveSnake(newSnake) {
    this.setState({
      snake: newSnake
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div style={{ padding: '10px', fontSize: '18px' }}>
          <h3>
            Result: <span />
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
