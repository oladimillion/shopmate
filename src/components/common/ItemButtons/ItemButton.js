import React from 'react';

import "./index.css";

const func = () => {};

const ItemButton = ({ name, className, onClick }) => {
  return (
    <button 
      onClick={onClick || func}
      className={`item__button block ${className || ""}`}>
      {name}
    </button>
  )
}

export { ItemButton };

