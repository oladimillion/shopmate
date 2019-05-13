import React from 'react';

import "./index.css";

const func = ()=>{};

const RadioButton = (props) => {
  return (
    <span className="radio__button">
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        className="hide"
      />
      <label 
        onClick={props.onClick || func}
        className={`block sky__blue position__rel ${props.className || ""}`} 
        htmlFor={props.id}>
      </label>
    </span>
  )
}

export default RadioButton;
