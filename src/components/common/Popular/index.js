import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import { getProducts, getPopularProducts } from "../../../actions";

import CardItem from "../../common/CardItem"
import RoundButton from "../../common/RoundButton"

import "./index.css";


class Popular extends Component {

  LIMIT = 6;
  ran = false;

  componentDidMount() {
    this.getPopularProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    this.getPopularProducts();
  }

  getPopularProducts() {
    const limit = this.LIMIT;
    const { popularProducts } = this.props;
    let page = (Math.random() * 10 | 1);
    page = page < 1 ? 1 : page;
    const query = `?page=${page}&limit=${limit}`;
    if(!popularProducts.count && !this.ran) {
      this.ran = true;
      this.props.getPopularProducts(query);
    }
  }

  horizontalScroll(dir) {
    const SCROLL_DISTANCE = this.props.scrollDistance;
    const scrollElement = document.getElementById("popular");
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

  render() {
    const { title, cardClassName, popularProducts } = this.props;
    return (
      <Fragment>
        {
          !popularProducts.length && 
            (
              <div
                className="inner__container  margin__hori__auto position__rel">
                <h1>{title}</h1>
                <div className="scroll scroll__left">
                  <RoundButton
                    onClick={(e) => this.horizontalScroll("LEFT")}
                    icon="angle left"
                  />
                </div>
                <div
                  id="popular"
                  className="flex scroll__hori__overflow popular position__rel">
                  {
                    popularProducts.rows.map((product, index) => {
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
                <div className="scroll scroll__right">
                  <RoundButton
                    onClick={(e) => this.horizontalScroll("RIGHT")}
                    icon="angle right"
                  />
                </div>
              </div>
            )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularProducts: state.PopularProducts,
    allProduct: state.AllProduct,
  }
};

export default connect(mapStateToProps, {
  getProducts,
  getPopularProducts,
})(Popular);
