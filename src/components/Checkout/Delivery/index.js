import React, { Component } from "react";
import PropTypes from "prop-types";
import RadioLabel from "../../common/RadioLabel";
import CheckboxLabel from "../../common/CheckboxLabel";
import HorizontalLine from "../../common/HorizontalLine";
import LabelInput from "../../common/LabelInput";
import InputGroup, { InputWrapper } from "../../common/InputGroup";


import deliveryInputData from "./deliveryInputData";

import "./index.css";


/**
 * Label component
 *
 * @name Label
 * @function
 * @prop {string} shippingType
 * @prop {string} duration
 * @returns {jsx}
 */
const Label = ({shippingType, duration}) => {
  return (
    <React.Fragment>
      <span className="bold gray__color">
        {shippingType}
      </span> 
      <span className=" gray__color">
        {duration}
      </span> 
    </React.Fragment>
  )
};

Label.propTypes = {
  shippingType: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};


export class Delivery extends Component {


  /**
   * set the state with inputed values
   *
   * @name onChange
   * @function
   * @param {object} e
   */
  onChange = (e) => {
    this.props.onChange({
      name: e.target.name,
      level: "delivery",
      value: e.target.value,
    });
  }

  /**
   * set the state with the checkbox value 
   *
   * @name onCheck
   * @function
   * @param {object} {shipping_id}
   */
  onCheck = ({shipping_id}) => {
    this.props.onChange({
      name: "shipping_id",
      level: "delivery",
      value: shipping_id,
    });
  }

  /**
   * create array of objects containing shipping regions
   *
   * @name shippingRegions
   * @function
   * @param {object} shippingRegionById
   * @returns {array}
   */
  shippingRegions(shippingRegionById) {
    const re = /\([\D\d]+\)/;
    return shippingRegionById.data.map((data) => {
      return  {
        name: "delivery__option",
        id: data.shipping_id,
        label: (
          <Label 
            shippingType={`${data.shipping_type.replace(re, "")}: ${" "}`}
            duration={`${data.shipping_type.match(re)[0]}`}
          />
        )
      }
    })
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    const { shippingRegion, shippingRegionById, delivery } = this.props;
    return (
      <div className="delivery">
        {
          deliveryInputData(delivery).map(([leftData, rightData], index) => {
            return (
              <InputGroup key={index}>
                <InputWrapper wrapperClassname="left__section">
                  <LabelInput 
                    label={leftData.label}
                    value={leftData.value}
                    name={leftData.name}
                    onChange={this.onChange}
                    required={leftData.required}
                    labelInputClassname={`${leftData.hidden ? "hidden md__hide__input" : ""}`}
                  />
                </InputWrapper>
                <InputWrapper wrapperClassname="right__section">
                  <LabelInput 
                    label={rightData.label}
                    value={rightData.value}
                    onChange={this.onChange}
                    name={rightData.name}
                    required={rightData.required}
                    labelInputClassname={`${rightData.hidden ? "hidden md__hide" : ""}`}
                  />
                </InputWrapper>
              </InputGroup>
            )
          })
        }
        <div className="section__level">
          <CheckboxLabel 
            name="billing__info__check"
            id="billing__info__check"
            label="My billing information is the same as my delivery information"
          />
        </div>
        <HorizontalLine />
        <div className="section__level delivery__option">
          <h2 className="">Delivery options</h2>
          <div className="section__level">
            <InputGroup>
              <InputWrapper wrapperClassname="left__section">
                <LabelInput 
                  label="Shipping Region"
                  name="shipping_region_id">
                  <select 
                    onChange={this.onChange}
                    className="block shipping_region" 
                    name="shipping_region_id"
                    value={delivery.shipping_region_id}>
                    {
                      shippingRegion.data.map(region => {
                        return (
                          <option 
                            disabled={region.shipping_region_id === 1}
                            key={region.shipping_region_id}
                            value={region.shipping_region_id}>
                            {region.shipping_region}
                          </option>
                        )
                      })
                    }
                  </select>
                </LabelInput>
              </InputWrapper>
              <InputWrapper wrapperClassname="right__section">
                <LabelInput 
                  name="uiiouio"
                  labelInputClassname="hidden md__hide"
                />
              </InputWrapper>
            </InputGroup>
          </div>
          <div className="options__section section__level flex flex__wrap">
            {
              this.shippingRegions(shippingRegionById)
                .map((data, index) => {
                  return (
                    <RadioLabel 
                      key={index}
                      name={data.name}
                      id={data.id}
                      label={data.label}
                      checked={delivery.shipping_id === data.id}
                      onClick={(e)=>this.onCheck({shipping_id: data.id})}
                      className="options__section"
                    />
                  )
                })
            }
          </div>
        </div>
      </div>
    )
  }
}

Delivery.propTypes = {
  shippingRegion: PropTypes.object.isRequired,
  shippingRegionById: PropTypes.object.isRequired,
  delivery: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Delivery;
