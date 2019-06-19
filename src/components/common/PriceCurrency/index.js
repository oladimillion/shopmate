import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./index.css";

const ItemPrice = ({ price, discountedPrice }) => {
  const hasDiscount = !!parseInt(discountedPrice);
  return (
    <Fragment>
      { 
        hasDiscount && 
          (
            <span className="block text__center">
              &#x00024;{discountedPrice}
            </span> 
          )
      }
      <span 
        className={`block text__center ${hasDiscount ? "line__through has__discount" : ""}`}>
          &#x00024;{price}
      </span>
    </Fragment>
  )
}

/**
 * PriceCurrency
 *
 * @name PriceCurrency
 * @function
 * @prop {string} {className
 * @prop {number} price}
 * @returns {jsx}
 */
const PriceCurrency = ({ className, price, discountedPrice }) => {
  return (
    <span className={`item__price flex justify__center ${className || ""}`}>
      <ItemPrice price={price} discountedPrice={discountedPrice} />
    </span>
  )
};

PriceCurrency.propTypes = {
  className: PropTypes.string,
  price: PropTypes.string,
};

export default PriceCurrency;
