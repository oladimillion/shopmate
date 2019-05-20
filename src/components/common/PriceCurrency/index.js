import React from 'react';

import "./index.css";

const PriceCurrency = ({ className, price }) => {
  return (
    <span className={`item__price ${className || ""}`}>
      <span className="block text__center">&#x00024;{price}</span>
    </span>
  )
}

export default PriceCurrency;
