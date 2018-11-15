import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Game from './components/Game.js';
import Settings from './components/Settings';
import Toplist from './components/TopList';

import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './styles/';
import StyledApp from './styles/StyledApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '40',
      left: 37,
      right: 39,
      up: 38,
      down: 40,
      start: 13,
      replay: 82,
      speed: 50,
      walls: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { left, right, up, down, start, replay } = this.state;
    let permit = true;
    Object.keys(this.state).map(key => {
      if (this.state[key] === e.keyCode && key !== e.target.name) {
        permit = false;
        return permit;
      }
    });
    this.setState({
      [e.target.name]: permit ? e.keyCode : this.state[e.target.name]
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { speed, ...rest } = this.state;
    console.log(this.state);
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path="/" component={() => <Game />} />
            <Route
              exact
              path="/settings"
              component={() => (
                <Settings
                  handleChange={this.handleChange}
                  handleKeyDown={this.handleKeyDown}
                  speed={parseInt(speed, 10)}
                  {...rest}
                />
              )}
            />
            <Route exact to="/toplist" component={() => <Toplist />} />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
