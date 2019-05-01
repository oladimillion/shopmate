import React from 'react';

import PriceCurrency from "../PriceCurrency";
import AddFavourite from "../../common/AddFavourite";
import { ItemLink, ItemButton } from "../../common/ItemButtons";

import shirtImg from "../../../assets/images/images-shirt14.png";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";



const CardItem = ({ className }) => {
  return (
    <div className={`card position__rel box__shadow__normal card__margin__right card__sm__no__margin__right ${className || ""}`}>
      <div className="item__photo margin__auto block">
        <img 
          className="object__fit"
          src={shirtImg} alt="shirtImg" 
        />
        <div className="item__photo__hover flex">
          <div className="hover__content margin__auto flex flex__column space__between">
            <span className="content__icon block margin__hori__auto">
              <AddFavourite />
            </span>
            <span 
              className="block content__button margin__hori_auto">
              <ItemLink name="Quick View" to="/myid" className="text__center quick__view"/>
            </span>
          </div>
        </div>
      </div>
      <span className="item__title block text__center">
        Men's Knitwear Offers
      </span>
      <PriceCurrency
        price="3.99" 
        className="block text__center"
      />
      <span className="block">
        <ItemButton name="Buy now" className="margin__hori__auto" />
      </span>
    </div>
  )
}

export default CardItem;
