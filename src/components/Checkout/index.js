import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../actions";
import { 
  getTax, 
  getShippingRegionById, 
  genStripeToken,
  createStripeCharge,
  createOrder,
} from "../../actions";
import formatErrorMessage from "../../utils/formatErrorMessage";

import HorizontalSpacing from "../common/HorizontalSpacing";
import MessageAlert from "../common/MessageAlert";
import Loader from "../common/Loader";
import Header from "./Header";
import Footer from "./Footer";
import Delivery from "./Delivery";
import Confirmation from "./Confirmation";
import Payment from "./Payment";
import Finish from "./Finish";

import "./index.css";
import "./index.md.css";

/**
 * Checkout component
 * @name Checkout
 * @class
 *
 * @extends {Component}
 */
export class Checkout extends Component {

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
  };

  genStripeTokenRequestSent = false;
  createOrderRequestSent = false;
  createStripeChargeRequestSent = false;
  

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    const { user, cart } = this.props;
    if(!cart.data.length) {
      this.props.history.push("/");
      return;
    }
    const { customer } = user;
    this.setState({
      delivery: {
        ...customer,
        first_name: customer.name,
        last_name: customer.name,
        address: customer.address_1,
      },
      payment: {
        holder_name: customer.name,
      }
    }, ()=> {
      this.props.getShippingRegionById(this.state.delivery);
    });
    this.props.getTax();
  }

  /**
   * componentDidUpdate
   *
   * @name componentDidUpdate
   * @function
   */
  componentDidUpdate() {
    const { 
      stripeToken,
      stripeCharge,
      cart,
      order,
    } = this.props;
    const { delivery } = this.state;
    if(this.createStripeChargeRequestSent &&
      !this.isLoading() && !stripeCharge.error) {
      this.createStripeChargeRequestSent = false;
      this.props.emptyCart();
      this.changeStep(1);
    }
    if(this.createOrderRequestSent &&
      !this.isLoading() && !order.error) {
      this.createOrderRequestSent = false;
      this.changeStep(1);
    }
    if(this.createStripeChargeRequestSent &&
      !this.isLoading() && !stripeCharge.error) {
      this.createStripeChargeRequestSent = false;
      this.changeStep(1);
    }
    if(this.genStripeTokenRequestSent &&
      !this.isLoading() && !stripeToken.error) {
      this.genStripeTokenRequestSent = false;
      this.createStripeCharge({
        stripeToken: "tok_visa",
        order_id: order.data.orderId,
        description: delivery.description,
        amount: parseInt(+(cart.totalAmount) * 100),
        currency: "USD",
      });
    }
  }

  /**
   * Makes request to stripe charge endpoint
   *
   * @name createStripeCharge
   * @function
   * @param {object} payload
   */
  createStripeCharge(payload) {
    if(this.isLoading()) {
      return;
    } 
    this.createStripeChargeRequestSent = true;
    this.props.createStripeCharge(payload);
  }

  /**
   * Makes request to create order endpoint
   *
   * @name createOrder
   * @function
   */
  createOrder = () => {
    if(this.isLoading()) {
      return;
    } 
    let { confirmation, delivery } = this.state;
    const { user } = this.props;
    if(!confirmation.tax_id) {
      this.setErrorMessage("(Tax type) is required");
      return;
    }
    this.createOrderRequestSent = true;
    this.props.createOrder({
      tax_id: confirmation.tax_id,
      shipping_id: delivery.shipping_id,
      cart_id: user.customer.customer_id,
    });
  }

  /**
   * Renders checkout children based on the step's value
   *
   * @name renderStepComponent
   * @function
   * @returns {jsx}
   */
  renderStepComponent = () => {
    switch(this.state.step) {
      case 4:
        return <Finish />;
      case 3:
        return (
          <Payment
            payment={this.state.payment}
            paymentRegex={this.paymentRegex}
            onChange={this.onChange}
            cart={this.props.cart}
          />
        );
      case 2:
        return (
          <Confirmation 
            onChange={this.onChange}
            delivery={this.state.delivery}
            confirmation={this.state.confirmation}
            {...this.props}
          />
        );
      case 1:
      default:
        return (
          <Delivery 
            delivery={this.state.delivery}
            onChange={this.onChange}
            {...this.props}
          />
        );
    }
  }

  /**
   * Changes the steps value in the state
   *
   * @name changeStep
   * @function
   * @param {number} dir - prev or next (direction)
   */
  changeStep = (dir) => {
    if(this.isLoading()) {
      return;
    } 
    let { step } = this.state;
    if(step === 1 && !this.validDeliveryData()){
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

  /**
   * dispatch error message to the store
   *
   * @name setErrorMessage
   * @function
   * @param {string} message
   */
  setErrorMessage(message) {
    this.props.setErrorMessage({
      error: {
        message,
      }
    })
  }

  /**
   * clears error message from the store
   *
   * @name clearErrorMessage
   * @function
   */
  clearErrorMessage() {
    this.props.setErrorMessage(null);
  }

  /**
   * Makes request to the generate stripe token endpoint
   *
   * @name makePayment
   * @function
   */
  makePayment = () => {
    if(!this.validPaymentData() || this.isLoading()) {
      return;
    } 
    const payload = this.urlFormEncoded();
    this.genStripeTokenRequestSent = true;
    this.props.genStripeToken(payload);
  }

  /**
   * encoded card info into url-search-params value
   *
   * @name urlFormEncoded
   * @function
   * @returns {string}
   */
  urlFormEncoded() {
    const { payment } = this.state;
    const validity = this.unmask({value: payment.validity});
    const card_number = this.unmask({value: payment.card_number});
    const cardDetail = {
      card: {
        name: payment.holder_name,
        exp_month: validity.slice(0,2),
        exp_year: validity.slice(2,4),
        number: card_number,
        cvc: payment.ccv,
      }
    };
    return Object.entries(cardDetail.card)
      .map(([key, value]) => {
        return `card[${key}]=${value}`;
      }).join("&");
  }

  /**
   * remove patterns added to a value
   *
   * @name unmask
   * @function
   * @param {string} {value
   * @param {number} max}
   * @returns {string} unmasked value
   */
  unmask = ({value, max}) => {
    if(max){
      return value.replace(/\D/g, '').substring(0, max);
    }
    return value.replace(/\D/g, '');
  }

  /**
   * add pattern to a value
   *
   * @name mask
   * @function
   * @param {string} {value
   * @param {string} pattern
   * @param {RegExp} regex
   * @param {number} max}
   * @returns {string} masked value
   */
  mask = ({value, pattern, regex, max}) => {
    return this.unmask({value, max}).replace(regex, pattern);
  }

  /**
   * Update the state
   *
   * @name onChange
   * @function
   * @param {object} data
   */
  onChange = (data) => {
    switch(data.name) {
      case "ccv":
      case "validity":
      case "card_number":
        this.setStateWithMaskValue(data);
        break;
      case "shipping_region_id":
        this.setState(this.setLevelValues(data));
        this.props.getShippingRegionById({
          shipping_region_id: data.value,
        });
        break;
      default: 
        this.setState(this.setLevelValues(data));
        break;
    }
  }

  /**
   * Payment data validation regex
   *
   * @name paymentRegex
   * @function
   * @returns {object}
   */
  paymentRegex = () => {
    return {
      validity: /([\d]{2})([\d]{2})/,
      ccv: /([\d]{3})/,
      card_number: /([\d]{4})([\d]{4})([\d]{4})([\d]{4})/,
    }
  }

  /**
   * Validates delivery section data
   *
   * @name validDeliveryData
   * @function
   * @returns {boolean}
   */
  validDeliveryData() {
    let { delivery } = this.state;
    let errors = [];
    if(!delivery.shipping_id) {
      errors = ["Delivery option"];
    }
    if(!delivery.description) {
      errors = [...errors, "Description"];
    }
    if(errors.length) {
      this.setErrorMessage(
        `(${errors.join(", ")}) is/are required`
      );
      return false;
    }
    return true;
  }

  /**
   * Validates payment section data
   *
   * @name validPaymentData
   * @function
   * @returns {boolean}
   */
  validPaymentData() {
    let fields = [];
    const { payment } = this.state;
    const regex = this.paymentRegex();
    if(!payment.card_number || !regex.card_number
      .test(this.unmask({value: payment.card_number}))) {
      fields = ["Card Number"];
    }
    if(!payment.validity || !regex.validity
      .test(this.unmask({value: payment.validity}))) {
      fields = [...fields, "Card Expiry Date"];
    }
    if(!payment.ccv ||!regex.ccv
      .test(this.unmask({value: payment.ccv}))) {
      fields = [...fields, "Card CCV"];
    }
    if(fields.length) {
      this.setErrorMessage(
        `Please provide valid (${fields.join(", ")}) detail.`
      );
      return false;
    }
    return true;
  }

  /**
   * modifies hierachy of objects
   *
   * @name setLevelValues
   * @function
   * @param {string} {name
   * @param {string} level
   * @param {string} value}
   * @returns {object}
   */
  setLevelValues = ({ name, level, value }) => {
    return {[level]: {...this.state[level], [name]: value}};
  }

  /**
   * updates state with modified object hierarchy
   *
   * @name setStateWithMaskValue
   * @function
   * @param {object} 
   */
  setStateWithMaskValue = (data) => {
    this.setState(
      this.setLevelValues({
        ...data, 
        value: this.mask(data),
      })
    );
  }

  /**
   * collating success messages from different store 
   *
   * @name getMessage
   * @function
   * @returns {string}
   */
  getMessage() {
    const { order, stripeToken, stripeCharge } = this.props;
    return order.message || stripeToken.message || stripeCharge.message;
  }

  /**
   * collating error messages from different store 
   *
   * @name getMessage
   * @function
   * @returns {string}
   */
  getError() {
    const { order, stripeToken, stripeCharge } = this.props;
    return order.error || stripeToken.error || stripeCharge.error;
  }

  /**
   * collating loading state from different store 
   *
   * @name isLoading
   * @function
   * @returns {boolean}
   */
  isLoading () {
    const {
      user,
      stripeToken,
      stripeCharge,
      order,
      cart,
      tax,
      shippingRegionById,
      shippingRegion, 
    } = this.props;
    return  (
      user.isLoading ||
      stripeToken.isLoading ||
      stripeCharge.isLoading ||
      order.isLoading ||
      cart.isLoading ||
      tax.isLoading ||
      shippingRegion.isLoading ||
      shippingRegionById.isLoading
    );
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const error = this.getError();
    const message = this.getMessage();
    const isLoading = this.isLoading();
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
          { isLoading && <Loader /> }
          <HorizontalSpacing />
          <MessageAlert
            message={error ? formatErrorMessage(error.error) : message}
            hasError={!!error}
          />
          <Footer 
            className="checkout__padding" 
            changeStep={this.changeStep} 
            makePayment={this.makePayment}
            createOrder={this.createOrder}
            step={this.state.step}
          />
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  stripeToken: PropTypes.object.isRequired,
  stripeCharge: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  tax: PropTypes.object.isRequired,
  shippingRegion: PropTypes.object.isRequired,
  shippingRegionById: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getTax: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  createStripeCharge: PropTypes.func.isRequired,
  genStripeToken: PropTypes.func.isRequired,
  getShippingRegionById: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.User,
    stripeToken: state.StripeToken,
    stripeCharge: state.StripeCharge,
    order: state.Order,
    cart: state.Cart,
    tax: state.Tax,
    shippingRegionById: state.ShippingRegionById,
    shippingRegion: state.ShippingRegion,
  }
}

export default connect(mapStateToProps, {
  getTax,
  createOrder,
  createStripeCharge,
  genStripeToken,
  getShippingRegionById,
  setErrorMessage: (data) => {
    return actions.createAction(actions.CREATE_ORDER_FAILURE, data);
  },
  emptyCart: (data) => {
    return actions.createAction(actions.EMPTY_CART);
  },
})(Checkout);
