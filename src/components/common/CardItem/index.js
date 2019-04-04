import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import shirtImg from "../../../assets/images/shirt.png";

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
            <span className="content__icon block text__center">
              <button className="unset__properties">
                <Icon name="heart outline" />
              </button>
            </span>
            <span 
              className="block content__button margin__hori_auto">
              <Link to="/" 
                className="item__button block text__center">
                Quick View
              </Link> 
            </span>
          </div>
        </div>
      </div>

      <span className="item__title block text__center">
        Men's Knitwear Offers
      </span>
      <span className="item__price block text__center">
        <Icon name="pound sign" />
        3.99
      </span>
      <span className="block">
        <button className="block item__button margin__hori_auto ">
          Buy now
        </button>
      </span>
    </div>
  )
}

export default CardItem;
