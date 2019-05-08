import React from 'react';
import { Icon } from "semantic-ui-react";

import "./index.css";
import "./index.md.css";


const NewsLetter = () => {
  return (
    <div 
      className="inner__container position__rel  margin__hori__auto newsletter">
      <div className="newsletter__inner flex newsletter__sm__flex__column">
        <div className="flex__one subscribe__info flex align__center sm__subscribe__info">
          <h3 className="">SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS</h3>
        </div>
        <form className="newsletter__form flex flex__wrap space__between sm__newsletter__form">
          <span className="form__input__wrapper block position__rel">
            <span className="input__icon input__left__icon subscribe__icon">
              <Icon name="envelope outline" />
            </span>
            <input 
              autoComplete="off"
              className="item__input form_input"
              type="email" 
              name="subscribe"
              placeholder="Your e-mail here"
            />
          </span>
          <button type="submit" className="item__button block">
            Subscribe
          </button>
        </form>
      </div>
    </div> 
  )
}

export default NewsLetter;
