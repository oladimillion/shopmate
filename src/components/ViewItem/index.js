import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Rating } from 'semantic-ui-react'

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

import shirtphoto1 from "../../assets/images/images-shirt12.png";
import shirtphoto2 from "../../assets/images/images-shirt13.png";
import shirtphoto3 from "../../assets/images/images-shirt14.png";

import './index.css';
import './index.md.css';

const thumbnails = [
  shirtphoto1,
  shirtphoto2,
  shirtphoto3,
];

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
  render() {
    return (
      <div className="viewitem">
        <HorizontalSpacing />
        <div 
          className="viewitem__inner inner__container margin__hori__auto flex flex__wrap space__between white__bg">
          <div className="flex__one viewitem__photo normal__padding">
            <div className="photo__top flex">
              <span className="photo__lg block margin__auto overflow__hidden">
                <img className="object__fit" src={shirtphoto1} alt="photo1" />
              </span>
            </div>
            <HorizontalSpacing />
            <HorizontalSpacing />
            <HorizontalSpacing />
            <ul className="list__style__none photo__thumbnails flex space__between margin__hori__auto">
              {
                thumbnails.map((data, index) => {
                  return (
                    <li key={index}>
                      <span className="photo__sm block overflow__hidden">
                        <img className="object__fit" src={data} alt={`item${index}`} />
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
                defaultRating={3}
                icon='star' 
                size='huge' 
              />
            </div>
            <br/>
            <div className="item__name">
              <h2>
                Super oversized T-Shirt With Raw Sleeve in Brown
              </h2>
            </div>
            <PriceCurrency 
              price="100.99" 
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
                    />
                  )
                })
              }
            </PanelSection>
            <PanelSection 
              title="Quatity" 
              titleClassName="panel__title__style"
              className="radio__button__set flex viewitem__size__panel__width position__rel reset__select__quantity__padding">
              <SelectQuantity quantity="10" />
            </PanelSection>
            <br />
            <div 
              className="flex space__between flex__wrap wish__list">
              <ItemButton 
                name="Add to cart"
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
        <Review />
        <HorizontalSpacing />
        <Popular 
          cardClassName="card__style" 
          title="You may also like" 
        />
        <HorizontalSpacing />
      </div>
    );
  }
}

export default ViewItem;
