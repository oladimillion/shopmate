import React from "react";
import { ItemButton } from "../../common/ItemButtons";

import "./index.css";

const Footer = (props) => {
  return (
    <footer 
      className={`checkout__footer gray__bg flex flex__wrap space__between ${props.className}`}>
      <ItemButton 
        name="Back"  
        className="prev__step step__buttons item__button__light" 
        onClick={()=>props.changeStep(-1)}
      />
      <ItemButton 
        name="Next Step" 
        className="next__step step__buttons" 
        onClick={()=>props.changeStep(1)}
      />
    </footer>

  )
}

export default Footer;
