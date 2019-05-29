import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * PriceCurrency
 *
 * @name PriceCurrency
 * @function
 * @prop {string} {className
 * @prop {number} price}
 * @returns {jsx}
 */
const PriceCurrency = ({ className, price }) => {
  return (
    <span className={`item__price ${className || ""}`}>
      <span className="block text__center">&#x00024;{price}</span>
    </span>
  )
};

PriceCurrency.propTypes = {
  className: PropTypes.string,
  price: PropTypes.string,
};

export default PriceCurrency;
