import React, { Component } from 'react';
import { connect } from "react-redux";

import { getPopularProducts } from "../../../actions";

import CardItem from "../CardItem"
import RoundButton from "../RoundButton"
import Loader from "../Loader"

import "./index.css";


/**
 * Popular
 * @name Popular
 * @class
 *
 * @extends {Component}
 */
class Popular extends Component {

  LIMIT = 6;
  requestSent = false;

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    this.getPopularProducts();
  }

  /**
   * componentDidUpdate
   *
   * @name componentDidUpdate
   * @function
   * @param {object} prevProps
   * @param {object} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    this.getPopularProducts();
  }

  /**
   * makes request to get product endpoint
   *
   * @name getPopularProducts
   * @function
   */
  getPopularProducts() {
    const limit = this.LIMIT;
    const { popularProducts } = this.props;
    let page = (Math.random() * 10 | 1);
    page = page < 1 ? 1 : page;
    const query = `?page=${page}&limit=${limit}`;
    if(!popularProducts.count && !this.requestSent) {
      this.requestSent = true;
      this.props.getPopularProducts(query);
    }
  }

  /**
   * handles smooth horizontal scrolling
   *
   * @name horizontalScroll
   * @function
   * @param {string} dir - direction
   */
  horizontalScroll(dir) {
    const { SCROLL_DISTANCE, document: propsDocument } = this.props.scrollDistance;
    const doc = propsDocument || document;
    const scrollElement = doc.getElementById("popular");
    switch(dir){
      case "LEFT":
        scrollElement.scrollBy(-1 * SCROLL_DISTANCE, 0);
        break;
      case "RIGHT":
        scrollElement.scrollBy(SCROLL_DISTANCE, 0);
        break;
      default:
        scrollElement.scrollBy(-1 * SCROLL_DISTANCE, 0);
        break;
    }
  }

  /**
   * render
   *
   * @name render
   * @function
   *
   * @returns {jsx}
   */
  render() {
    const { title, cardClassName, popularProducts } = this.props;
    return (
            <div
              className="inner__container  margin__hori__auto position__rel">
              <h1>{title}</h1>
              <div className="scroll scroll__left">
                <RoundButton
                  onClick={(e) => this.horizontalScroll("LEFT")}
                  icon="angle left"
                />
              </div>
              {
                popularProducts.isLoading ? 
                  (
                    <Loader className="popular__loader__height" />
                  ) :
                  (
                    <div
                      id="popular"
                      className="flex scroll__hori__overflow popular position__rel">
                      {
                        popularProducts.data
                          .map((product, index) => {
                          return (
                            <div
                              key={index}
                              className="popular__items">
                              <CardItem
                                className={`card__width ${cardClassName || ""}`}
                                product={product}
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                  )
              }
              <div className="scroll scroll__right">
                <RoundButton
                  onClick={(e) => this.horizontalScroll("RIGHT")}
                  icon="angle right"
                />
              </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularProducts: state.PopularProducts,
  }
};

export default connect(mapStateToProps, {
  getPopularProducts,
})(Popular);
