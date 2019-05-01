import React from 'react';

import "./index.css";

const CheckboxLabel = (props) => {
  return (
    <span className="checkbox__label flex flex__wrap align__center">
      <input 
        type="checkbox" 
        name={props.name} 
        id={props.id} 
        className="hide"
      />
      <label 
        className={`block sky__blue position__rel checkbox ${props.className || ""}`} 
        htmlFor={props.id}>
      </label>
      <label 
        className={`gray__color ${props.labelClassName || ""}`} 
        htmlFor={props.id}>{props.label}
      </label>
    </span>
  )
}

export default CheckboxLabel;
