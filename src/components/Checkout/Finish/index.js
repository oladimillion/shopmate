import React from "react";
import { ItemButton } from "../../common/ItemButtons";

import rocket from "../../../assets/images/icons-rocket.png";

import "./index.css";

/**
 * Finish component
 *
 * @name Finish
 * @function
 * @returns {jsx}
 */
const Finish = ({openViewOrderModal}) => {
  return (
    <div className="finish">
      <div className="finish__inner margin__hori__auto">
        <div className="finish__logo section__level">
          <img 
            className="object__fit"
            src={rocket} alt="rocket" 
          />
        </div>
        <h1 className="section__level">Success&#x00021;</h1>
        <small className="block">
          Your item will be shipped shortly,
        </small>
        <ItemButton 
          onClick={openViewOrderModal}
          className="section__level back__to__shop full__width"
          name="Check your orders"
        />
      </div>
    </div>
  )
}

export default Finish;
