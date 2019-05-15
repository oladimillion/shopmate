import React from 'react';

import "./index.css";
import "./index.md.css";


export const InputWrapper = ({wrapperClassname, children}) => {
  return (
    <span className={`flex__one ${wrapperClassname || ""}`}>
      {children}
    </span>
  )
}

const InputGroup = ({children}) => {
  return (
    <div 
      className="flex space__between flex__wrap section__level input__section">
      {children}
    </div>
  )
}

export default InputGroup;
