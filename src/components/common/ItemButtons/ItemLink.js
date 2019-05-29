import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.css";

const func = () => {};

/**
 * ItemLink
 *
 * @name ItemLink
 * @function
 * @param {string} {to
 * @param {string} name
 * @param {string} className
 * @param {function} onClick}
 * @returns {jsx}
 */
const ItemLink = ({ to, name, className, onClick }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick || func}
      className={`item__button block ${className || ""}`}>
      {name}
    </Link> 
  )
}

ItemLink.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

export { ItemLink };

