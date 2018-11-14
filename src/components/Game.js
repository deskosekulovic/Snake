import React, { Component } from 'react';
import { moveResolver } from '../utilities/helper';

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
  }

  handleKeys(e) {
    console.log(e.keyCode);
    if (e.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
    if (e.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
    if (e.keyCode === 40 && this.direction !== 'up') this.direction = 'down';

    if (e.keyCode === 13) this.play();
  }

  play() {
    const { snake } = this.state;
    const snakeHead = snake[0];
    const nextPosition = moveResolver(snakeHead.x, snakeHead.y, this.direction);
    console.log(nextPosition);
    this.clear();
    this.drawSnake(nextPosition);
    this.moveSnake(nextPosition);
    setTimeout(this.play, 1000);
  }
  moveSnake(nextPosition) {
    const { snake } = this.state;
    this.setState({
      snake: [nextPosition, ...snake.slice(0, snake.length - 1)]
    });
  }

  drawSnake(nextPosition) {
    let ctx = this.myRef.current.getContext('2d');
    const { snake } = this.state;
    let newSnake = [nextPosition, ...snake.slice(0, snake.length - 1)];
    newSnake.map(cell => {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    });
  }
  clear() {
    let ctx = this.myRef.current.getContext('2d');
    ctx.clearRect(
      0,
      0,
      this.state.width * cellSize,
      this.state.height * cellSize
    );
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
