import React, { Component } from "react";
import RadioLabel from "../../common/RadioLabel";
import LabelInput from "../../common/LabelInput";
import HorizontalSpacing from "../../common/HorizontalSpacing";

import "./index.css";
import "./index.md.css";

import paypal from "../../../assets/images/logos-PayPal.png";
import masterCard from "../../../assets/images/logos-mastercard.png";
import visa from "../../../assets/images/logos-visa.png";



/**
 * Payment component
 * @name Payment
 * @class
 *
 * @extends {Component}
 */
class Payment extends Component {

  state = {paymentOption: "card"};

  /**
   * set paymentOption state
   *
   * @name setPaymentOption
   * @function
   * @param {string} val - option state
   */
  setPaymentOption = (val) => {
    this.setState({paymentOption: val});
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const { paymentOption } = this.state;
    const { payment, paymentRegex, cart } = this.props;
    const regex = paymentRegex();

    return (
      <div className="payment">

        <div 
          className="flex flex__wrap payment__option__wrapper space__between section__level">
          <label 
            htmlFor="credit__card" 
            onClick={ ()=>this.setPaymentOption("card") }
            className={`flex__one payment__part payment__option flex flex__column space__between ${paymentOption === "card" ? "active" : ""}`}>
            <span className="flex payment__method__logos">
              <img 
                className="object__fit" 
                src={visa} 
                alt="visa" 
              />
              <div className="payment__gap"></div>
              <img 
                className="object__fit" 
                src={masterCard} 
                alt="masterCard"
              />
            </span>
            <span className="block margin__hori__auto">
              <RadioLabel 
                name="payment__option"
                id="credit__card"
                label={<span>Pay &#x00024;{cart.totalAmount} with credit card</span>}
                checked={paymentOption === "card"}
                className=""
              />
            </span>
          </label>

          <div className="payment__gap"></div>

          <label 
            htmlFor="paypal" 
            onClick={ ()=>this.setPaymentOption("paypal") }
            className={`flex__one payment__part payment__option flex flex__column space__between ${paymentOption === "paypal" ? "active" : ""}`}>
            <span className="flex payment__method__logos">
              <img 
                className="object__fit margin__hori__auto" 
                src={paypal} 
                alt="paypal" 
              />
            </span>
            <span className="block margin__hori__auto">
              <RadioLabel 
                name="payment__option"
                id="paypal"
                checked={paymentOption === "paypal"}
                label={<span>Pay &#x00024;{cart.totalAmount} with Paypal</span>}
              />
            </span>
          </label>
        </div>

        <HorizontalSpacing />

        <div className="form__area">
          <div className="flex flex__wrap">
            <div className="flex__one payment__part">
              <LabelInput 
                label="Cardholder's Name"
                value={payment.holder_name}
                onChange={(e) => this.props.onChange({
                  name: "holder_name",
                  level: "payment",
                  value: e.target.value,
                })}
                required={true}
                icon="user"
                name="holder_name"
              />
            </div>
            <div className="payment__gap"></div>
            <div className="flex__one payment__part">
              <LabelInput 
                label="Card number"
                value={payment.card_number}
                onChange={(e) => this.props.onChange({
                  name: "card_number",
                  level: "payment",
                  value: e.target.value,
                  pattern: "$1 $2 $3 $4",
                  regex: regex.card_number,
                  max: 16,
                })}
                required={true}
                title="credit card"
                name="card_number"
                icon="credit card outline"
                placeholder="**** **** **** ****"
              />
            </div>
          </div>
          <div className="flex flex__wrap section__level">
            <div className="flex__one payment__part card__date__ccv">
              <div className="flex flex__wrap">
                <div className="input__wrapper">
                  <LabelInput 
                    label="Valid through"
                    value={payment.validity}
                    onChange={(e) => this.props.onChange({
                      name: "validity",
                      level: "payment",
                      value: e.target.value,
                      pattern: "$1/$2",
                      regex: regex.validity,
                      max: 4,
                    })}
                    required={true}
                    name="validity"
                    icon="calendar alternate outline"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="payment__gap"></div>
                <div className="input__wrapper">
                  <LabelInput 
                    label="CCV/CVC"
                    value={payment.ccv}
                    onChange={(e) => this.props.onChange({
                      name: "ccv",
                      level: "payment",
                      value: e.target.value,
                      pattern: "$1",
                      regex: regex.ccv,
                      max: 3,
                    })}
                    name="ccv"
                    required={true}
                    icon="lock"
                    type="text"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
            <div className="payment__gap"></div>
            <div className="flex__one payment__part section__level">
              <small className="gray__color">
                CVV or CVC is the card security code unique three digits number on the back of your card separate from its number
              </small>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Payment;
