import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from 'semantic-ui-react'

import { getProductById, getProductReview, addCart } from "../../actions";
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


class ViewItem extends Component {

  requestSent = false;

  state = {
    productImage: this.props.productById.data.image,
    size: "L",
    color: "red",
  }

  componentDidMount() {
    if(!/[\d]+/.test(this.getParams)){
      this.props.history.push("/");
      return;
    }
    this.getProductAndReview();
  }

  componentDidUpdate(prevProps, prevState) {
    this.getProductAndReview();
  }

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

  get getParams() {
    return this.props.match.params.id;
  }

  getProductById = (id) => {
    this.props.getProductById(id);
  }

  getProductReview = (id) => {
    this.props.getProductReview(id);
  }

  getImageLink(imageName) {
    return imageName ? `${API}/images/products/${imageName}` : "";
  }

  makeRequest() {
    this.getProductById(this.getParams);
    this.getProductReview(this.getParams);
  }

  getProductAndReview() {
    const { productById } = this.props;
    const { data, error } = productById;
    if (!this.requestSent && 
      (+this.getParams !== data.product_id) && !error) {
      this.makeRequest();
      this.requestSent = true;
      this.setState({ productImage: "" });
    }
    if(!productById.isLoading && this.requestSent) {
      this.requestSent = false;
    }
  }

  setAttribute = (data) => {
    this.setState(data);
  }

  setProductImage = (imageName) => {
    this.setState({ productImage: imageName });
  }

  render() {

    const { productById, productReview, user } = this.props;
    const { data } = productById;
    const { productImage } = this.state;

    return (
      <div className="viewitem">
        <HorizontalSpacing />
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
              className="radio__button__set flex viewitem__size__panel__width">
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
            {
              user.isAuth && (
                <div 
                  className="flex space__between flex__wrap wish__list">
                  <ItemButton 
                    name="Add to cart"
                    onClick={()=>this.addCart(data)}
                    className="wish__list__button"
                  />
                  <AddFavourite 
                    iconClassName="red__color"
                    name="Add to Wish List"
                  />
                </div>
              )
            }
          </div>
          {/*end of viewitem__info*/}
        </div>
        <Review 
          productId={+this.getParams}
          productReview={productReview} 
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
