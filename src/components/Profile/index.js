import React, { Component } from 'react';
import { connect } from "react-redux";

import { profile, address } from "../../actions";
import * as actions from "../../actions";
import formatErrorMessage from "../../utils/formatErrorMessage";

import CheckboxLabel from "../common/CheckboxLabel";
import HorizontalSpacing from "../common/HorizontalSpacing";
import HorizontalLine from "../common/HorizontalLine";
import MessageAlert from "../common/MessageAlert";
import { ItemButton } from "../common/ItemButtons";
import ProfileForm from "./ProfileForm";
import LabelInput from "../common/LabelInput";
import InputGroup, { InputWrapper } from "../common/InputGroup";
import Loader from "../common/Loader";

import basicInfo from "./basicInfo";
import addressInfo from "./addressInfo";

import './index.css';
import './index.md.css';


/**
 * Profile
 * @name Profile
 * @class
 *
 * @extends {Component}
 */
export class Profile extends Component {

  state = {
    showAddressForm: false,
    address_1: "",
    address_2: "",
    city: "",
    credit_card: "",
    customer_id: "",
    day_phone: "",
    email: "",
    eve_phone: "",
    mob_phone: "",
    name: "",
    postal_code: "",
    region: "",
    password: "",
    confirmPassword: "",
    shipping_region_id: "",
  }

  requestSent = false;

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    const { setErrorMessage, user } = this.props;
    const { customer } = user;
    setErrorMessage(null);
    this.setState(customer);
  }

  /**
   * componentDidUpdate
   *
   * @name componentDidUpdate
   * @function
   */
  componentDidUpdate() {
    const { customer, isLoading, error } = this.props.user;
    if(this.requestSent && !isLoading && !error) {
      this.setState({
        ...customer, 
        password: "",
        confirmPassword: "",
      });
      this.requestSent = false;
    }
  }

  /**
   * updates state with the form input values
   *
   * @name onChange
   * @function
   * @param {object} e
   */
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  /**
   * update state with the checkbox input value
   *
   * @name onCheck
   * @function
   * @param {object} data
   */
  onCheck = (data) => {
    this.setState(data);
  }

  /**
   * makes request to the profile and address endpoints
   *
   * @name onSubmit
   * @function
   * @param {object} e
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { user, address, profile, setErrorMessage } = this.props;
    const { showAddressForm, password, confirmPassword } = this.state;
    if(user.isLoading) return;
    if(password.trim() !== confirmPassword.trim()) {
      setErrorMessage({
        error: {
          message: "Passwords do not match",
        }
      })
      return;
    }
    this.requestSent = true;
    if(showAddressForm) {
      Promise.all([
        address(this.state),
        profile(this.state),
      ]);
    } else {
      profile(this.state);
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
    const { showAddressForm, shipping_region_id } = this.state;
    const { shippingRegion, user } = this.props;
    const { error, message } = user;

    return (
      <div className="profile">
        <HorizontalSpacing />
        <div className="inner__container margin__hori__auto inner__checkout white__bg">
          <HorizontalSpacing />
          <HorizontalSpacing />
          <form onSubmit={this.onSubmit}>
            <ProfileForm 
              title="Profile"
              inputDataArray={basicInfo(this.state)}
              onChange={this.onChange}
            />
            <br />
            <div className="profile__padding">
              <HorizontalLine />
              <CheckboxLabel 
                name="address__info"
                id="address__info"
                label="Address Information"
                onChange={(e)=>this.onCheck({
                  showAddressForm: e.target.checked
                })}
              />
            </div>
            <br />
            {
              showAddressForm && (
                <ProfileForm 
                  title="Address"
                  inputDataArray={addressInfo(this.state)}
                  onChange={this.onChange}>
                  <InputGroup>
                    <InputWrapper wrapperClassname="left__section">
                      <LabelInput 
                        label="Shipping Region"
                        name="shipping_region_id">
                        <select 
                          onChange={this.onChange}
                          className="block shipping_region" 
                          name="shipping_region_id"
                          value={shipping_region_id}>
                          {
                            shippingRegion.map(region => {
                              return (
                                <option 
                                  key={region.shipping_region_id}
                                  value={region.shipping_region_id}>
                                  {region.shipping_region}
                                </option>
                              )
                            })
                          }
                        </select>
                      </LabelInput>
                    </InputWrapper>
                    <InputWrapper wrapperClassname="right__section">
                      <LabelInput 
                        labelInputClassname="hidden md__hide"
                      />
                    </InputWrapper>
                  </InputGroup>
                </ProfileForm>
              )
            }
            <br />
            <MessageAlert
              message={error ? formatErrorMessage(error.error) : message}
              hasError={!!error}
            />
            {
              user.isLoading && <Loader />
            }
            <footer className="profile__padding gray__bg">
              <HorizontalSpacing />
              <div className="flex space__between flex__row__reverse ">
                <ItemButton 
                  name="Save"  
                  className="profile__save__btn" 
                  type="submit"
                />
              </div>
              <HorizontalSpacing />
            </footer>
          </form>
        </div>
        <HorizontalSpacing />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.User,
    shippingRegion: state.ShippingRegion.data,
  }
}

export default connect(mapStateToProps, {
  profile,
  address,
  setErrorMessage: (data) => {
    return actions.createAction(actions.USER_FAILURE, data);
  },
})(Profile);
