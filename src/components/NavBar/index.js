import React, { Component } from 'react';
import { connect } from "react-redux";
import queryString from "query-string";

import { searchProducts } from "../../actions";
import * as actions from "../../actions"

import NavBarLight from "./NavBarLight";
import NavBarDark from "./NavBarDark";

import './index.css';
import './index.md.css';
import './index.sm.css';


class NavBar extends Component {

  state = {
    search: "",
  }

  componentDidMount() {
    const { search } = this.props.location;
    const q = queryString.parse(search);
    if(search){
      this.setState({ search: q.query_string || "" });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

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


  render() {
    return (
      <header className="navbar">
        <NavBarLight
          openLoginModal={this.props.openLoginModal} 
          openRegisterModal={this.props.openRegisterModal} 
          openViewCartModal={this.props.openViewCartModal} 
        />
        <NavBarDark
          openViewCartModal={this.props.openViewCartModal} 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          search={this.state.search}
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProduct: state.AllProduct,
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
  }
)(NavBar);
