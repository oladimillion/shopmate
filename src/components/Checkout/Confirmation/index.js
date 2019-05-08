import React from "react";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";


const tableData = [
  {
    item: "Green T-shirt 2016 Men BK737",
    qty: "2",
    price: "14",
  },
  {
    item: "Yellow pants kids WP6648",
    qty: "1",
    price: "29",
  },
  {
    item: "Top shoes winter black PT737",
    qty: "8",
    price: "30",
  },
  {
    item: "Brown jacket woman PT737",
    qty: "8",
    price: "30",
  },
];

const DeliverySection = (props) => {
  return (
    <div className="delivery__summary section__level">
      <h3 
        className="summary__title gray__color">
        {props.title}
      </h3>
      <div 
        className="summary__body gray__color">
        {props.body}
      </div>
    </div>
  )
};

const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="flex flex__wrap section__level confirmation__flex__column">
        <div className="flex__two left__section">
          <h3 className="">Order summary</h3>
          <table className="block">
            <thead className="block">
              <tr className="flex space__between flex__wrap">
                <th className="gray__color flex__one item">
                  Item
                </th>
                <th className="gray__color qty">Qty</th>
                <th className="gray__color price">Price</th>
              </tr>
            </thead>
            <tbody className="block">
              {
                tableData.map((data, index) => {
                  return (
                    <tr 
                      className="flex space__between flex__wrap" 
                      key={index}>
                      <td 
                        className="gray__color flex__one item">
                        {data.item}
                      </td>
                      <td 
                        className="gray__color qty">
                        {data.qty}
                      </td>
                      <td 
                        className="gray__color price bold red__color">
                        &pound;{data.price}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="section__gap"></div>
        <div className="flex__one right__section">
          <h3 className="">Delivery</h3>
          <DeliverySection 
            title="Address"
            body="Office 23, 5 Colora Row, Birmingbam England, 43992"
          />
          <DeliverySection 
            title="Delivery options"
            body="Standard delivery (free, 2-3 days)"
          />
        </div>
      </div>
      <div 
        className="section__level flex flex__wrap space__between">
        <div className="flex space__between flex__wrap flex__two left__section confirmation__flex__column">
          <div 
            className="discount bold gray__color flex space__between align__center">
            <h3 className="margin__none">
              NEWYEAR5%
            </h3>
            <span>&#10003;</span>
          </div>
          <div className="overlap">
            <span 
              className="block gray__color bold">
              Subtotal
            </span>
            <span className="block">&pound;368</span>
          </div>
          <div className="overlap">
            <span className="block gray__color bold">Shipping</span>
            <span className="block">free</span>
          </div>
        </div>
        <div className="section__gap"></div>
        <div className="flex__one right__section">
          <div className="overlap">
            <span className="block gray__color bold">
              Grandtotal
            </span>
            <span className="block bold">
              <h2 className="margin__none">&pound;368</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;
