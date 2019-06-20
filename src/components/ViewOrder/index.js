import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../actions";

import Modal from "../common/Modal";
import Loader from "../common/Loader";
import { ItemButton } from "../common/ItemButtons";
import OrderTable from "../common/OrderTable";


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
                <span 
                  onClick={closeViewOrderModal}
                  className="position__abs close__icon">
                  &#x000D7;
                </span>
              </header>
              <main className="order__main">
                { 
                  orderItems.isLoading ? 
                    (<Loader />) :
                    (
                      <OrderTable 
                        className="view__order__hori__padding"
                        orderItems={orderItems} 
                      />
                    )
                }
              </main>
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
