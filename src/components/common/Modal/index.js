import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * Modal
 *
 * @name Modal
 * @function
 * @prop {string} modalClassName
 * @prop {string} modalInnerClassName
 * @prop {jsx} children
 * @prop {boolean} open
 * @returns {jsx}
 */
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
};

Modal.propTypes = {
  modalClassName: PropTypes.string,
  modalInnerClassName: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.any,
};

export default Modal;
 
