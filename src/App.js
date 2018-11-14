import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './styles/';
import StyledApp from './styles/StyledApp';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <GlobalStyle />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
