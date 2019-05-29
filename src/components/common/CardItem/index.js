import React from "react";
import PropTypes from "prop-types";

import PriceCurrency from "../PriceCurrency";
import AddFavourite from "../../common/AddFavourite";
import { ItemLink, ItemButton } from "../../common/ItemButtons";

import API from "../../../api";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";


const func = ()=>{};

/**
 * CardItem
 *
 * @name CardItem
 * @function
 * @prop {string} className
 * @prop {object} product
 * @returns {jsx}
 */
const CardItem = ({ className, product, onClick }) => {
  const { name, price, product_id, thumbnail } = product || {};
  return (
    <div className={`card position__rel box__shadow__normal card__margin__right card__sm__no__margin__right ${className || ""}`}>
      <div className="item__photo margin__auto block">
        <img 
          className="object__fit"
          src={`${API}/images/products/${thumbnail}`} 
          alt="productImg" 
        />
        <div className="item__photo__hover flex">
          <div className="hover__content margin__auto flex flex__column space__between">
            <span className="content__icon block margin__hori__auto">
              <AddFavourite />
            </span>
            <span 
              className="block content__button margin__hori_auto">
              <ItemLink 
                name="Quick View" 
                to={`/${product_id}`} 
                className="text__center quick__view"
              />
            </span>
          </div>
        </div>
      </div>
      <span className="item__title block text__center">
        { name ||  "" }
      </span>
      <PriceCurrency
        price={price} 
        className="block text__center"
      />
      <span className="block">
        <ItemButton 
          onClick={()=>onClick(product) || func}
          name="Buy now" className="margin__hori__auto" />
      </span>
    </div>
  )
}

CardItem.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default CardItem;
