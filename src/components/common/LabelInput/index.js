import React, { Fragment } from "react";
import { Icon } from "semantic-ui-react";

import "./index.css";

const func = ()=>{};

/**
 * LabelInput
 *
 * @name LabelInput
 * @function
 * @prop {string} name
 * @prop {boolean} required
 * @prop {string} label
 * @prop {function} onChange
 * @prop {string} value
 * @prop {string} type
 * @prop {string} placeholder
 * @prop {string} icon
 * @prop {string} labelInputClassname
 * @prop {jsx} children
 * @returns {jsx}
 */
const LabelInput = ({
  name,
  required,
  label,
  onChange,
  value,
  type,
  placeholder,
  icon,
  labelInputClassname,
  children
}) => {
  return (
    <span className={`position__rel checkout__input block ${labelInputClassname || ""}`}>
      <label className="label__input label block gray__color bold" 
        htmlFor={name}>
        {label} { required && <span className="required__sign red__color">*</span> }
      </label>
      { 
        children || (
          <Fragment>
            <input 
              onChange={onChange || func}
              value={value || ""}
              id={name || ''}
              name={name || ""}
              className="label__input block" 
              type={type || "text"} 
              placeholder={placeholder || ""}
            />
            {
              icon && (
                <span className="label__input__icon position__abs">
                  <Icon name={icon} />
                </span>
              )
            }
          </Fragment>
        )
      }
    </span>
  )
};


export default LabelInput;
