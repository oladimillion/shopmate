
import React from "react";
import { Icon } from "semantic-ui-react";

import "./index.css";

const func = ()=>{};

const CheckoutInput = (props) => {
  return (
    <span className="position__rel checkout__input block">
      <label className="delivery__label block gray__color bold" 
        htmlFor={props.name}>
        {props.label} { props.required && <span className="required__sign">*</span> }
      </label>
      <input 
        onChange={props.onChange || func}
        value={props.value || ""}
        className="delivery__input block" 
        type={props.type || "text"} 
        placeholder={props.placeholder || ""}
      />
      {
        props.icon && (
          <span className="checkout__input__icon position__abs">
            <Icon name={props.icon} />
          </span>
        )
      }
    </span>
  )
};


export default CheckoutInput;
