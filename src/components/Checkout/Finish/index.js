import React from "react";
import { ItemButton } from "../../common/ItemButtons";
import OrderTable from "../../common/OrderTable";
import Loader from "../../common/Loader";

import rocket from "../../../assets/images/icons-rocket.png";

import "./index.css";

/**
 * Finish component
 *
 * @name Finish
 * @function
 * @returns {jsx}
 */
const Finish = ({openViewOrderModal, orderById}) => {
  return (
    <div className="finish">
      <div className="finish__inner margin__hori__auto">
        <div className="finish__logo section__level">
          <img 
            className="object__fit"
            src={rocket} alt="rocket" 
          />
        </div>
        <h1 className="margin__none">Success&#x00021;</h1>
        <small className="block">
          Your item will be shipped shortly
        </small>
        <br />
        <h3 className="section__level">Your order</h3>
        <main className="order__main">
          { 
            orderById.isLoading ? 
              (<Loader />) :
              (
                <OrderTable 
                  className="view__order__hori__padding"
                  orderItems={orderById} 
                />
              )
          }
        </main>
        <ItemButton 
          onClick={openViewOrderModal}
          className="section__level all__orders__btn full__width"
          name="View all your orders"
        />
      </div>
    </div>
  )
}

export default Finish;
