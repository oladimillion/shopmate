import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const func = ()=>{};

/**
 * RadioButton
 *
 * @name RadioButton
 * @function
 * @param {object} props
 * @returns {jsx}
 */
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
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default RadioButton;
