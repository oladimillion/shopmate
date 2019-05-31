import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { 
  addCart,
  getPopularProducts,
} from "../../../actions";

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
export class Popular extends Component {

  LIMIT = 6;
  requestSent = false;
  buyProductRequestSent = false;

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
   * adds an item to cart and route to checkout page
   *
   * @name buyProduct
   * @function
   * @param {object} product
   */
  buyProduct = (product) => {
    this.buyProductRequestSent = true;
    const { user, cart, addCart } = this.props;
    const { customer_id } = user.customer;
    if(!user.isAuth || cart.isLoading) return;
    addCart({ 
      cart_id: customer_id, 
      attributes: "L Red",
      ...product,
    });
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
    const {
      scrollDistance: SCROLL_DISTANCE, 
      document: propsDocument,
    } = this.props;
    const scrollElement = (propsDocument || document).getElementById("popular");
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
                                onClick={this.buyProduct}
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

Popular.propTypes = {
  document: PropTypes.object,
  title: PropTypes.string.isRequired,
  cardClassName: PropTypes.string,
  popularProducts: PropTypes.object.isRequired,
  addCart: PropTypes.func.isRequired,
  getPopularProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    popularProducts: state.PopularProducts,
    user: state.User,
    cart: state.Cart,
  }
};

export default connect(mapStateToProps, {
  addCart,
  getPopularProducts,
})(Popular);
