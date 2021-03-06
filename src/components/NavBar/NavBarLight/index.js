import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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


/**
 * NavBarLight
 *
 * @name NavBarLight
 * @function
 * @prop {function} openLoginModal 
 * @prop {function} openRegisterModal 
 * @prop {function} openViewCartModal 
 * @prop {object} user 
 * @prop {object} cart 
 * @prop {number} cartQuantity 
 * @prop {function} logout 
 * @returns {jsx}
 */
const NavBarLight = ({ 
  openLoginModal,
  openRegisterModal,
  openViewCartModal,
  openViewOrderModal,
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
                        <span 
                          role="link"
                          onClick={openViewOrderModal}
                          className="flex space__between">
                          <span className="option__icon">
                            <Icon name="box" /> 
                          </span>
                          <span className="option__label">
                            Orders
                          </span>
                        </span>
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
          </li>
        </ul>
      </div>
    </section>
  )
}

NavBarLight.propTypes = {
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  cartQuantity: PropTypes.string.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  openRegisterModal: PropTypes.func.isRequired,
  openViewCartModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBarLight;
