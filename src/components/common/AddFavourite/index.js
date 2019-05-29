import React from "react";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.css";


/**
 * PanelSection
 *
 * @name PanelSection
 * @function
 * @prop {string} name
 * @prop {string} iconClassName - sematic ui icon name
 * @returns {jsx}
 */
const PanelSection = ({name, iconClassName}) => {
  return (
    <button className="unset__properties flex">
      <Icon 
        className={iconClassName} 
        name="heart outline" 
      />
      {
        name && 
        <span className="favourite__label">{name}</span>
      }
    </button>
  )
}

PanelSection.propTypes = {
  name: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default PanelSection;
