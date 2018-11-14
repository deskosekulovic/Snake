import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavigation, { MainNav } from '../styles/StyledNavigation';

class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <MainNav>
          <li>
            <NavLink activeClassName="selected" exact to="/">
              Game
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/settings">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/toplist">
              Top List
            </NavLink>
          </li>
        </MainNav>
      </StyledNavigation>
    );
  }
}

export default Navigation;
