import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react'
import HorizontalSpacing from "../../common/HorizontalSpacing";
import RoundButton from "../../common/RoundButton";

import "./index.css";
import "./index.sm.css";

const dummyData = [
  {
    defaultRating: 1,
    name: "Oladimeji Akande",
  },
  {
    defaultRating: 5,
    name: "Kola Idris",
  },
  {
    defaultRating: 2,
    name: "Donald Trump",
  },
  {
    defaultRating: 3,
    name: "Barack Obama",
  },
  {
    defaultRating: 0,
    name: "Mohameed Buhari",
  },
];

class Review extends Component {
  render() {
    return (
      <div className="review inner__container margin__hori__auto border__bottom">
        <HorizontalSpacing />
        <h2>Product Reviews</h2>
        <ul className="list__style__none review__list">
          {
            dummyData.map((data, index) => {
              return (
                <li key={index} className="flex flex__wrap">
                  <div className="reviewer">
                    <div className="rating__wrapper">
                      <Rating 
                        className="outline__none" 
                        maxRating={5} 
                        defaultRating={data.defaultRating}
                        icon='star' 
                        size='huge' 
                      />
                    </div>
                    <br />
                    <div className="reviewer__detail">
                      <span className="block reviewer__name">
                        {data.name}
                      </span>
                      <span className="block review__timestamps">
                        an hour ago
                      </span>
                    </div>
                  </div>
                  {/* end of reviewer */}
                  <div className="review__detail flex__one">
                    <div className="review__text">
                      Ipsum voluptatum possimus veniam id tempore Incidunt mollitia obcaecati quaerat 
                      Consectetur hic eum corrupti dolore suscipit? Laudantium est obcaecati nam sit at Necessitatibus quis debitis magni quae voluptates! Eaque quasi.
                    </div>
                    <br />
                    <div className="review__reaction">
                      <div 
                        className="reaction__icons flex space__between">
                        <span className="flex">
                          <RoundButton 
                            icon="heart outline"
                            iconClassName="red__color"
                            className="margin__none"
                          />
                          <span className="review__figures">116</span>
                        </span>
                        <span className="flex">
                          <RoundButton 
                            icon="comment outline"
                            className="margin__none"
                          />
                          <span className="review__figures">32</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* end of review__detail */}
                </li>
              )
            })
          }
        </ul>
        <HorizontalSpacing />
        <span className="border__bottom"></span>
        <HorizontalSpacing />
        <h2>Add a review</h2>
        <form className="review__form">
          <ul className="list__style__none">
            <li className="flex flex__wrap review__form__list">
              <label 
                htmlFor="text__input" 
                className="review__form__label">
                Choose a nickname
              </label>
              <span className="form__input__wrapper flex__one">
                <input 
                  type="text" 
                  id="text__input"
                  className="review__form__input text__input" 
                />
              </span>
            </li>
            <li className="flex flex__wrap review__form__list">
              <label 
                htmlFor="text__area"
                className="review__form__label">
                Your review
              </label>
              <span 
                className="form__input__wrapper position__rel text__area__wrapper flex__one">
                <textarea 
                  id="text__area"
                  className="review__form__input text__area">
                </textarea>
                <span className="tiny__info flex flex__wrap">
                  <span>Your review must be at least 50 characters</span>
                  <span className="red__color">Full review guideline</span>
                </span>
              </span>
            </li>
            <li className="flex flex__wrap review__form__list">
              <label className="review__form__label">
                Overall rating
              </label>
              <span 
                className="form__input__wrapper position__rel flex__one">
                <Rating 
                  className="outline__none" 
                  maxRating={5} 
                  defaultRating={0}
                  icon='star' 
                  size='huge' 
                />
              </span>
            </li>
            <li className="flex flex__wrap review__form__list">
              <label 
                className="review__form__label">
              </label>
              <span 
                className="form__input__wrapper position__rel">
                <button 
                  type="submit"
                  className="item__button block review__submit__button">
                  Submit
                </button>
              </span>
            </li>
          </ul>
        </form>
        <HorizontalSpacing />
      </div>
    )
  }
}

export default Review;
