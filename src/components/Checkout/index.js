import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from "../../actions";
import { getTax } from "../../actions";
import formatErrorMessage from "../../utils/formatErrorMessage";

import HorizontalSpacing from "../common/HorizontalSpacing";
import MessageAlert from "../common/MessageAlert";
import Header from "./Header";
import Footer from "./Footer";
import Delivery from "./Delivery";
import Confirmation from "./Confirmation";
import Payment from "./Payment";
import Finish from "./Finish";

import './index.css';
import './index.md.css';

class Checkout extends Component {

  state = {
    step: 1,
    payment: {
      ccv: "",
      validity: "",
      card_number: "",
      holder_name: "",
    },
    delivery: {
      shipping_id: 0,
      shipping_region_id: 0,
    },
    confirmation: {
      tax_id: 0,
    },
  }

  componentDidMount() {
    this.props.getTax();
  }

  renderStepComponent() {
    switch(this.state.step) {
      case 4:
        return <Finish />;
      case 3:
        return (
          <Payment
            payment={this.state.payment}
            onChange={this.onChange}
          />
        );
      case 2:
        return (
          <Confirmation 
            onChange={this.onChange}
            delivery={this.state.delivery}
            confirmation={this.state.confirmation}
          />
        );
      case 1:
      default:
        return (
          <Delivery 
            delivery={this.state.delivery}
            onChange={this.onChange}
          />
        );
    }
  }

  changeStep = (dir) => {
    let { step, delivery, confirmation } = this.state;
    if(step === 1 && !delivery.shipping_id){
      this.setErrorMessage("Please choose your shipping option");
      return;
    } else if(step === 2 && !confirmation.tax_id) {
      this.setErrorMessage("Please choose a 'tax type'");
      return;
    }
    if(dir < 1) {
      step = step > 1 ? step - 1 : 1;
    }
    else {
      step = step < 4 ? step + 1 : 4;
    }
    this.clearErrorMessage();
    this.setState({ step });
  }

  setErrorMessage(message) {
    this.props.setErrorMessage({
      error: {
        message,
      }
    })
  }

  clearErrorMessage() {
    this.props.setErrorMessage(null);
  }

  makePayment = () => {
    console.log("payment completed");
    console.log(this.state)
    this.changeStep(1);
  }

  unmask = ({value, max}) => {
    return value.replace(/\D/g, '').substring(0, max);
  }

  mask = ({value, pattern, regex, max}) => {
    return this.unmask({value, max}).replace(regex, pattern);
  }

  onChange = (data) => {
    switch(data.name) {
      case "ccv":
      case "validity":
      case "card_number":
        this.setStateWithMaskValue(data);
        break;
      default: 
        this.setState(this.setLevelValues(data));
        break;
    }
  }

  setLevelValues = ({ name, level, value }) => {
    return {[level]: {...this.state[level], [name]: value}};
  }

  setStateWithMaskValue = (data) => {
    this.setState(
      this.setLevelValues({
        ...data, 
        value: this.mask(data),
      })
    );
  }

  render() {
    console.log(this.state)
    const { order } = this.props;
    const { error, message } = order;
    return (
      <div className="checkout">
        <div className="inner__container margin__hori__auto inner__checkout white__bg">
          <HorizontalSpacing />
          <HorizontalSpacing />
          <Header 
            className="checkout__padding" 
            step={this.state.step} 
          />
          <HorizontalSpacing />
          <main className="checkout__main checkout__padding">
            { this.renderStepComponent() }
          </main>
          <HorizontalSpacing />
          <MessageAlert
            message={error ? formatErrorMessage(error.error) : message}
            hasError={!!error}
          />
          <Footer 
            className="checkout__padding" 
            changeStep={this.changeStep} 
            makePayment={this.makePayment}
            step={this.state.step}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.User,
    order: state.Order,
  }
}

export default connect(mapStateToProps, {
  getTax,
  setErrorMessage: (data) => {
    return actions.createAction(actions.CREATE_ORDER_FAILURE, data);
  },
})(Checkout);
