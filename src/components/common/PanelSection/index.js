import React from "react";
import PropTypes from "prop-types";

import "./index.css";


/**
 * PanelSection
 *
 * @name PanelSection
 * @function
 * @prop {string} {title
 * @prop {jsx} children
 * @prop {string} className
 * @prop {string} titleClassName}
 * @returns {jsx}
 */
const PanelSection = ({ title, children, className, titleClassName }) => {
  return (
    <div className="panel__section">
      <span 
        className={`gray__color panel__title block ${titleClassName || ""}`}>
        {title}
      </span>
      <span 
        className={className}>
        {children}
      </span>
    </div>
  )
};

PanelSection.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  children: PropTypes.any,
};

export default PanelSection;
