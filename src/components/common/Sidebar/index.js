import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import queryString from "query-string";
import PropTypes from "prop-types";

import { getDepartments, getCategories } from "../../../actions";

import RadioButton from "../../common/RadioButton";
import SquareButton from "../../common/SquareButton";
import RadioLabel from "../../common/RadioLabel";
import PanelSection from "../../common/PanelSection";
import Loader from "../../common/Loader";
import { ItemButton } from "../../common/ItemButtons";

import './index.css';
import './index.sm.css';

const colorButtonList = [
  "skyblue",
  "aquamarine",
  "redpink",
  "red",
  "yellow",
  "green",
  "purple",
];

const squareButtonList = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
];



export class Sidebar extends Component {

  state = {
    departmentId: null,
    categoryId: null,
  }

  /**
   * componentDidMount
   *
   * @name componentDidMount
   * @function
   */
  componentDidMount() {
    const { departments, categories, getQueryParams } = this.props;

    if(!departments.data.length) {
      this.props.getDepartments();
    }

    if(!categories.count) {
      this.props.getCategories();
    }

    const { department, category } = getQueryParams();
    this.setState({
      departmentId: parseInt(department) || null,
      categoryId: parseInt(category) || null,
    });
  }

  /**
   * clears category id and deparment id from the state
   *
   * @name clearAll
   * @function
   */
  clearAll = () => {
    this.removeFilter({
      categoryId: null,
      departmentId: null,
    });
    this.props.history.push({
      pathname: "/",
      search: "",
    });
  }

  /**
   * get category list based on department id
   *
   * @name getCategoryList
   * @function
   * @param {number} departmentId
   * @returns {array} category
   */
  getCategoryList (departmentId) {
    const { categories } = this.props;
    return categories.data.filter((category) => {
      return category.department_id === departmentId;
    });
  }

  /**
   * create url params from department id and category id
   *
   * @name getQuery
   * @function
   * @returns {string} url params
   */
  getQuery(){
    const { departmentId, categoryId } = this.state;
    if(categoryId) {
      return `?${queryString.stringify({category: categoryId, department: departmentId})}`;
    } else if(departmentId) {
      return `?${queryString.stringify({department: departmentId})}`;
    } else {
      return "";
    }
  }

  /**
   * gets category name based on the provided category id
   *
   * @name getSeletectedCategoryName
   * @function
   * @param {number} categoryId
   * @returns {string } category name
   */
  getSeletectedCategoryName = (categoryId) => {
    const { categories } = this.props;
    const category = categories.data.find((category) => {
      return category.category_id === categoryId;
    });
    return category ? category.name : "";
  }

  /**
   * gets department name based on the provided department id
   *
   * @name getSeletectedDepartmentName
   * @function
   * @param {number} departmentId
   * @returns {string } department name
   */
  getSeletectedDepartmentName = (departmentId) => {
    const { departments } = this.props;
    const department = departments.data.find((department) => {
      return department.department_id === departmentId;
    });
    return department ? department.name : "";
  }

  /**
   * removes category id or department id from the state
   *
   * @name removeFilter
   * @function
   * @param {object} data
   */
  removeFilter = (data) => {
    this.setState(data);
  }

  /**
   * update state with category id
   *
   * @name selectCategory
   * @function
   * @param {object} category
   */
  selectCategory = (category) => {
    this.setState({
      categoryId: category.category_id,
    });
  }

  /**
   * update state with department id
   *
   * @name selectDepartment
   * @function
   * @param {object} department
   */
  selectDepartment = (department) => {
    const categoryList = this.getCategoryList(department.department_id);
    this.setState({ 
      categoryList, 
      categoryId: null,
      departmentId: department.department_id
    });
  }

