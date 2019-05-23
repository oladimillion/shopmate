import React from 'react';
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

export { ItemLink };

