import React, { useState } from "react";

import RadioLabel from "../../common/RadioLabel";
import LabelInput from "../../common/LabelInput";
import HorizontalSpacing from "../../common/HorizontalSpacing";

import "./index.css";
import "./index.md.css";

import paypal from "../../../assets/images/logos-PayPal.png";
import masterCard from "../../../assets/images/logos-mastercard.png";
import visa from "../../../assets/images/logos-visa.png";



const Payment = (props) => {

  const [paymentOption, setPaymentOption] = useState("");

  return (
    <div className="payment">

      <div 
        className="flex flex__wrap payment__option__wrapper space__between section__level">
        <label 
          htmlFor="credit__card" 
          onClick={ ()=>setPaymentOption("card") }
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
              label="Pay &pound;340.00 with credit card"
              className=""
            />
          </span>
        </label>

        <div className="payment__gap"></div>

        <label 
          htmlFor="paypal" 
          onClick={ ()=>setPaymentOption("paypal") }
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
              label="Pay &pound;340.00 with Paypal"
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
              value={props.payment.holder_name}
              onChange={(e) => props.onChange({
                name: "holder_name",
                level: "payment",
                value: e.target.value,
              })}
              required={true}
              icon="user"
            />
          </div>
          <div className="payment__gap"></div>
          <div className="flex__one payment__part">
            <LabelInput 
              label="Card number"
              value={props.payment.card_number}
              onChange={(e) => props.onChange({
                name: "card_number",
                level: "payment",
                value: e.target.value,
                pattern: "$1 $2 $3 $4",
                regex: /([\d]{4})([\d]{4})([\d]{4})([\d]{4})/,
                max: 16,
              })}
              required={true}
              title="credit card"
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
                  value={props.payment.validity}
                  onChange={(e) => props.onChange({
                    name: "validity",
                    level: "payment",
                    value: e.target.value,
                    pattern: "$1/$2",
                    regex: /([\d]{2})([\d]{2})/,
                    max: 4,
                  })}
                  required={true}
                  icon="calendar alternate outline"
                  placeholder="MM/YY"
                />
              </div>
              <div className="payment__gap"></div>
              <div className="input__wrapper">
                <LabelInput 
                  label="CCV/CVC"
                  value={props.payment.ccv}
                  onChange={(e) => props.onChange({
                    name: "ccv",
                    level: "payment",
                    value: e.target.value,
                    pattern: "$1",
                    regex: /([\d]{3})/,
                    max: 3,
                  })}
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

export default Payment;
