import React from 'react';

import "./index.css";

const CheckboxLabel = ({id, name, label, labelClassName, className, parentClassName}) => {
  return (
    <span className={`checkbox__label flex flex__wrap align__center ${parentClassName || ""}`}>
      <input 
        type="checkbox" 
        name={name || ""} 
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
