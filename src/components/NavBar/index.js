import React, { Component } from 'react';

import NavBarLight from "./NavBarLight";
import NavBarDark from "./NavBarDark";

import './index.css';
import './index.md.css';
import './index.sm.css';


class NavBar extends Component {
  render() {
    return (
      <header className="navbar">
        <NavBarLight />
        <NavBarDark />
       </header>
    );
  }
}

export default NavBar;
