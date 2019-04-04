import React from 'react';
import { Link } from "react-router-dom";
import FeaturedImage from "../../../assets/images/images-shoe2.png";

import "./index.css";


const Featured = () => {
  return (
    <div 
      className="inner__container position__rel  margin__hori_auto featured">
      <span className="bg__image ">
        <img src={FeaturedImage} alt="img" />
      </span>
      <div className="featured__inner position__rel z-index10 flex flex__column space__between">
        <h1>Converse</h1>
        <h5>Explore styles tough enough to handle all your workouts</h5>
        <Link to="/" className="item__button item__button__light block text__center brand__button">
          Shop Brand
        </Link>
      </div>
    </div> 
  )
}

export default Featured;
