import styled from 'styled-components';

export default styled.span`
  display: inline;
  vertical-align: middle;
  margin: 10px;

  select {
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.color};
    font-size: inherit;
    padding: 0.3em;
    padding-right: 2.5em;
    border: 0;
    margin: 0;
    border-radius: 3px;
    text-indent: 0.01px;
    text-overflow: '';
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;
