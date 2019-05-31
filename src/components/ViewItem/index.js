import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from 'semantic-ui-react'
import PropTypes from "prop-types";

import { 
  getProductById, 
  getProductReview, 
  addCart, 
} from "../../actions";
import API from "../../api";

import Review from "./Review";
import HorizontalSpacing from "../common/HorizontalSpacing";
import PriceCurrency from "../common/PriceCurrency";
import PanelSection from "../common/PanelSection";
import RadioButton from "../common/RadioButton";
import SquareButton from "../common/SquareButton";
import SelectQuantity from "../common/SelectQuantity";
import AddFavourite from "../common/AddFavourite";
import Popular from "../common/Popular";
import { ItemButton } from "../common/ItemButtons";
import Loader from "../common/Loader";

import './index.css';
import './index.md.css';


const levelLinks = [
  {
    name:"Home",
    path: "/",
  },
  {
    name:"All Category",
    path: "/",
  },
  {
    name:"Men's Clothing & Accessories",
    path: "/",
  },
];

const colorButtonList = [
  "skyblue",
  "aquamarine",
  "redpink",
  "red",
  "yellow",
  "green",
  "purple",
];

const squareButtonList = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
];


/**
 * ViewItem
 * @name ViewItem
 * @class
 *
 * @extends {Component}
 */
export class ViewItem extends Component {

  requestSent = false;

