import React from "react";
import { ItemButton } from "../../common/ItemButtons";

import "./index.css";

const Footer = (props) => {

  const nextStep = { name: "Next Step", func: props.changeStep };

  switch(props.step) {
    case 3: 
      nextStep.name = "Pay";
      nextStep.func = props.makePayment;
      break;
    case 2: 
      nextStep.func = props.createOrder;
      break;
    default: break;
  }

  return (
    <React.Fragment>
      {
        props.step < 4 && (
          <footer 
            className={`checkout__footer gray__bg flex flex__wrap space__between ${props.className}`}>
            <ItemButton 
              name="Back"  
              className="prev__step step__buttons item__button__light" 
              onClick={()=>props.changeStep(-1)}
            />
            <ItemButton 
              name={nextStep.name} 
              className="next__step step__buttons" 
              onClick={()=>nextStep.func(1)}
            />
          </footer>
        )
      }
    </React.Fragment>
  )
}

export default Footer;
