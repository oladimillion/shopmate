import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import './index.css';
import './index.md.css';

const categoryLinks = [
  {
    path: "/",
    name: "Women",
  },
  {
    path: "/",
    name: "Men",
  },
  {
    path: "/",
    name: "Kids",
  },
  {
    path: "/",
    name: "Shoes",
  },
  {
    path: "/",
    name: "Brands",
  },
];

const socialLinks = [
  {
    path: "/",
    name: "instagram",
  },
  {
    path: "/",
    name: "pinterest p",
  },
  {
    path: "/",
    name: "twitter",
  },
  {
    path: "/",
    name: "facebook f",
  },
];

/**
 * Footer component
 *
 * @name Footer
 * @function
 * @returns {jsx}
 */
const Footer = () => {
  return (
    <footer className="flex footer">
      <div className="footer__inner margin__auto">
        <ul className="flex space__between category__links list__style__none footer__category__links footer__vert__margin justify__center footer__md__category__links">
          {
            categoryLinks.map((data, index) => {
              return (
                <li key={index}>
                  <Link className="link" to={data.path}>{data.name}</Link>
                </li>
              )
            })
          }
        </ul>
        <ul className="flex list__style__none  footer__vert__margin footer__social__links justify__center">
          {
            socialLinks.map((data, index) => {
              return (
                <li key={index}>
                  <Link 
                    className="flex link"
                    to={data.path}>
                    <Icon 
                      className="social__icon"
                      name={data.name} 
                    />
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <ul className="flex list__style__none  footer__vert__margin footer__final__links justify__center flex__wrap">
          <li className="light_gray__color">&copy; 2019 shopmate Ltd</li>
          <li className="dot light_gray__color">.</li>
          <li>
            <Link className="light_gray__color" 
              to="/">Contact
            </Link>
          </li>
          <li className="dot light_gray__color">.</li>
          <li>
            <Link className="light_gray__color" 
              to="/">Private policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
