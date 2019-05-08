import React, { Component } from 'react';
import RoundButton from "../RoundButton";

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
            <RoundButton 
              className="" 
              icon="angle left" 
            />
            <RoundButton 
              className="" 
              icon="angle right" 
            />
          </span>
        </div>
      </div>
    )
  }
}


export default Pagination;
