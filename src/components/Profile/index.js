import React, { Component } from 'react';
import { connect } from "react-redux";

import CheckboxLabel from "../common/CheckboxLabel";
import HorizontalSpacing from "../common/HorizontalSpacing";
import HorizontalLine from "../common/HorizontalLine";
import { ItemButton } from "../common/ItemButtons";
import ProfileForm from "./ProfileForm";
import LabelInput from "../common/LabelInput";
import InputGroup, { InputWrapper } from "../common/InputGroup";

import basicInfo from "./basicInfo";
import addressInfo from "./addressInfo";

import './index.css';
import './index.md.css';



class Profile extends Component {

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

  componentDidMount() {
    const { customer } = this.props.user;
    this.setState(customer);
  }

  componentDidUpdate() {
    const { customer, isLoading } = this.props.user;

    if(this.requestSent && !isLoading) {
      this.setState({
        ...customer, 
        password: "",
        confirmPassword: "",
      });
      this.requestSent = false;
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onCheck = (data) => {
    this.setState(data);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { showAddressForm } = this.state;
    const { shippingRegion } = this.props;

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
                          name="shipping_region_id">
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
                        labelInputClassname="hidden md__hide__input"
                      />
                    </InputWrapper>
                  </InputGroup>
                </ProfileForm>
              )
            }
            <br />
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

export default connect(mapStateToProps, {})(Profile);
