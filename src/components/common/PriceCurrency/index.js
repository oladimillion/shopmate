import React from 'react';

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
}

export default PriceCurrency;
