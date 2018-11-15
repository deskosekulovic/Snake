import styled from 'styled-components';

export default styled.label`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0px;
    left: 40px;
    height: 25px;
    width: 25px;
    background-color: #ddd;
  }

  input:checked ~ .checkmark {
    background-color: ${props => props.theme.formElementBackground};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
