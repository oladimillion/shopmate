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


const NavBarLight = ({ 
  openLoginModal,
  openRegisterModal,
  openViewCartModal,
  user,
  logout,
  cart,
  cartQuantity,
}) => {
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
                <span>
                  Welcome {" "}
                </span>
                <button 
                  className="user__option capitalize position__rel">
                  {user.customer.name}
                  <div 
                    className="user__option__dropdown position__abs">
                    <Link 
                      className="block" 
                      to="/profile">
                      Profile
                    </Link>
                    <Link 
                      onClick={logout}
                      className="block" 
                      to="/">
                      Logout
                    </Link>
                  </div>
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
              <span className="uk__flag">
                <img src={UK_FLAG} alt="UK_FLAG" />
              </span>
              <span>
                &pound;GBP
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
                    Your bag: &pound;
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