  /**
   * redirects to the root path with the provided query params
   *
   * @name submit
   * @function
   * @param {object} e
   */
  submit = (e) => {
    const { allProduct } = this.props;
    const query = this.getQuery();
    if(allProduct.isLoading) return;

    this.props.history.push({
      pathname: "/",
      search: query,
    });
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render (){

    const { departments, categories, allProduct } = this.props;
    const { categoryId, departmentId } = this.state;

    const categoryName = this.getSeletectedCategoryName(categoryId);
    const departmentName = this.getSeletectedDepartmentName(departmentId);
    const categoryList = this.getCategoryList(departmentId);

    return (
      <aside className="sidebar box__shadow__normal sm__sidebar">
        <div className="filter__summary gray__bg gray__border__bottom sidebar__padding">
          <span className="filter__title">
            Filter <span>{allProduct.count}</span> items
          </span>
          <ul className="filter__params list__style__none">
            { 
              departmentName && (
                <li>
                  <Icon 
                    onClick={
                      (e)=>this.removeFilter({
                        categoryId: null,
                        departmentId: null,
                      })
                    }
                    className="cancel__icon" 
                    name="cancel" 
                  />
                  <span className="gray__color">Department: </span>
                  <span>{departmentName}</span>
                </li>
              )
            }
            { 
              categoryName && (
                <li>
                  <Icon 
                    onClick={
                      (e)=>this.removeFilter({categoryId: null})
                    }
                    className="cancel__icon" 
                    name="cancel" 
                  />
                  <span className="gray__color">Category: </span>
                  <span>{categoryName}</span>
                </li>
              )
            }
          </ul>
        </div>
        <div className="filter__panel white__bg gray__border__bottom sidebar__padding">
          <PanelSection 
            title="Color" 
            className="radio__button__set flex space__between">
            {
              colorButtonList.map((colorData, index) => {
                return (
                  <RadioButton 
                    name="color__set"
                    id={colorData}
                    className={colorData}
                    key={index}
                  />
                )
              })
            }
          </PanelSection>
          <PanelSection 
            title="Size" 
            className="square__button__set flex flex__wrap">
            {
              squareButtonList.map((squareData, index) => {
                return (
                  <SquareButton 
                    name="square__set"
                    id={squareData}
                    label={squareData}
                    key={index}
                  />
                )
              })
            }
          </PanelSection>
          <PanelSection 
            title="Department" 
            className="department__set block">
            {
              (departments.isLoading || categories.isLoading) ? 
                (
                  <Loader />
                ) : 
                (
                  <Fragment>
                    {
                      departments.data.map((department, index) => {
                        return (
                          <RadioLabel 
                            name="radio__label__set__department"
                            id={department.name}
                            label={department.name}
                            key={index}
                            checked={departmentId === department.department_id}
                            onClick={(e) => this.selectDepartment(department)}
                          />
                        )
                      })
                    }
                  </Fragment>
                )
            }
          </PanelSection>
          {
            !!categoryList.length && (
              <PanelSection 
                title="Category" 
                className="department__set block">
                {
                  categoryList.map((category, index) => {
                    return (
                      <RadioLabel 
                        name="radio__label__set__category"
                        id={category.name}
                        label={category.name}
                        key={index}
                        checked={categoryId === category.category_id}
                        onClick={(e) => this.selectCategory(category)}
                      />
                    )
                  })
                }
              </PanelSection>
            )
          }
        </div>
        <div className="sidebar__footer flex space__between sidebar__padding gray__bg">
          <span className="block">
            <ItemButton onClick={this.submit} name="Apply" />
          </span>
          <button onClick={this.clearAll} className="sidebar__footer__cancel">
            <Icon className="cancel__icon" name="cancel" />
            <span>Clear All</span>
          </button>
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
  getQueryParams: PropTypes.func.isRequired,
  allProduct: PropTypes.object.isRequired,
  departments: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    departments: state.Departments,
    allProduct: state.AllProduct,
    categories: state.Categories,
  }
}

export default connect(mapStateToProps, {
  getCategories,
  getDepartments,
})(Sidebar);
