import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const func = () => {};

/**
 * ItemButton
 *
 * @name ItemButton
 * @function
 * @prop {string} name
 * @prop {string} className
 * @prop {function} onClick
 * @prop {string} type
 * @prop {boolean} disable
 * @returns {jsx}
 */
const ItemButton = ({ name, className, onClick, type, disable }) => {
  return (
    <button 
      onClick={onClick || func}
      disabled={ !!disable ? "disabled" : ""}
      type={type || "button"}
      className={`item__button block ${className || ""} ${disable ? "button__disable" : ""}`}>
      {name}
    </button>
  )
};

ItemButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disable: PropTypes.bool,
};

export { ItemButton };

