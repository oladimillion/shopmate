import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import queryString from "query-string";

import { getDepartments, getCategories } from "../../../actions";

import RadioButton from "../../common/RadioButton";
import SquareButton from "../../common/SquareButton";
import RadioLabel from "../../common/RadioLabel";
import PanelSection from "../../common/PanelSection";
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



class Sidebar extends Component {

  state = {
    departmentId: null,
    categoryId: null,
  }

  componentDidMount() {
    const { departments, categories, getQueryParams } = this.props;

    if(!departments.data.length) {
      this.props.getDepartments();
    }

    if(!categories.data.length) {
      this.props.getCategories();
    }

    const { department, category } = getQueryParams();
    this.setState({
      departmentId: parseInt(department) || null,
      categoryId: parseInt(category) || null,
    });
  }

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

  getCategoryList (departmentId) {
    const { categories } = this.props;
    return categories.data.rows.filter((category) => {
      return category.department_id === departmentId;
    });
  }

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

  getSeletectedCategoryName = (categoryId) => {
    const { categories } = this.props;
    const category = categories.data.rows.find((category) => {
      return category.category_id === categoryId;
    });
    return category ? category.name : "";
  }

  getSeletectedDepartmentName = (departmentId) => {
    const { departments } = this.props;
    const department = departments.data.find((department) => {
      return department.department_id === departmentId;
    });
    return department ? department.name : "";
  }

  removeFilter = (data) => {
    this.setState(data);
  }

  selectCategory = (category) => {
    this.setState({
      categoryId: category.category_id,
    });
  }

  selectDepartment = (department) => {
    const categoryList = this.getCategoryList(department.department_id);
    this.setState({ 
      categoryList, 
      categoryId: null,
      departmentId: department.department_id
    });
  }

  submit = (e) => {
    const { allProduct } = this.props;
    const query = this.getQuery();
    if(allProduct.isLoading) return;

    this.props.history.push({
      pathname: "/",
      search: query,
    });
  }

  render (){

    const { departments, allProduct } = this.props;
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
