import React from 'react';

import "./index.css";

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
        className={`block position__rel ${props.className || ""}`} 
        htmlFor={props.id}>
        { props.label }
      </label>
    </span>

  )
}

export default SquareButton;
