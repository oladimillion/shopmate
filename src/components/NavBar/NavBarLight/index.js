import React, { useState } from 'react';
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import USA_FLAG from "../../../assets/images/usa-flag.svg";


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


const NavBarLight = ({ 
  openLoginModal,
  openRegisterModal,
  openViewCartModal,
  user,
  logout,
  cart,
  cartQuantity,
}) => {

  const [showUserOption, setUserOption] = useState(false);

  return (
    <section className="navbar__light flex">
      <div className="inner__container navbar__inner">
        <ul className="flex space__between align__center margin__vert_auto full__width small__device__flex__col list__style__none">
          {
            !user.isAuth && (
              <li>
                <span>Hi! {" "}</span>
                <button 
                  onClick={openLoginModal}>
                  Sign in
                </button>
                {" "} or {" "}
                <button 
                  onClick={openRegisterModal}>
                  Register
                </button>
              </li>
            )
          }
          {
            user.isAuth && (
              <li>
                <span className="inline__block welcome">
                  Welcome {" "}
                </span>
                <button 
                  onClick={(e) => setUserOption((state) => !state)}
                  className="user__option capitalize position__rel">
                  {user.customer.name}{" "}
                  <span 
                    className="user__option__icon inline__block">
                    &#9661;
                  </span>
                  {
                    showUserOption && (
                      <div 
                        className="user__option__dropdown position__abs">
                        <Link 
                          className="flex space__between" 
                          to="/profile">
                          <span className="option__icon">
                            <Icon name="user outline" /> 
                          </span>
                          <span className="option__label">
                            Profile
                          </span>
                        </Link>
                        <Link 
                          onClick={logout}
                          className="flex space__between" 
                          to="/">
                          <span className="option__icon">
                            <Icon name="sign-out" /> 
                          </span>
                          <span className="option__label">
                            Logout
                          </span>
                        </Link>
                      </div>
                    )
                  }
                </button>
              </li>
            )
          }
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
              <span className="state__flag">
                <img src={USA_FLAG} alt="USA_FLAG" />
              </span>
              <span>
                &#x00024;USD
              </span>
            </div>
            {
              user.isAuth && (
                <div className="flex space__between">
                  <span 
                    onClick={openViewCartModal}
                    className="cart__icon">
                    <Icon name="shopping cart" />
                    <span className="item__count">{cartQuantity}</span>
                  </span>
                  <span>
                    Your bag: &#x00024;
                    <span>{cart.totalAmount}</span>
                  </span>
                </div>
              )
            }
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavBarLight;
