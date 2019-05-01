import React from 'react';
import { Icon } from "semantic-ui-react";

import "./index.css";


const RoundButton = ({icon, className, onClick, iconClassName }) => {
  return (
    <button 
      onClick={ onClick || null }
      className={`unset__properties round__button ${className || ""}`}>
      <Icon className={`${iconClassName || ""}`} name={icon} />
    </button>
  )
}

export default RoundButton;
