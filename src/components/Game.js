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
  }

  handleKeys(e) {
    console.log(e.keyCode);
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
          width="800px"
          height="800px"
          style={{ border: '1px solid #000000', backgroundColor: 'black' }}
        />
      </div>
    );
  }
}

export default Game;
