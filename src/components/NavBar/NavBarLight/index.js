import React from 'react';
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UK_FLAG from "../../../assets/images/Flag_of_Britain.svg";


const infoLinks = [
  {
    path: "/",
    name: "Daily Deals",
  },
  {
    path: "/",
    name: "Sell",
  },
  {
    path: "/",
    name: "Help & Contact",
  },
];


const NavBarLight = ({ OpenViewCartModal }) => {
  return (
    <section className="navbar__light flex">
      <div className="inner__container navbar__inner">
        <ul className="flex space__between align__center margin__vert_auto full__width small__device__flex__col list__style__none">
          <li>
            Hi! <button>Sign in</button> or <button>Register</button>
          </li>
          <li className="flex space__between info__links desktop__items">
            {
              infoLinks.map((data, index) => {
                return (
                  <Link key={index} to={data.path}>{data.name}</Link>
                )
              })
            }
          </li>
          <li className="flex flag__cart small__device__flex__col">
            <div className="flex space__between">
              <span className="uk__flag">
                <img src={UK_FLAG} alt="UK_FLAG" />
              </span>
              <span>
                &pound;GBP
              </span>
            </div>
            <div className="flex space__between">
              <span 
                onClick={OpenViewCartModal}
                className="cart__icon">
                <Icon name="shopping cart" />
                <span className="item__count">6</span>
              </span>
              <span>
                Your bag: 
                &pound;3.99
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavBarLight;
