import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";

import * as actions from "../../actions";

import SelectQuantity from "../common/SelectQuantity";
import PriceCurrency from "../common/PriceCurrency";
import Modal from "../common/Modal";
import { ItemButton, ItemLink } from "../common/ItemButtons";

import shirt from "../../assets/images/images-shirt12.png";

import './index.css';
import './index.md.css';
import './index.sm.css';

const dummyData = [
  {
    name: "Green T shirt 2016",
    size: "S",
    price: 1,
    quatity: 1,
  },
  {
    name: "Blue T shirt 2016",
    size: "XXL",
    price: 200,
    quatity: 5,
  },
  {
    name: "Red T shirt 2016",
    size: "X",
    price: 2,
    quatity: 2,
  },
  {
    name: "Green T shirt 2019",
    size: "M",
    price: 17,
    quatity: 9,
  },
  {
    name: "Green T shirt 2000",
    size: "XL",
    price: 20,
    quatity: 90,
  },
]

class ViewCart extends Component {
 
  render() {
    const { openModal, closeModal } = this.props;
    return (
      <Modal 
        open={openModal}
        modalClassName="view__cart" 
        modalInnerClassName="view__cart__inner">
        <header className="position__rel view__cart__hori__padding">
          <span className="cart__title">
            4 Item(s) In The Cart
          </span>
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
              <th className="size flex__one">Size</th>
              <th className="quantity flex__one">Quantity</th>
              <th className="price flex__one">Price</th>
            </tr>
          </thead>
          <tbody className="block">
            {
              dummyData.map((data, index) => {
                return (
                  <tr 
                    key={index}
                    className="flex space__between cart__item__list">
                    <td className="item flex__two">
                      <div className="flex">
                        <div className="cart__photo overflow__hidden">
                          <img 
                            className="object__fit" 
                            src={shirt} 
                            alt={`item${index}`} 
                          />
                        </div>
                        <div 
                          className="cart__info flex flex__column space__between">
                          <span className="block cart__item__name capitalize">
                            {data.name}
                          </span>
                          <span className="block uppercase">
                            MEN BK5628
                          </span>
                          <span className="block">
                            <button 
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
                      className="size flex__one bold uppercase">
                      {data.size}
                    </td>
                    <td className="quantity flex__one">
                      <SelectQuantity quantity={data.quatity} />
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
    openModal: state.ViewCartModal.openModal
  }
}

export default connect(
  mapStateToProps, 
  {
    closeModal: () => {
      return actions.createAction(actions.HIDE_VIEW_CART_MODAL);
    },
  }
)(ViewCart);
