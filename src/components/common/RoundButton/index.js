import React from "react";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.css";

const func = ()=>{};
/**
 * RoundButton
 *
 * @name RoundButton
 * @function
 * @prop {string} icon
 * @prop {string} className
 * @prop {function} onClick
 * @prop {string} iconClassName
 * @returns {jsx}
 */
const RoundButton = ({ icon, className, onClick, iconClassName }) => {
  return (
    <button 
      onClick={ onClick || func }
      className={`unset__properties round__button ${className || ""}`}>
      <Icon className={`${iconClassName || ""}`} name={icon} />
    </button>
  )
};

RoundButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default RoundButton;
