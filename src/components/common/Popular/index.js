import React from 'react';
import CardItem from "../../common/CardItem"
import RoundButton from "../../common/RoundButton"

import "./index.css";

const items = [1,2,3,4,5];

function horizontalScroll(dir) {
  const SCROLL_DISTANCE = 320;
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

const Popular = ({ title, cardClassName }) => {
  return (
    <div 
      className="inner__container  margin__hori__auto position__rel">
      <h1>{title}</h1>
      <div className="scroll scroll__left">
        <RoundButton 
          onClick={(e) => horizontalScroll("LEFT")}
          icon="angle left" 
        />
      </div>
      <div
        id="popular"
        className="flex scroll__hori__overflow popular position__rel">
        {
          items.map((_, index) => {
            return (
              <div 
                key={index}
                className="popular__items">
                <CardItem 
                  className={`card__width ${cardClassName || ""}`}
                />
              </div>
            )
          })
        }
      </div>
      <div className="scroll scroll__right">
        <RoundButton 
          onClick={(e) => horizontalScroll("RIGHT")}
          icon="angle right" 
        />
      </div>
    </div>
  )
}

export default Popular;
