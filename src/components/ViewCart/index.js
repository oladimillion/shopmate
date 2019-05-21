import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { 
  getCart, 
  getCartAmount, 
  deleteCartItem,
  updateCart,
} from "../../actions";

import * as actions from "../../actions";
import API from "../../api";

import SelectQuantity from "../common/SelectQuantity";
import PriceCurrency from "../common/PriceCurrency";
import Modal from "../common/Modal";
import Loader from "../common/Loader";
import { ItemButton, ItemLink } from "../common/ItemButtons";


import './index.css';
import './index.md.css';
import './index.sm.css';



class ViewCart extends Component {

  componentDidMount() {
    const { user, getCart, getCartAmount } = this.props;
    const { customer_id } = user.customer
    if(customer_id) {
      Promise.all([
        getCart({ cartId: customer_id }),
        getCartAmount({ cartId: customer_id }),
      ]);
    }
  }

  getImageLink(imageName) {
    return imageName ? `${API}/images/products/${imageName}` : "";
  }

  updateCart = (item, quantity) => {
    const { cart, updateCart } = this.props;
    if(cart.isLoading) return;
    updateCart({...item, quantity});
  }

  removeItemFromCart = (item) => {
    const { cart, deleteCartItem } = this.props;
    if(cart.isLoading) return;
    deleteCartItem(item);
  }

  render() {
    const { 
      openModal, 
      closeModal,
      cart,
    } = this.props;
    return (
      <Modal 
        open={openModal}
        modalClassName="view__cart" 
        modalInnerClassName="view__cart__inner">
        <header className="position__rel view__cart__hori__padding">
          <span className="cart__title">
            {cart.data.length} Item(s) In The Cart
          </span>
          { cart.isLoading && <Loader /> }
          <span 
            onClick={closeModal}
            className="position__abs close__icon">
            &#x000D7;
          </span>
        </header>
        <table className="block view__cart__hori__padding">
          <thead className="block">
            <tr 
              className="table__column__label flex space__between">
              <th className="item flex__two">Item</th>
              <th className="size flex__one hide">Size</th>
              <th className="quantity flex__one">Quantity</th>
              <th className="price flex__one">Price</th>
            </tr>
          </thead>
          <tbody className="block">
            {
              cart.data.map((data) => {
                return (
                  <tr 
                    key={data.item_id}
                    className="flex space__between cart__item__list">
                    <td className="item flex__two">
                      <div className="flex">
                        <div className="cart__photo overflow__hidden">
                          <img 
                            className="object__fit" 
                            src={this.getImageLink(data.image)} 
                            alt={data.image} 
                          />
                        </div>
                        <div 
                          className="cart__info flex flex__column space__between">
                          <span className="block cart__item__name capitalize">
                            {data.name}
                          </span>
                          <span className="block uppercase">
                            {data.attributes}
                          </span>
                          <span className="block">
                            <button 
                              onClick={(e) => this.removeItemFromCart(data)}
                              className="cart__remove unset__properties">
                              <Icon 
                                className="red__color" 
                                name="cancel" 
                              />
                              <span>Remove</span>
                            </button>
                          </span>
                        </div>
                        { /* end of cart__info */ }
                      </div>
                    </td>
                    <td 
                      className="size flex__one bold uppercase hide">
                      {data.size}
                    </td>
                    <td className="quantity flex__one">
                      <SelectQuantity 
                        quantity={data.quantity} 
                        onChange={
                          (value)=>this.updateCart(data, value)
                        }
                      />
                    </td>
                    <td className="price flex__one">
                      <PriceCurrency 
                        icon="pound sign" 
                        price={data.price} 
                        className="view__cart__price"
                        iconClassName="view__cart__price__icon"
                      />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <footer className="view__cart__footer view__cart__hori__padding flex space__between">
          <ItemButton 
            name="Back to Shop"  
            className="cart__footer__button footer__button__shop" 
            onClick={closeModal}
          />
          <ItemLink 
            name="Checkout" 
            to="/checkout" 
            className="cart__footer__button" 
            onClick={closeModal}
          />
        </footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openModal: state.ViewCartModal.openModal,
    cart: state.Cart,
    user: state.User,
  }
}

export default connect(
  mapStateToProps, 
  {
    closeModal: () => {
      return actions.createAction(actions.HIDE_VIEW_CART_MODAL);
    },
    getCart,
    getCartAmount,
    deleteCartItem,
    updateCart,
  }
)(ViewCart);
