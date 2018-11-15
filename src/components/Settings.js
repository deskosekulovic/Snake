import React, { Component } from 'react';
import StyledSettings, {
  Form1,
  Form2,
  Block1,
  Block2,
  Block3
} from '../styles/StyledSettings';
import Select from '../styles/formElements/Select';
import Checkbox from '../styles/formElements/Checkbox';
import Slider from '../styles/formElements/Slider';

class Settings extends Component {
  render() {
    return (
      <StyledSettings>
        <h1>Welcome to settings!</h1>
        <hr />
        <Form1>
          <Block1>
            <label>
              <h3>Pick size</h3>
              <Select>
                <select value="" name="size">
                  <option value="40">Big</option>
                  <option value="30">Medium</option>
                  <option value="20">Small</option>
                </select>
              </Select>
            </label>
            <label>
              <Checkbox>
                <h3>Walls</h3>
                <input type="checkbox" name="walls" checked="false" />
                <span className="checkmark" />
              </Checkbox>
            </label>
          </Block1>
          <Block3>
            <h3>Speed: </h3>
            <Slider type="range" min="10" max="100" step="10" name="speed" />
          </Block3>
        </Form1>
        <hr />
        <Form2>
          <h2>Adjust controls</h2>
          <Block1>
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
          </Block1>
          <Block2>
            <label className="container">
              <h3>Start</h3>
              <input type="text" name="start" value="" />
            </label>
            <label className="container">
              <h3>Replay</h3>
              <input type="text" name="replay" value="" />
            </label>
          </Block2>
        </Form2>
      </StyledSettings>
    );
  }
}

export default Settings;
