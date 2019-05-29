import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../RoundButton";

import "./index.css";
import "./index.md.css";


/**
 * Pagination
 *
 * @name Pagination
 * @function
 * @prop {number} {page
 * @prop {number} pageCount
 * @prop {function} gotoPage
 * @prop {function} prevPage
 * @prop {function} nextPage}
 * @returns {jsx}
 */
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
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
