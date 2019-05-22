import React, { Component } from "react";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";


/**
 * delivery subsection
 *
 * @name DeliverySection
 * @function
 * @param {object} props
 * @returns {jsx}
 */
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

/**
 * Confirmation component
 * @name Confirmation
 * @class
 *
 * @extends {Component}
 */
class Confirmation extends Component {

  /**
   * get shipping detail using shipping id
   *
   * @name getShippingDetail
   * @function
   * @returns {object} shipping detail
   */
  getShippingDetail() {
    const { shippingRegionById, delivery } = this.props;
    const { shipping_id } = delivery;
    const shippingDetail = shippingRegionById.data.find(data => data.shipping_id === shipping_id );
    return shippingDetail || {};
  }

  /**
   * converts address details to string
   *
   * @name getAddressBody
   * @function
   * @param {object} {delivery
   * @param {object} customer}
   * @returns {string}
   */
  getAddressBody({delivery, customer}) {
    return [
      delivery.address || customer.address_1 || "",
      delivery.city || customer.city || "",
      delivery.country || customer.country || "",
      delivery.postal_code || customer.postal_code || "",
    ]
      .filter(data => data !== "")
      .join(", ") + ".";
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const re = /\([\D\d]+\)/;
    const { user, cart, delivery, tax, confirmation } = this.props;
    const { customer } = user;
    const { shipping_type } = this.getShippingDetail();

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
                  cart.data.map((data) => {
                    return (
                      <tr 
                        className="flex space__between flex__wrap" 
                        key={data.item_id}>
                        <td 
                          className="gray__color flex__one item">
                          {data.name}
                        </td>
                        <td 
                          className="gray__color qty">
                          {data.quantity}
                        </td>
                        <td 
                          className="gray__color price bold red__color">
                          <span>&#x00024;{data.price}</span>
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
              body={this.getAddressBody({delivery, customer})}
            />
            <DeliverySection 
              title="Delivery options"
              body={shipping_type}
            />
          </div>
        </div>
        <div 
          className="section__level flex flex__wrap space__between">
          <div className="flex space__between flex__wrap flex__two left__section confirmation__flex__column">
            <div 
              className="bold gray__color flex space__between align__center">
              <select
                className="tax" 
                name="tax_id" 
                onChange={
                  (e)=> this.props.onChange({
                    name: "tax_id",
                    level: "confirmation",
                    value: e.target.value,
                  })
                }
                value={confirmation.tax_id}>
                <option disabled value={0}>Select tax type</option>
                {
                  tax.data.map((data) => {
                    return (
                      <option 
                        key={data.tax_id} 
                        value={data.tax_id}>
                        {data.tax_type}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="overlap">
              <span 
                className="block gray__color bold">
                Subtotal
              </span>
              <span className="block">&#x00024;{cart.totalAmount}</span>
            </div>
            <div className="overlap">
              <span className="block gray__color bold">Shipping</span>
              <span className="block">
                {
                  shipping_type ? shipping_type.match(re)[0] : ""
                }
              </span>
            </div>
          </div>
          <div className="section__gap"></div>
          <div className="flex__one right__section">
            <div className="overlap">
              <span className="block gray__color bold">
                Grandtotal
              </span>
              <span className="block bold">
                <h2 className="margin__none">&#x00024;{cart.totalAmount}</h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Confirmation;
