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
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
    let ctx = this.myRef.current.getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(30, 30, 20, 20);
  }

  handleKeys(e) {
    console.log(e.keyCode);
    if (e.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
    if (e.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
    if (e.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
    if (e.keyCode === 40 && this.direction !== 'up') this.direction = 'down';
  }

  render() {
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
