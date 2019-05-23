import React from 'react';

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
}

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

export default InputGroup;
