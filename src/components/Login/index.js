import React, { Component } from 'react';
import { connect } from "react-redux";

import MessageAlert from "../common/MessageAlert";
import ModalForm, { 
  ModalFormFooter,
  ModalFormCheckboxLabel,
  ModalFormInput,
  ModalFormButton,
} from "../common/ModalForm";
import Loader from "../common/Loader";
import * as actions from "../../actions";

import './index.css';

/**
 * Login
 * @name Login
 * @class
 *
 * @extends {Component}
 */
class Login extends Component {

  state = {
    remember: false,
    email: "",
    password: "",
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
      closeLoginModal,
      getCart,
      getCartAmount 
    } = this.props;
    const { customer_id } = user.customer
    if(!user.error && this.requestSent && !user.isLoading) {
      this.requestSent = false;
      this.setState({ email: "", password: "" });
      closeLoginModal();
      if(customer_id) {
        Promise.all([
          getCart({ cartId: customer_id }),
          getCartAmount({ cartId: customer_id }),
        ]);
      }
    }
  }

  /**
   * onChange
   * update state from field/input values
   *
   * @name onChange
   * @function
   * @param {object} e
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * onCheck
   * update state from checkbox values
   *
   * @name onCheck
   * @function
   * @param {object} e
   */
  onCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  }

  /**
   * makes request to login endpoint
   *
   * @name onSubmit
   * @function
   * @param {object} e
   */
  onSubmit = (e) => {
    const { user, login } = this.props;
    e.preventDefault();
    if(user.isLoading) return;
    this.requestSent = true;
    login(this.state);
  }

  /**
   * shows registration form modal
   *
   * @name openRegisterModal
   * @function
   */
  openRegisterModal = () => {
    const { openRegisterModal, closeLoginModal, setErrorMessage } = this.props;
    closeLoginModal();
    openRegisterModal();
    setErrorMessage(null);
  }

  /**
   * hides login form modal
   *
   * @name closeLoginModal
   * @function
   */
  closeLoginModal = () => {
    const { closeLoginModal, setErrorMessage } = this.props;
    setErrorMessage(null);
    closeLoginModal();
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
        title="Sign In"
        onSubmit={this.onSubmit}
        onCloseModal={this.closeLoginModal}
        open={open}>
        {
          user.isLoading && <Loader />
        }
        <MessageAlert
          message={error ? error.error.message : message}
          hasError={!!error}
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
        <ModalFormCheckboxLabel
          id="remember__checkbox"
          label="Remember"
          name="remember"
          value={this.state.remember}
          onChange={this.onCheck}
        />
        <ModalFormButton name="Sign In" />
        <ModalFormFooter>
          <p
            className="red__color cursor__pointer">
            Forgot Password
          </p>
          <p
            onClick={this.openRegisterModal}
            className="red__color cursor__pointer">
            Have an account
          </p>
        </ModalFormFooter>
      </ModalForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.LoginModal.openModal,
    user: state.User,
  }
}

export default connect(
  mapStateToProps, 
  {
    closeLoginModal: () => {
      return actions.createAction(actions.HIDE_LOGIN_MODAL);
    },
    openRegisterModal: () => {
      return actions.createAction(actions.SHOW_REGISTER_MODAL);
    },
    setErrorMessage: (data) => {
      return actions.createAction(actions.USER_FAILURE, data);
    },
    login: actions.login, 
    getCart: actions.getCart,
    getCartAmount: actions.getCartAmount,
  }
)(Login);
