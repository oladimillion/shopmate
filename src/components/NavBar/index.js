import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from "../../actions"

import NavBarLight from "./NavBarLight";
import NavBarDark from "./NavBarDark";

import './index.css';
import './index.md.css';
import './index.sm.css';


class NavBar extends Component {
  render() {
    return (
      <header className="navbar">
        <NavBarLight
          OpenLoginModal={this.props.OpenLoginModal} 
          OpenRegisterModal={this.props.OpenRegisterModal} 
          OpenViewCartModal={this.props.OpenViewCartModal} 
        />
        <NavBarDark
          OpenViewCartModal={this.props.OpenViewCartModal} 
        />
       </header>
    );
  }
}

export default connect(null, 
  {
    OpenViewCartModal: () => {
      return actions.CreateAction(actions.SHOW_VIEW_CART_MODAL,);
    },
    OpenLoginModal: () => {
      return actions.CreateAction(actions.SHOW_LOGIN_MODAL,);
    },
    OpenRegisterModal: () => {
      return actions.CreateAction(actions.SHOW_REGISTER_MODAL,);
    },
  }
)(NavBar);
