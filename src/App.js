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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path="/" component={() => <Game />} />
            <Route exact path="/settings" component={() => <Settings />} />
            <Route exact to="/toplist" component={() => <Toplist />} />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