  state = {
    productImage: "",
    size: "L",
    color: "red",
  }

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    if(!/[\d]+/.test(this.getParams)){
      this.props.history.push("/");
      return;
    }
    this.getProductAndReview();
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
    this.getProductAndReview();
  }

  /**
   * getDerivedStateFromProps
   *
   * @name getDerivedStateFromProps
   * @function
   * @static
   * @param {object} nextProps
   * @param {object} prevState
   * @returns {object} updated state
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { image, image_2 } = nextProps.productById.data;
    const { productImage } = prevState;
    if(productImage === image || productImage === image_2) {
      return null;
    }
    return {
      productImage: image,
    }
  }

  /**
   * makes request to add item to cart endpoint
   *
   * @name addCart
   * @function
   * @param {object} item
   */
  addCart = (item) => {
    const { user, cart, addCart } = this.props;
    const { customer_id } = user.customer;
    const { size, color } = this.state;
    if(cart.isLoading) return;
    addCart({ 
      cart_id: customer_id, 
      attributes: `${size} ${color}`,
      ...item
    });
  }

  /**
   * gets product id from the url params
   *
   * @name getParams
   * @function
   * @returns {number} product id
   */
  get getParams() {
    return this.props.match.params.id;
  }

  /**
   * makes request to get product by id endpoint
   *
   * @name getProductById
   * @function
   * @param {number} id - product id
   */
  getProductById = (id) => {
    this.props.getProductById(id);
  }

  /**
   * makes request to get product's review endpoint
   *
   * @name getProductReview
   * @function
   * @param {number} id - product id
   */
  getProductReview = (id) => {
    this.props.getProductReview(id);
  }

  /**
   * gets image link from image name
   *
   * @name getImageLink
   * @function
   * @param {string} imageName
   * @returns {string} image link
   */
  getImageLink(imageName) {
    return imageName ? `${API}/images/products/${imageName}` : "";
  }

  /**
   * makes request to get product review and detail endpoints
   *
   * @name makeRequest
   * @function
   */
  makeRequest() {
    this.getProductById(this.getParams);
    this.getProductReview(this.getParams);
  }

  /**
   * get error messages
   *
   * @name getError
   * @function
   * @returns {string} error
   */
  getError() {
    const {
      productById, 
    } = this.props;
    return productById.error;
  }

  /**
   * calls makeRequest function
   *
   * @name getProductAndReview
   * @function
   */
  getProductAndReview() {
    const { 
      productById, 
      productReview, 
      history,
      scrollTo: scrollToProps,
    } = this.props;
    const { data } = productById;
    const error = this.getError();
    if(error) {
      this.requestSent = false;
      history.push("/");
      return;
    }
    if (!this.requestSent && 
      (+this.getParams !== data.product_id) && !error) {
      this.requestSent = true;
      this.makeRequest();
      const scrollTo = scrollToProps || window.scrollTo
      scrollTo({ top: 0, behavior: 'smooth' });
    }
    if(!(productById.isLoading && productReview.isLoading) 
      && this.requestSent) {
      this.requestSent = false;
    }
  }

  /**
   * updates state with color and size attribute
   *
   * @name setAttribute
   * @function
   * @param {object} data
   */
  setAttribute = (data) => {
    this.setState(data);
  }

  /**
   * updates state with product image name
   *
   * @name setProductImage
   * @function
   * @param {string} imageName
   */
  setProductImage = (imageName) => {
    this.setState({ productImage: imageName });
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {

    const { productById, user } = this.props;
    const { data } = productById;
    const { productImage } = this.state;

    return (
      <div className="viewitem">
        <HorizontalSpacing />
        {
          productById.isLoading  ?
            (
              <Loader className="loader__height" />
            ) :
            (
              <div 
                className="viewitem__inner inner__container margin__hori__auto flex flex__wrap space__between white__bg">
                <div className="flex__one viewitem__photo normal__padding">
                  <div className="photo__top flex">
                    <span className="photo__lg block margin__auto overflow__hidden">
                      <img 
                        className="object__fit" 
                        src={
                          this.getImageLink(productImage || data.image)
                        }
                        alt="photo1" 
                      />
                    </span>
                  </div>
                  <HorizontalSpacing />
                  <HorizontalSpacing />
                  <HorizontalSpacing />
                  <ul className="list__style__none photo__thumbnails flex justify__center margin__hori__auto">
                    {
                      [data.image, data.image_2]
                        .map((image, index) => {
                          return (
                            <li 
                              key={index}
                              onClick={
                                (e)=>this.setProductImage(image)
                              }>
                              <span 
                                className="photo__sm block overflow__hidden">
                                <img className="object__fit" 
                                  src={this.getImageLink(image)} 
                                  alt={`item${image}`} 
                                />
                              </span>
                            </li>
                          )
                        })
                    }
                  </ul>
                </div>
                {/*end of viewitem__photo*/}
                <div className="flex__one normal__padding viewitem__info">
                  <div className="level__links__wrapper">
                    <ul className="list__style__none flex level__links sm__level__links">
                      {
                        levelLinks.map(({name, path}) => {
                          return(
                            <li key={name} className="level__link position__rel">
                              <Link to={path}>{name}</Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <br/>
                  <div className="rating__wrapper">
                    <Rating 
                      className="outline__none" 
                      maxRating={5} 
                      defaultRating={5}
                      disabled
                      icon='star' 
                      size='huge' 
                    />
                  </div>
                  <br/>
                  <div className="item__name">
                    <h2>
                      {data.name}
                    </h2>
                  </div>
                  <PriceCurrency 
                    price={data.price} 
                    className="block viewitem__currency"
                  />
                  <PanelSection 
                    title="Color" 
                    titleClassName="panel__title__style"
                    className="radio__button__set flex space__between viewitem__color__panel__width">
                    {
                      colorButtonList.map((colorData, index) => {
                        return (
                          <RadioButton 
                            name="color__set"
                            id={colorData}
                            className={colorData}
                            key={index}
                            onClick={(e)=>this.setAttribute({color: colorData})}
                          />
                        )
                      })
                    }
                  </PanelSection>
                  <PanelSection 
                    title="Size" 
                    titleClassName="panel__title__style"
                    className="radio__button__set flex flex__wrap viewitem__size__panel__width">
                    {
                      squareButtonList.map((squareData, index) => {
                        return (
                          <SquareButton 
                            name="square__set"
                            id={squareData}
                            label={squareData}
                            key={index}
                            onClick={(e)=>this.setAttribute({size: squareData})}
                          />
                        )
                      })
                    }
                  </PanelSection>
                  <PanelSection 
                    title="Quatity" 
                    titleClassName="panel__title__style"
                    className="radio__button__set flex viewitem__size__panel__width position__rel reset__select__quantity__padding">
                    <SelectQuantity quantity="1" />
                  </PanelSection>
                  <br />
                  <div 
                    className="flex space__between flex__wrap wish__list">
                    <ItemButton 
                      name="Add to cart"
                      disable={!user.isAuth}
                      onClick={()=>this.addCart(data)}
                      className="wish__list__button"
                    />
                    <AddFavourite 
                      iconClassName="red__color"
                      name="Add to Wish List"
                    />
                  </div>
                </div>
                {/*end of viewitem__info*/}
              </div>
            )
        }
        <Review 
          {...this.props}
          productId={+this.getParams}
        />
        <HorizontalSpacing />
        <Popular 
          cardClassName="card__style" 
          title="You may also like" 
          {...this.props}
          scrollDistance={342}
        />
        <HorizontalSpacing />
      </div>
    );
  }
}

ViewItem.propTypes = {
  productById: PropTypes.object.isRequired,
  productReview: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getProductById: PropTypes.func.isRequired,
  getProductReview: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
  scrollTo: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    productById: state.ProductById,
    productReview: state.ProductReview,
    user: state.User,
    cart: state.Cart,
  }
};

export default connect(mapStateToProps, {
  getProductById,
  getProductReview,
  addCart,
})(ViewItem);
