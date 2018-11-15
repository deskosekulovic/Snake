import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to settings!</h1>
        <hr />
        <form>
          <label>
            <h3>Pick size</h3>

            <select value="" name="size">
              <option value="40">Big</option>
              <option value="30">Medium</option>
              <option value="20">Small</option>
            </select>
          </label>

          <h3>Walls</h3>
          <input type="checkbox" name="walls" checked="false" />

          <h3>Speed: </h3>
          <input type="range" min="10" max="100" step="10" name="speed" />
        </form>
        <hr />
        <form>
          <h2>Adjust controls</h2>

          <label className="container">
            <h3>Left</h3>
            <input type="text" name="left" value="" />
          </label>
          <label className="container">
            <h3>Right</h3>
            <input type="text" name="right" value="" />
          </label>
          <label className="container">
            <h3>Up</h3>
            <input type="text" name="up" value="" />
          </label>
          <label className="container">
            <h3>Down</h3>
            <input type="text" name="down" value="" />
          </label>
          <label className="container">
            <h3>Start</h3>
            <input type="text" name="start" value="" />
          </label>
          <label className="container">
            <h3>Replay</h3>
            <input type="text" name="replay" value="" />
          </label>
        </form>
      </div>
    );
  }
}

export default Settings;
