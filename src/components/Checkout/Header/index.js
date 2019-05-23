import React from "react";

import "./index.css";
import "./index.md.css";

/**
 * changes header step indicator level based step's value
 *
 * @name headerData
 * @variable
 */
const headerData = [
  {
    name: "Delivery",
    className: (step) => {
      const className = "step__delivery flex__one";
      if(step > 1) return `${className} done`;
      else return `${className} current`;
    },
  },
  {
    name: "Confirmation",
    className: (step) => {
      const className = "step__confirmation flex__one";
      if(step > 2) return `${className} done`;
      else if(step === 2) return `${className} current`;
      else return className;
    },
  },
  {
    name: "Payment",
    className: (step) => {
      const className = "step__payment flex__one";
      if(step > 3) return `${className} done`;
      else if(step === 3) return `${className} current`;
      else return className;
    },
  },
  {
    name: "Finish",
    className: (step) => {
      const className = "step__finish";
      if(step > 4) return `${className} done`;
      else if(step === 4) return `${className} current`;
      else return className;
    },
  },
];

/**
 * Header component
 *
 * @name Header
 * @function
 * @prop {number} step - current checkout step/level
 * @prop {string} className
 * @returns {jsx}
 */
const Header = ({ step, className }) => {
  return (
    <header className={`checkout__header ${className}`}>
      <h2 
        className="block bold checkout__title">
        Checkout
      </h2>
      <span className="flex space__between checkout__step mobile__hidden">
        {
          headerData.map((data, index) => {
            return(
              <span 
                key={index}
                className={`step position__rel bold ${data.className(step)}`}>
                {data.name}
              </span>
            )
          })
        }
      </span>
    </header>
  )
}



export default Header;
