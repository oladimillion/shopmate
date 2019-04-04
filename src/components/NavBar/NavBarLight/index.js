import React from 'react';
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UK_FLAG from "../../../assets/images/Flag_of_Britain.svg";


const NavBarLight = () => {
  return (
    <section className="navbar__light flex">
      <div className="inner__container navbar__inner">
        <ul className="flex space__between align__center margin__vert_auto full__width small__device__flex__col">
          <li>
            Hi! <button>Sign in</button> or <button>Register</button>
          </li>
          <li className="flex space__between info__links desktop__items">
            <Link to="/">Daily Deals</Link>
            <Link to="/">Sell</Link>
            <Link to="/">Help & Contact</Link>
          </li>
          <li className="flex flag__cart small__device__flex__col">
            <div className="flex space__between">
              <span className="uk__flag">
                <img src={UK_FLAG} alt="UK_FLAG" />
              </span>
              <span>
                <Icon name="pound sign" />
                GBP
              </span>
            </div>
            <div className="flex space__between">
              <span className="cart__icon">
                <Icon name="shopping cart" />
                <span className="item__count">6</span>
              </span>
              <span>
                Your bag: 
                <Icon name="pound sign" />
                3.99
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavBarLight;
