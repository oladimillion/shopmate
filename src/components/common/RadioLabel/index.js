import React from 'react';

import "./index.css";

const func = ()=>{};

/**
 * RadioLabel
 *
 * @name RadioLabel
 * @function
 * @prop {string} {name
 * @prop {string} id
 * @prop {string} label
 * @prop {string} className
 * @prop {function} onClick
 * @prop {boolean} checked}
 * @returns {jsx}
 */
const RadioLabel = ({ name, id, label, className, onClick, checked }) => {
  return (
    <span 
      onClick={onClick || func}
      className="radio__label flex flex__wrap align__center">
      <input 
        type="radio" 
        name={name} 
        id={id} 
        checked={checked || false}
        onChange={func}
        className="hide"
      />
      <label 
        className={`block radio__label position__rel`} 
        htmlFor={id}>
      </label>
      <label className={`label__value ${className || ""}`} htmlFor={id}>
        {label}
      </label>
    </span>
  )
}

export default RadioLabel;
