import React from 'react';
import CardItem from "../../common/CardItem"

import "./index.css";
// import "./index.md.css";
// import "./index.sm.css";

const items = [1,2,3,4];

const Popular = ({ title }) => {
  return (
    <div 
      className="inner__container  margin__hori_auto">
      <h1>{title}</h1>
      <div className="flex scroll__hori__overflow popular">
        {
          items.map((_, index) => {
            return (
              <div 
                key={index} 
                className="popular__items">
                <CardItem className="card__width" />
              </div>
            )
          })
        }
      </div>
    </div> 
  )
}

export default Popular;
