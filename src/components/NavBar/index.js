import React, { Component } from 'react';
import { connect } from "react-redux";
import queryString from "query-string";

import { searchProducts, logout, getShippingRegion } from "../../actions";
import * as actions from "../../actions"

import NavBarLight from "./NavBarLight";
import NavBarDark from "./NavBarDark";

import './index.css';
import './index.md.css';
import './index.sm.css';


/**
 * NavBar
 * @name NavBar
 * @class
 *
 * @extends {Component}
 */
class NavBar extends Component {

  state = {
    search: "",
  }

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    const { getShippingRegion, location } = this.props;
    const { search } = location;
    getShippingRegion();
    const q = queryString.parse(search);
    if(search){
      this.setState({ search: q.query_string || "" });
    }
  }

  /**
   * calculate the number of item in the cart
   *
   * @name cartQuantity
   * @function
   * @returns {number}
   */
  cartQuantity() {
    const { data } = this.props.cart;
    return data.length > 9 ? "9+" : data.length;
  }

  /**
   * update state with search input data
   *
   * @name onChange
   * @function
   * @param {object} e
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * makes request to search product endpoint
   *
   * @name onSubmit
   * @function
   * @param {object} e
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    const { isLoading } = this.props.allProduct;
    if(!isLoading && search) {
      const query = `?query_string=${search}`;
      this.props.searchProducts(query);
      this.props.history.push({
        pathname: "/search",
        search: query,
      });
    }
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const cartQuantity = this.cartQuantity();
    return (
      <header className="navbar">
        <NavBarLight
          openLoginModal={this.props.openLoginModal} 
          openRegisterModal={this.props.openRegisterModal} 
          openViewCartModal={this.props.openViewCartModal} 
          user={this.props.user}
          cartQuantity={cartQuantity}
          cart={this.props.cart}
          logout={this.props.logout}
        />
        <NavBarDark
          openViewCartModal={this.props.openViewCartModal} 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          search={this.state.search}
          user={this.props.user}
          cartQuantity={cartQuantity}
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProduct: state.AllProduct,
    user: state.User,
    cart: state.Cart,
  }
}

export default connect(mapStateToProps, 
  {
    openViewCartModal: () => {
      return actions.createAction(actions.SHOW_VIEW_CART_MODAL,);
    },
    openLoginModal: () => {
      return actions.createAction(actions.SHOW_LOGIN_MODAL,);
    },
    openRegisterModal: () => {
      return actions.createAction(actions.SHOW_REGISTER_MODAL,);
    },
    searchProducts,
    getShippingRegion,
    logout,
  }
)(NavBar);
