import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
export class Login extends Component {

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
      getOrderItems,
      getCartAmount 
    } = this.props;
    const { cartID } = localStorage;
    if(!user.error && this.requestSent && !user.isLoading) {
      this.requestSent = false;
      this.setState({ email: "", password: "" });
      closeLoginModal();
      if(cartID) {
        Promise.all([
          getCart({ cartID }),
          getCartAmount({ cartID }),
          getOrderItems(),
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
            Have no account
          </p>
        </ModalFormFooter>
      </ModalForm>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  openRegisterModal: PropTypes.func.isRequired,
  closeLoginModal: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  getCartAmount: PropTypes.func.isRequired,
};

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
    getOrderItems: actions.getOrderItems, 
    getCart: actions.getCart,
    getCartAmount: actions.getCartAmount,
  }
)(Login);
