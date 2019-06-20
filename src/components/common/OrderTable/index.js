import React from "react";

import PriceCurrency from "../PriceCurrency";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";

const OrderTable = ({ orderItems, className }) => {
  return (
    <table className={`order__table block ${className || ""}`}>
      <thead className="block">
        <tr 
          className="table__column__label flex space__between">
          <th className="order__id flex__one">Order ID</th>
          <th className="name flex__two">Name</th>
          <th className="quantity flex__one">Quantity</th>
          <th className="unit__cost flex__one">Unit cost</th>
          <th className="subtotal flex__one">Subtotal</th>
        </tr>
      </thead>
      <tbody className="block">
        {
          orderItems.data.map((data, index) => {
            return (
              <tr 
                key={index}
                className="flex space__between order__item__list">
                <td 
                  className="order__id bold flex__one">
                  {data.order_id}
                </td>
                <td 
                  className="name bold flex__two capitalize">
                  {data.product_name}
                </td>
                <td 
                  className="quantity bold flex__one">
                  {data.quantity}
                </td>
                <td className="unit__cost flex__one ">
                  <PriceCurrency 
                    price={data.unit_cost} 
                    className="order__cost "
                    iconClassName="order__currency__icon"
                  />
                </td>
                <td className="subtotal flex__one">
                  <PriceCurrency 
                    price={data.subtotal} 
                    className="order__cost"
                    iconClassName="order__currency__icon"
                  />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default OrderTable;
