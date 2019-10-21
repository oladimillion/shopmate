import React, { Component } from "react";
import { connect } from "react-redux";
import { Rating } from "semantic-ui-react"
import PropTypes from "prop-types";
import Moment from "react-moment";

import { addProductReview } from "../../../actions";
import * as actions from "../../../actions";

import formatErrorMessage from "../../../utils/formatErrorMessage";

import HorizontalSpacing from "../../common/HorizontalSpacing";
import RoundButton from "../../common/RoundButton";
import Loader from "../../common/Loader";
import MessageAlert from "../../common/MessageAlert";

import "./index.css";
import "./index.sm.css";



/**
 * Review
 * @name Review
 * @class
 *
 * @extends {Component}
 */
export class Review extends Component {

  state = {
    product_id: this.props.productId,
    review: "",
    rating: 1,
  }

  requestSent = false;

  /**
   * componentDidUpdate
   *
   * @name componentDidUpdate
   * @function
   */
  componentDidUpdate() {
    const { productReview } = this.props;
    if(!productReview.isLoading && this.requestSent) {
      this.requestSent = false;
      this.setState({
        rating: 1,
        review: ""
      });
    }
  }

  /**
   * update state with form input data
   *
   * @name onChange
   * @function
   * @param {object} data
   */
  onChange = (data) => {
    this.setState(data);
  }

  /**
   * makes request to add review endpoint
   *
   * @name onSubmit
   * @function
   * @param {object} e
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { productReview, addProductReview } = this.props;
    if(productReview.isLoading || !this.isValidData()) return;
    this.requestSent = true;
    addProductReview(this.state);
  }

  /**
   * dispatch error message to the store
   *
   * @name setErrorMessage
   * @function
   * @param {string} message
   */
  setErrorMessage(message) {
    this.props.setErrorMessage({
      error: {
        message,
      }
    })
  }

  /**
   * checks whether review data is valid
   *
   * @name isValidData
   * @function
   * @returns {boolean}
   */
  isValidData() {
    const { review } = this.state;
    if(review.trim().length < 5){
      this.setErrorMessage("Review must be at least 5 characters");
      return false;
    }
    return true;
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {

    const { productReview, user } = this.props;
    const { review, rating } = this.state;
    const { error, message } = productReview;

    return (
      <div className="review inner__container margin__hori__auto border__bottom">
        <HorizontalSpacing />
        <h2>Product Reviews</h2>
        <ul className="list__style__none review__list">
          { 
            !productReview.data.length && !productReview.isLoading &&  (
              <li className="flex flex__wrap">
                <h5>No review</h5>
              </li>
            ) 
          }
          {
            productReview.data.map((data, index) => {
              return (
                <li key={index} className="flex flex__wrap">
                  <div className="reviewer">
                    <div className="rating__wrapper">
                      <Rating 
                        className="outline__none" 
                        maxRating={5} 
                        defaultRating={data.rating}
                        disabled
                        icon="star" 
                        size="huge" 
                      />
                    </div>
                    <div className="reviewer__detail">
                      <span className="block reviewer__name">
                        {data.name}
                      </span>
                      <span className="block review__timestamps">
                        <Moment fromNow>{data.created_on}</Moment>
                      </span>
                    </div>
                  </div>
                  {/* end of reviewer */}
                  <div className="review__detail flex__one">
                    <div className="review__text md__min__width">
                      {data.review}
                    </div>
                    <br />
                    <div className="review__reaction hide">
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
        {
          productReview.isLoading && <Loader />
        }
        {
          user.isAuth &&(
            <React.Fragment>
              <HorizontalSpacing />
              <h2>Add a review</h2>
              <form onSubmit={this.onSubmit} className="review__form">
                <ul className="list__style__none">
                  <li className="flex flex__wrap review__form__list">
                    <label 
                      htmlFor="text__input" 
                      className="review__form__label">
                      Your name
                    </label>
                    <span className="form__input__wrapper flex__one">
                      <input 
                        type="text" 
                        id="text__input"
                        disabled
                        value={user.customer.name}
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
                        value={review}
                        onChange={
                          (e)=>this.onChange({review: e.target.value})
                        }
                        className="review__form__input text__area">
                      </textarea>
                      <span className="tiny__info flex flex__wrap">
                        <span>Your review must be at least 5 characters</span>
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
                        defaultRating={rating}
                        onRate={
                          (e,{rating})=>this.onChange({rating})
                        }
                        icon="star" 
                        size="huge" 
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
                  <li>
                    <br />
                    <MessageAlert
                      message={error ? formatErrorMessage(error.error) : message}
                      hasError={!!error}
                    />
                    <br />
                  </li>
                </ul>
              </form>
            </React.Fragment>
          )
        }
        <HorizontalSpacing />
      </div>
    )
  }
}

Review.propTypes = {
  user: PropTypes.object.isRequired,
  productReview: PropTypes.object.isRequired,
  addProductReview: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.User,
  }
}

export default connect(mapStateToProps, {
  addProductReview,
  setErrorMessage: (data) => {
    return actions.createAction(actions.ADD_PRODUCT_REVIEW_FAILURE, data);
  },
})(Review);
