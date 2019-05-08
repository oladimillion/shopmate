import React from 'react';
import RoundButton from "../RoundButton";

import "./index.css";

const SelectQuantity = ({quantity}) => {
  return (
    <div className="flex">
      <RoundButton 
        className="" 
        icon="minus" 
      />
      <div className="item__quantity">
        {quantity}
      </div>
      <RoundButton 
        className="" 
        icon="plus" 
      />
    </div>
  )
}



export default SelectQuantity;
