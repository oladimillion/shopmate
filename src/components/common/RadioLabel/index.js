import React from 'react';

import "./index.css";

const RadioButton = (props) => {
  return (
    <span className="radio__label flex">
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        className="hide"
      />
      <label 
        className={`block radio__label position__rel`} 
        htmlFor={props.id}>
      </label>
      <label className={`label__value ${props.className || ""}`} htmlFor={props.id}>
        {props.label}
      </label>
    </span>
  )
}



export default RadioButton;
