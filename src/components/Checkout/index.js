import React, { Component } from 'react';
import HorizontalSpacing from "../common/HorizontalSpacing";
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
        return <Confirmation />;
      case 1:
      default:
        return <Delivery />;
    }
  }

  changeStep = (dir) => {
    let step = this.state.step;
    if(dir < 1) {
      step = step > 1 ? step - 1 : 1;
    }
    else {
      step = step < 4 ? step + 1 : 4;
    }
    this.setState({ step });
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
    this.setState(this.setLevelValues(data));
    switch(data.name) {
      case "ccv":
      case "validity":
      case "card_number":
        this.setStateWithMaskValue(data);
        break;
      default: break;
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

export default Checkout;
