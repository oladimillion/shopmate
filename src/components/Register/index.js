import React, { Component } from 'react';
import { connect } from "react-redux";

import MessageAlert from "../common/MessageAlert";
import ModalForm, { 
  ModalFormFooter,
  ModalFormInput,
  ModalFormButton,
} from "../common/ModalForm";
import Loader from "../common/Loader";
import * as actions from "../../actions";

import './index.css';

/**
 * Register
 * @name Register
 * @class
 *
 * @extends {Component}
 */
export class Register extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  requestSent = false;

  /**
   * componentDidUpdate
   *
   * @name componentDidUpdate
   * @function
   */
  componentDidUpdate() {
    const { 
      user, 
      closeRegisterModal,
      getCart,
      getCartAmount 
    } = this.props;
    const { customer_id } = user.customer
    if(!user.error && this.requestSent && !user.isLoading) {
      this.requestSent = false;
      this.setState({ 
        name: "", 
        email: "", 
        password: "",
        confirmPassword: "",
      });
      if(customer_id) {
        Promise.all([
          getCart({ cartId: customer_id }),
          getCartAmount({ cartId: customer_id }),
        ]);
      }
      closeRegisterModal();
    }
  }

  /**
   * update state from the form input fields
   *
   * @name onChange
   * @function
   * @param {object} e
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * makes request to the signup endpoint
   *
   * @name onSubmit
   * @function
   * @param {object} e
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { user, signup, setErrorMessage } = this.props;
    if(user.isLoading) return;
    const { password, confirmPassword } = this.state;
    if(password.trim() !== confirmPassword.trim()) {
      setErrorMessage({
        error: {
          message: "Passwords do not match",
        }
      })
      return;
    }
    this.requestSent = true;
    signup(this.state);
  }

  /**
   * opens login form modal
   *
   * @name openLoginModal
   * @function
   */
  openLoginModal = () => {
    const { openLoginModal, closeRegisterModal, setErrorMessage } = this.props;
    closeRegisterModal();
    openLoginModal();
    setErrorMessage(null);
  }

  /**
   * closes signup form modal
   *
   * @name closeRegisterModal
   * @function
   */
  closeRegisterModal = () => {
    const { closeRegisterModal, setErrorMessage } = this.props;
    closeRegisterModal();
    setErrorMessage(null);
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const { open, user } = this.props;
    const { error, message } = user;
    return (
      <ModalForm
        title="Sign Up"
        onSubmit={this.onSubmit}
        onCloseModal={this.closeRegisterModal}
        open={open}>
        {
          user.isLoading && (
            <Loader />
          )
        }
        <MessageAlert
          message={error ? error.error.message : message}
          hasError={!!error}
        />
        <ModalFormInput
          type="name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="Name"
        />
        <ModalFormInput
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="Email"
        />
        <ModalFormInput
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          placeholder="Password"
        />
        <ModalFormInput
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.onChange}
          placeholder="Re-type password"
        />
        <ModalFormButton name="Sign Up" />
        <ModalFormFooter>
          <p className="">Already a member?</p>
          <p
            onClick={this.openLoginModal}
            className="red__color cursor__pointer">
            Sign In
          </p>
        </ModalFormFooter>
      </ModalForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.RegisterModal.openModal,
    user: state.User,
  }
}

export default connect(
  mapStateToProps, 
  {
    closeRegisterModal: () => {
      return actions.createAction(actions.HIDE_REGISTER_MODAL);
    },
    openLoginModal: () => {
      return actions.createAction(actions.SHOW_LOGIN_MODAL);
    },
    setErrorMessage: (data) => {
      return actions.createAction(actions.USER_FAILURE, data);
    },
    signup: actions.signup, 
    getCart: actions.getCart,
    getCartAmount: actions.getCartAmount,
  }
)(Register);

