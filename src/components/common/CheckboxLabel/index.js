import React from 'react';

import "./index.css";

const func = ()=>{};

/**
 * CheckboxLabel
 *
 * @name CheckboxLabel
 * @function
 * @prop {string} id
 * @prop {string} name
 * @prop {string} label
 * @prop {string} value
 * @prop {function} onChange
 * @prop {string} labelClassName
 * @prop {string} className
 * @prop {string} parentClassName
 * @returns {jsx}
 */
const CheckboxLabel = ({
  id, name, label, value, onChange,
  labelClassName, className, parentClassName
}) => {
  return (
    <span className={`checkbox__label flex flex__wrap align__center ${parentClassName || ""}`}>
      <input 
        type="checkbox" 
        name={name || ""} 
        value={value || false}
        onChange={onChange || func}
        id={id || ""} 
        className="hide"
      />
      <label 
        className={`block sky__blue position__rel checkbox ${className || ""}`} 
        htmlFor={id}>
      </label>
      <label 
        className={`gray__color ${labelClassName || ""}`} 
        htmlFor={id || ""}>
        {label || ""}
      </label>
    </span>
  )
}

export default CheckboxLabel;
