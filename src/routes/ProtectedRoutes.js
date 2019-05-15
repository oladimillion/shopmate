import React, { Component } from "react";

import { isLoggedIn } from "../utils/auth";


class ProtectedRoutes extends Component {

  componentDidMount() {
    if(!isLoggedIn()) {
      this.props.history.push("/");
    }
  }

  render() {
    const {component: Component, ...rest} = this.props;
    return (
      <Component {...rest} />
    )
  }
}
export default ProtectedRoutes;
