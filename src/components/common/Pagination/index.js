import React, { Component } from 'react';
import { Icon } from "semantic-ui-react";

import "./index.css";
import "./index.md.css";


class Pagination extends Component {

  render() {
    return (
      <div className="pagination md__flex">
        <div 
          className="pagination__controls float__right flex space__between align__center md__float__none md__margin__hori__auto">
          <span className="pagination__text">Page</span>
          <select id="" name="" className="page__number ">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <span className="pagination__text">of 3</span>
          <span className="pagination__buttons">
            <button 
              className="pagination__button unset__properties">
              <Icon name="angle left" />
            </button>
            <button 
              className="pagination__button unset__properties text__center">
              <Icon name="angle right" />
            </button>
          </span>
        </div>
      </div>
    )
  }
}


export default Pagination;
