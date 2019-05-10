import React, { Component } from 'react';
import { connect } from "react-redux";

import ModalForm, { 
  ModalFormFooter,
  ModalFormCheckboxLabel,
  ModalFormInput,
  ModalFormButton,
} from "../common/ModalForm";
import * as actions from "../../actions";

import './index.css';

class Login extends Component {

  state = {
    remember: false,
    email: "",
    password: "",
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  openRegisterModal = () => {
    const { OpenRegisterModal, CloseModal } = this.props;
    CloseModal();
    OpenRegisterModal();
  }

  render() {
    const { openModal, CloseModal } = this.props;
    return (
      <ModalForm
        title="Sign In"
        onSubmit={this.onSubmit}
        onCloseModal={CloseModal}
        open={openModal}>
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
    openModal: state.LoginModal.openModal
  }
}

export default connect(
  mapStateToProps, 
  {
    CloseModal: () => {
      return actions.CreateAction(actions.HIDE_LOGIN_MODAL);
    },
    OpenRegisterModal: () => {
      return actions.CreateAction(actions.SHOW_REGISTER_MODAL);
    },
  }
)(Login);
