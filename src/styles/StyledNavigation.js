import styled from 'styled-components';

const StyledNavigation = styled.nav`
  grid-column: 1/-1;
  display: grid;
  background-color: ${props => props.theme.navigationBackground};
  font-size: ${props => props.theme.fontSize};
  font-weight: 500;
  width: 100%;
`;

export const MainNav = styled.ul`
  grid-column: 2/3;
  display: flex;
  list-style-type: none;
  justify-self: start;
  background-color: ${props => props.theme.navigationBackground};
  li {
    display: flex;
    a {
      width: 100%;
      color: ${props => props.theme.color};
      padding: 10px 10px 5px 10px;
      text-decoration: none;
      font-size: 1.2em;
      ::after {
        content: '';
        display: block;
        height: 2px;
        background: ${props => props.theme.color};
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
      }
    }
  }
  .selected {
    ::after {
      transform: scale(1, 1);
    }
  }
`;

export default StyledNavigation;
