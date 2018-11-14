import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
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
        </ul>
      </nav>
    );
  }
}

export default Navigation;
