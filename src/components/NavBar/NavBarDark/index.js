import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

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

/**
 * SearchInput
 *
 * @name SearchInput
 * @function
 * @prop {string} className
 * @prop {function} clearSearchField
 * @prop {function} onSubmit
 * @prop {string} search
 * @prop {object} rest
 * @returns {jsx}
 */
const SearchInput = ({ 
  className, 
  onSubmit, 
  search,
  clearSearchField,
  ...rest }) => {
  return (
    <div className={`navbar__search ${className || ""}`}>
      <form onSubmit={onSubmit}>
        <span className="input__icon input__left__icon search__lens">
          <Icon name="search" />
        </span>
        <input 
          autoComplete="off"
          className="item__input search__input"
          type="text" 
          name="search"
          {...rest}
          value={search}
          placeholder="search anything" 
        />
        <span 
          onClick={()=>clearSearchField({search: ""})}
          className="input__icon input__right__icon cancel__icon">
          <Icon name="x" />
        </span>
      </form>
    </div>
  )
};

SearchInput.propTypes = {
  className: PropTypes.string,
  search: PropTypes.string,
  clearSearchField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


/**
 * NavBarDark
 *
 * @name NavBarLight
 * @function
 * @prop {function} openViewCartModal 
 * @prop {object} user 
 * @prop {object} cart 
 * @prop {number} cartQuantity 
 * @returns {jsx}
 */
const NavBarDark = ({ openViewCartModal, user, cartQuantity, ...rest }) => {
  return (
    <React.Fragment>
      <section className="navbar__dark flex desktop__items">
        <div className="inner__container navbar__inner">
          <div className=" flex space__between margin__vert__auto">
            <div className="brand__name margin__vert__auto">
              <Link to="/">SHOPMATE</Link>
            </div>
            <div className="margin__vert__auto">
              <ul className="flex space__between category__links info__links list__style__none">
                {
                  categoryLinks.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link to={data.path}>{data.name}</Link>
                      </li>
                    )
                  })
                } 
              </ul>
            </div>
            <div className="flex">
              <SearchInput {...rest} />
              <div className="margin__vert__auto">
                <span 
                  onClick={openViewCartModal}
                  className="cart__icon">
                  <Icon name="shopping cart" />
                  <span 
                    className="item__count item__count__invert">
                    {cartQuantity}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      { /*end of desktop__items*/ }

      <section className="navbar__dark flex mobile__items">
        <div className="inner__container navbar__inner">
          <div className=" flex space__between margin__vert__auto">
            <div className="brand__name margin__vert__auto">
              <Link to="/">SHOPMATE</Link>
            </div>
            <div className="mobile__navbar">
              <input
                id="navbar__dropdown" 
                name="navbar__dropdown" 
                type="checkbox" 
              />
              <label htmlFor="navbar__dropdown">
                <Icon name="bars" />
              </label>
              <div className="flex dropdown__items">
                <span className="bg__image">
                  <img 
                    src="https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="img" 
                  />
                </span>
                <div className="flex__two flex">
                  <div className="item__info margin__auto">
                    <span className="item__title">
                      Back to the Earth
                    </span>
                    <br />
                    <span className="item__desc">
                      Keep it light and clean with this effortlessly chic, maritime inspired look.
                    </span>
                  </div>
                </div>
                <div className="flex__one flex flex__column links__search">
                  <ul 
                    className="margin__auto items list__style__none">
                    {
                      categoryLinks.map((data, index) => {
                        return (
                          <li key={index}>
                            <Link 
                              to={data.path}>
                              {data.name}
                            </Link>
                          </li>
                        )
                      })
                    } 
                  </ul>
                  <SearchInput 
                    {...rest} 
                    className="md__search__input" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      { /*end of mobile__items*/ }
    </React.Fragment>
  )
}

NavBarDark.propTypes = {
  openViewCartModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  cartQuantity: PropTypes.string.isRequired,
};

export default NavBarDark;
