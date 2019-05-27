import React from 'react';

import "./index.css";

const func = ()=>{};

/**
 * SquareButton
 *
 * @name SquareButton
 * @function
 * @prop {string} string
 * @prop {string} id
 * @prop {function} onClick
 * @prop {string} className
 * @prop {string} label
 * @returns {jsx}
 */
const SquareButton = ({ name, id, onClick, className, label })=>{
  return (
    <span className="square__button">
      <input 
        type="radio" 
        name={name} 
        id={id} 
        className="hide"
      />
      <label 
        onClick={onClick || func}
        className={`block position__rel ${className || ""}`} 
        htmlFor={id}>
        {label}
      </label>
    </span>

  )
}

export default SquareButton;
