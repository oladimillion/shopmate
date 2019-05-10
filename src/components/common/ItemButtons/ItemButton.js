import React from 'react';

import "./index.css";

const func = () => {};

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

