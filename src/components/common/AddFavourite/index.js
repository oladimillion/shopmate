import React from 'react';
import { Icon } from "semantic-ui-react";

import "./index.css";


const PanelSection = ({name, iconClassName}) => {
  return (
    <button className="unset__properties flex">
      <Icon 
        className={iconClassName} 
        name="heart outline" 
      />
      {
        name && 
        <span className="favourite__label">{name}</span>
      }
    </button>
  )
}

export default PanelSection;
