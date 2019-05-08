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
    this.changeStep(1);
  }

  mask = ({value, pattern, regex, max}) => {
    const unmask = value.replace(/\D/g, "").substring(max);
    console.log(unmask);
    return unmask.replace(regex, pattern);
  }

  onChange = ({ name, level, value }) => {
    this.setState({ [level]: {[name]: value}});
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
