import React from "react";

import "./index.css";

const Modal = ({ modalClassName, modalInnerClassName, children, open }) => {
  return (
    <div 
      className={`shopmate__modal position__fixed flex fadein__fadeout ${modalClassName || ""} ${open ? "visible" : "hidden"}`}>
      <div 
        className={`shopmate__modal__inner inner__container margin__auto ${modalInnerClassName || ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
 
