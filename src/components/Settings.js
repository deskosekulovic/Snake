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
            <label>
              <Slider type="range" min="10" max="100" step="10" name="speed" />
            </label>
            <h3>Speed: </h3>
          </Block3>
        </Form1>
        <hr />
        <Form2>
          <h2>Adjust controls</h2>
          <Block1>
            {['left', 'right', 'up', 'down'].map(el => (
              <label key={el}>
                <h3>{el}</h3>
                <input type="text" name={el} value="" />
              </label>
            ))}
          </Block1>
          <Block2>
            {['start', 'replay'].map(el => (
              <label key={el}>
                <h3>{el}</h3>
                <input type="text" name={el} value="" />
              </label>
            ))}
          </Block2>
        </Form2>
      </StyledSettings>
    );
  }
}

export default Settings;
