import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import "./index.md.css";


/**
 * InputWrapper
 *
 * @name InputWrapper
 * @function
 * @prop {string} wrapperClassname
 * @prop {jsx} children
 * @returns {jsx}
 */
export const InputWrapper = ({wrapperClassname, children}) => {
  return (
    <span className={`flex__one ${wrapperClassname || ""}`}>
      {children}
    </span>
  )
};

InputWrapper.propTypes = {
  wrapperClassname: PropTypes.string,
  children: PropTypes.any.isRequired,
};

/**
 * InputGroup
 *
 * @name InputGroup
 * @function
 * @prop {jsx} children
 * @returns {jsx}
 */
const InputGroup = ({children}) => {
  return (
    <div 
      className="flex space__between flex__wrap section__level input__section">
      {children}
    </div>
  )
}

InputGroup.propTypes = {
  children: PropTypes.any.isRequired,
};

export default InputGroup;
