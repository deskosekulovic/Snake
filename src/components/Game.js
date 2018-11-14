import React, { Component } from 'react';

const cellSize = 20;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 800,
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
    this.play();
  }

  handleKeys(e) {
    console.log(e.keyCode);
    if (e.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
    if (e.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
    if (e.keyCode === 40 && this.direction !== 'up') this.direction = 'down';
  }

  play() {
    const { snake } = this.state;
    console.log(this.direction);
    switch (this.direction) {
    case 'left':
      this.setState({
        snake: snake.map(cell => ({ x: cell.x - cellSize, y: cell.y }))
      });
      break;
    case 'up':
      this.setState({
        snake: snake.map(cell => ({ x: cell.x, y: cell.y - cellSize }))
      });
      break;
    case 'right':
      this.setState({
        snake: snake.map(cell => ({ x: cell.x + cellSize, y: cell.y }))
      });
      break;
    case 'down':
      this.setState({
        snake: snake.map(cell => ({ x: cell.x, y: cell.y + cellSize }))
      });
      break;
    }
    this.clear();
    this.drawSnake();

    setTimeout(this.play, 500);
  }

  drawSnake() {
    let ctx = this.myRef.current.getContext('2d');
    this.state.snake.map(cell => {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(cell.x, cell.y, cellSize, cellSize);
    });
  }
  drawFood(x, y) {
    let ctx = this.myRef.current.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, cellSize, cellSize);
  }
  clear() {
    let ctx = this.myRef.current.getContext('2d');
    ctx.clearRect(0, 0, this.state.width, this.state.height);
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
