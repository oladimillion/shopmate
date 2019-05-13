import React from 'react';

import "./index.css";

const func = ()=>{};

const SquareButton = (props) => {
  return (
    <span className="square__button">
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        className="hide"
      />
      <label 
        onClick={props.onClick || func}
        className={`block position__rel ${props.className || ""}`} 
        htmlFor={props.id}>
        { props.label }
      </label>
    </span>

  )
}

export default SquareButton;
