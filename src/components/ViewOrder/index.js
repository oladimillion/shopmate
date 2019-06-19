import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../actions";

import PriceCurrency from "../common/PriceCurrency";
import Modal from "../common/Modal";
import Loader from "../common/Loader";
import { ItemButton } from "../common/ItemButtons";


import './index.css';
import './index.md.css';
import './index.sm.css';



/**
 * ViewOrder
 * @name ViewOrder
 * @class
 *
 * @extends {Component}
 */
export class ViewOrder extends Component {

  componentDidMount() {
    const { user, getOrderItems } = this.props;
    if(user.isAuth) { getOrderItems(); }
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const { open, closeViewOrderModal, user, orderItems } = this.props;
    return (
      <Fragment>
        {
          user.isAuth && (
            <Modal 
              open={open}
              modalClassName="view__order" 
              modalInnerClassName="view__order__inner">
              <header className="position__rel view__order__hori__padding">
                <span className="order__title">
                  Orders ({orderItems.data.length})
                </span>
                { orderItems.isLoading && <Loader /> }
                <span 
                  onClick={closeViewOrderModal}
                  className="position__abs close__icon">
                  &#x000D7;
                </span>
              </header>
              <table className="block view__order__hori__padding">
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
              <footer 
                className="view__order__hori__padding view__order__footer gray__bg flex space__between">
                <ItemButton 
                  name="Close"  
                  className="close__order__modal__btn" 
                  onClick={closeViewOrderModal}
                />
              </footer>
            </Modal>
          )
        }
      </Fragment>
    );
  }
}



ViewOrder.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  closeViewOrderModal: PropTypes.func.isRequired,
  getOrderItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    open: state.ViewOrderModal.openModal,
    orderItems: state.OrderItems,
    user: state.User,
  }
}

export default connect(
  mapStateToProps, 
  {
    closeViewOrderModal: () => {
      return actions.createAction(actions.HIDE_VIEW_ORDER_MODAL);
    },
    getOrderItems: actions.getOrderItems, 
  }
)(ViewOrder);
