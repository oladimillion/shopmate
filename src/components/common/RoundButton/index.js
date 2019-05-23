import React from 'react';
import { Icon } from "semantic-ui-react";

import "./index.css";

const func = () => {};
/**
 * RoundButton
 *
 * @name RoundButton
 * @function
 * @param {string} {icon
 * @param {string} className
 * @param {function} onClick
 * @param {string} iconClassName}
 * @returns {jsx}
 */
const RoundButton = ({icon, className, onClick, iconClassName }) => {
  return (
    <button 
      onClick={ onClick || func }
      className={`unset__properties round__button ${className || ""}`}>
      <Icon className={`${iconClassName || ""}`} name={icon} />
    </button>
  )
}

export default RoundButton;
