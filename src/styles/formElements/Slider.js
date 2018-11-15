import styled from 'styled-components';

export default styled.input`
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 30px;
  width: 200px;
  cursor: pointer;

  ::-webkit-slider-runnable-track {
    background: #ddd;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 30px;
    background: #fff;
    box-shadow: -100vw 0 0 100vw ${props => props.theme.formElementBackground};
    border: 2px solid #999;
  }
`;
