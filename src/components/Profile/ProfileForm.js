import React from "react";
import PropTypes from "prop-types";
import LabelInput from "../common/LabelInput";
import InputGroup, { InputWrapper } from "../common/InputGroup";

/**
 * default
 *
 * @name default
 * @function
 * @prop {string} title
 * @prop {array} inputDataArray
 * @prop {function} onChange
 * @prop {jsx} children
 * @returns {jsx}
 */
const ProfileForm = ({ title, inputDataArray, onChange, children }) => {
  return (
    <div className=" profile__padding">
      <header className="section__level">
        <h2>{title}</h2>
      </header>
      <div className="section__level">
        {
          inputDataArray.map(([leftData, rightData], index) => {
            return (
              <InputGroup key={index}>
                <InputWrapper wrapperClassname="left__section">
                  <LabelInput 
                    label={leftData.label}
                    value={leftData.value}
                    name={leftData.name}
                    type={leftData.type}
                    onChange={onChange}
                    required={leftData.required}
                    labelInputClassname={`${leftData.hidden ? "hidden md__hide" : ""}`}
                    hasDatalist={leftData.hasDatalist}
                  />
                </InputWrapper>
                <InputWrapper wrapperClassname="right__section">
                  <LabelInput 
                    label={rightData.label}
                    value={rightData.value}
                    name={rightData.name}
                    type={rightData.type}
                    onChange={onChange}
                    required={rightData.required}
                    labelInputClassname={`${rightData.hidden ? "hidden md__hide" : ""}`}
                  />
                </InputWrapper>
              </InputGroup>
            )
          })
        }
        { children }
      </div>
    </div>
  )
};

ProfileForm.propTypes = {
  title: PropTypes.string.isRequired,
  inputDataArray: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.object,
}

export default ProfileForm;
