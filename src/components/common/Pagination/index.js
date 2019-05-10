import React from 'react';
import RoundButton from "../RoundButton";

import "./index.css";
import "./index.md.css";


const Pagination = ({ page, pageCount, gotoPage, prevPage, nextPage }) => {

  return (
    <div className="pagination md__flex">
      <div 
        className="pagination__controls float__right flex space__between align__center md__float__none md__margin__hori__auto">
        <span className="pagination__text">Page</span>
        <select 
          onChange={(e)=>gotoPage(e.target.value)} 
          value={page} className="page__number ">
          {
            [...Array(pageCount).keys()].map((_, index) => {
              return (
                <option key={index} value={index+1}>{index+1}</option>
              )
            })
          }
        </select>
        <span className="pagination__text">of {"  "} {pageCount}</span>
        <span className="pagination__buttons">
          <RoundButton 
            onClick={prevPage}
            className="" 
            icon="angle left" 
          />
          <RoundButton 
            onClick={nextPage}
            className="" 
            icon="angle right" 
          />
        </span>
      </div>
    </div>
  )
}

export default Pagination;
