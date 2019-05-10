import React from 'react';

import "./index.css";


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
}

export default PanelSection;
