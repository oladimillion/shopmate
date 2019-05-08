import React from 'react';
import { Link } from "react-router-dom";
import CategoryNavSectionBg from "../../../assets/images/Images-modal4.png";
import "./index.css";

const CategoryNavSection = () => {
  return (
    <section className="inner__container category__nav__section flex margin__auto position__rel ">
      <span className="bg__image bg__fade70">
        <img className="" src={CategoryNavSectionBg} alt="img" />
      </span>
      <div className="inner__category margin__auto">
        <h1 className="position__rel category__title">Men's Ware</h1>
        <div className="position__rel flex space__between flex__wrap">
          <ul className="list__style__none category__item__links">
            <li><Link to="/">Accessories</Link></li>
            <li><Link to="/">ASOS Basic Tops</Link></li>
            <li><Link to="/">Bags</Link></li>
            <li><Link to="/">Caps & Hats</Link></li>
            <li><Link to="/">Gifts</Link></li>
            <li><Link to="/">Grooming</Link></li>
          </ul>
          <ul className="list__style__none category__item__links">
            <li><Link to="/">Hoodies & Sweatshirts</Link></li>
            <li><Link to="/">Jackets & Coats</Link></li>
            <li><Link to="/">Jeans</Link></li>
            <li><Link to="/">Jewellery</Link></li>
            <li><Link to="/">Joggers</Link></li>
            <li><Link to="/">Jumpers & Cardigans</Link></li>
          </ul>
          <ul className="list__style__none category__item__links">
            <li><Link to="/">Leather Jackets</Link></li>
            <li><Link to="/">Long Sleeve T-Shirts</Link></li>
            <li><Link to="/">Loungewear</Link></li>
            <li><Link to="/">Oversized & Longline</Link></li>
            <li><Link to="/">Polo Shirts</Link></li>
            <li><Link to="/">Shirts</Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CategoryNavSection;



