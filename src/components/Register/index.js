import React, { Component } from 'react';
import { connect } from "react-redux";

import ModalForm, { 
  ModalFormFooter,
  ModalFormInput,
  ModalFormButton,
} from "../common/ModalForm";
import * as actions from "../../actions";

import './index.css';

class Register extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  openLoginModal = () => {
    const { OpenLoginModal, CloseModal } = this.props;
    CloseModal();
    OpenLoginModal();
  }

  render() {
    const { openModal, CloseModal } = this.props;
    return (
      <ModalForm
        title="Sign Up"
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
    openModal: state.RegisterModal.openModal
  }
}

export default connect(
  mapStateToProps, 
  {
    CloseModal: () => {
      return actions.CreateAction(actions.HIDE_REGISTER_MODAL);
    },
    OpenLoginModal: () => {
      return actions.CreateAction(actions.SHOW_LOGIN_MODAL);
    },
  }
)(Register);

