import React, { Component } from "react";

import { isLoggedIn } from "../utils/auth";


/**
 * HOC for protected components
 * @name ProtectedRoutes
 * @class
 *
 * @extends {Component}
 */
class ProtectedRoutes extends Component {

  /**
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    if(!isLoggedIn()) {
      this.props.history.push("/");
    }
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx} component
   */
  render() {
    const {component: Component, ...rest} = this.props;
    return (
      <Component {...rest} />
    )
  }
}
export default ProtectedRoutes;
