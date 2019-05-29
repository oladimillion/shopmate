import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import CheckboxLabel from "../CheckboxLabel";
import { ItemButton } from "../ItemButtons";

import "./index.css";
import "./index.sm.css";

const func = () => {};

/**
 * ModalFormInput
 *
 * @name ModalFormInput
 * @function
 * @prop {string} placeholder
 * @prop {string} name
 * @prop {string} value
 * @prop {function} onChange
 * @prop {string} type
 * @returns {jsx}
 */
export const ModalFormInput = ({ placeholder, name, value, onChange, type}) => {
  return (
    <div className="main__input__wrapper">
      <input 
        className="main__input text__center" 
        autoComplete="off"
        type={type || "text"} 
        required={true}
        placeholder={placeholder}
        onChange={onChange || func}
        value={value || ""}
        name={name || ""}
      />
    </div>
  )
};

ModalFormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

/**
 * ModalFormButton
 *
 * @name ModalFormButton
 * @function
 * @prop {string} {name}
 * @returns {jsx}
 */
export const ModalFormButton = ({ name }) => {
  return (
    <div className="main__input__wrapper flex">
      <ItemButton 
        type="submit"
        className="margin__hori__auto modal__form__button"
        name={name}
      />
    </div>
  )
};

ModalFormButton.propTypes = {
  name: PropTypes.string.isRequired,
};

/**
 * ModalFormCheckboxLabel
 *
 * @name ModalFormCheckboxLabel
 * @function
 * @prop {function} {onChange
 * @prop {string} id
 * @prop {string} label
 * @prop {string} value
 * @prop {string} name}
 * @returns {jsx}
 */
export const ModalFormCheckboxLabel = ({ onChange, id, label, value, name }) => {
  return (
    <div className="main__input__wrapper flex">
      <CheckboxLabel 
        value={value || false}
        label={label}
        id={id}
        onChange={onChange}
        name={name}
        parentClassName="margin__hori__auto"
        labelClassName="bold"
      />
    </div>
  )
};

ModalFormCheckboxLabel.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};

/**
 * ModalFormFooter
 *
 * @name ModalFormFooter
 * @function
 * @prop {jsx} {children}
 * @returns {jsx}
 */
export const ModalFormFooter = ({ children }) => {
  return (
    <footer 
      className="form__small__footer flex space__between flex__wrap">
      {children}
    </footer>
  )
};

ModalFormFooter.propTypes = {
  children: PropTypes.any,
};

/**
 * ModalForm
 *
 * @name ModalForm
 * @function
 * @prop {string} {title
 * @prop {boolean} open
 * @prop {function} onCloseModal
 * @prop {functino} onSubmit
 * @prop {jsx} children}
 * @returns {jsx}
 */
const ModalForm = ({ title, open, onCloseModal, onSubmit, children }) => {
  return (
    <Modal 
      open={open}
      modalClassName="modal__form__small" 
      modalInnerClassName="modal__form__small__inner">
      <form onSubmit={onSubmit}>
        <header className="form__small__header position__rel">
          <h2 className="text__center margin__none">
            {title}
          </h2>
          <span 
            onClick={onCloseModal}
            className="close__icon close__form__small position__abs">
            &#x000D7;
          </span>
        </header>
        {children}
      </form>
    </Modal>

  )
};

ModalForm.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
  open: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default ModalForm;
