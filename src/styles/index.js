import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: #F6F6F6;
  }
`;

export const theme = {
  fontSize: '18px',
  color: 'white',
  navigationBackground: '#023862'
};
