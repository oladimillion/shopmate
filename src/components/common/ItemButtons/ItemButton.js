import React from 'react';

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
 * @returns {jsx}
 */
const ItemButton = ({ name, className, onClick, type }) => {
  return (
    <button 
      onClick={onClick || func}
      type={type || "button"}
      className={`item__button block ${className || ""}`}>
      {name}
    </button>
  )
}

export { ItemButton };

