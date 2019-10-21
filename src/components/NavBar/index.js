import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import PropTypes from "prop-types";

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
export class NavBar extends Component {

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
    return data.length > 9 ? "9+" : data.length.toString();
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
   * clears the input field
   *
   * @name clearSearchField
   * @function
   * @param {object} data
   */
  clearSearchField = (data) => {
    this.setState(data);
    this.props.history.push({
      pathname: "/",
      search: "",
    });
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
    const { search: propsSearch } = this.props.location;
    const { isLoading } = this.props.allProduct;
    if(!isLoading && search) {
      const queryString = `query_string=${search}`;
      const query = propsSearch ? `${propsSearch}&${queryString}` : `?${queryString}`;
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
          openViewOrderModal={this.props.openViewOrderModal} 
          user={this.props.user}
          cartQuantity={cartQuantity}
          cart={this.props.cart}
          logout={this.props.logout}
        />
        <NavBarDark
          openViewCartModal={this.props.openViewCartModal} 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          clearSearchField={this.clearSearchField}
          search={this.state.search}
          user={this.props.user}
          cartQuantity={cartQuantity}
        />
      </header>
    );
  }
}

NavBar.propTypes = {
  allProduct: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  openViewCartModal: PropTypes.func.isRequired,
  openViewOrderModal: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  openRegisterModal: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired,
  getShippingRegion: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
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
    openViewOrderModal: () => {
      return actions.createAction(actions.SHOW_VIEW_ORDER_MODAL);
    },
    searchProducts,
    getShippingRegion,
    logout,
  }
)(NavBar);
