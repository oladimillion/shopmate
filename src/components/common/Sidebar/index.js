import React from 'react';
import { Icon } from "semantic-ui-react";
import RadioButton from "../../common/RadioButton";
import SquareButton from "../../common/SquareButton";
import RadioLabel from "../../common/RadioLabel";

import './index.css';
import './index.sm.css';

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

const departmentList = [
  "Regional",
  "Nature",
  "Seasonal",
];

const categoryList = [
  "French",
  "Italian",
  "Irish",
  "Animal",
  "Flower",
  "Christmas",
  "Valentine",
];

const Sidebar = () => {
  return (
    <aside className="sidebar box__shadow__normal sm__sidebar">
      <div className="filter__summary gray__bg gray__border__bottom sidebar__padding">
        <span className="filter__title">
          Filter <span>462</span> items
        </span>
        <ul className="filter__params list__style__none">
          <li>
            <Icon className="cancel__icon" name="cancel" />
            <span className="gray__color">Gender: </span>
            <span>Women</span>
          </li>
          <li>
            <Icon className="cancel__icon" name="cancel" />
            <span className="gray__color">Category: </span>
            <span>Dress</span>
          </li>
        </ul>
      </div>
      <div className="filter__panel white__bg gray__border__bottom sidebar__padding">
        <div className="panel__section">
          <span 
            className="filter__title gray__color panel__title block">
            Color
          </span>
          <span 
            className="radio__button__set flex space__between">
            {
              colorButtonList.map((colorData, index) =>{
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
          </span>
        </div>

        <div className="panel__section">
          <span 
            className="filter__title gray__color panel__title block">
            Size
          </span>
          <span 
            className="square__button__set flex flex__wrap">
            {
              squareButtonList.map((squareData, index) =>{
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
          </span>
        </div>

        <div className="panel__section">
          <span 
            className="filter__title gray__color panel__title block">
            Department
          </span>
          <span 
            className="department__set block">
            {
              departmentList.map((departmentData, index) =>{
                return (
                  <RadioLabel 
                    name="radio__label__set"
                    id={departmentData}
                    label={departmentData}
                    key={index}
                  />
                )
              })
            }
          </span>
        </div>

        <div className="panel__section">
          <span 
            className="filter__title gray__color panel__title block">
            Category
          </span>
          <span 
            className="department__set block">
            {
              categoryList.map((categoryData, index) =>{
                return (
                  <RadioLabel 
                    name="radio__label__set"
                    id={categoryData}
                    label={categoryData}
                    key={index}
                  />
                )
              })
            }
          </span>
        </div>

      </div>
      <div className="sidebar__footer flex space__between sidebar__padding gray__bg">
        <span className="block">
          <button className="block item__button ">Apply</button>
        </span>
        <button className="sidebar__footer__cancel">
          <Icon className="cancel__icon" name="cancel" />
          <span>Clear All</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
