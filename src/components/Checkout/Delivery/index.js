import React from "react";
import RadioLabel from "../../common/RadioLabel";
import CheckboxLabel from "../../common/CheckboxLabel";
import HorizontalLine from "../../common/HorizontalLine";
import LabelInput from "../../common/LabelInput";
import InputGroup, { InputWrapper } from "../../common/InputGroup";

import "./index.css";


const deliveryData = [
  [
    {
      name: "first_name",
      label: "First name",
      value: "",
    },
    {
      name: "last_name",
      label: "Last name",
      value: "",
    },
  ],
  [
    {
      name: "address",
      label: "Address",
      value: "",
    },
    {
      name: "city",
      label: "City",
      value: "",
    },
  ],
  [
    {
      name: "state",
      label: "State",
      value: "",
    },
    {
      name: "zip_code",
      label: "Zip code",
      value: "",
    },
  ],
];

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

const radioLabelData = [
  {
    name: "delivery__option",
    id: "standard__shipping",
    label: (
      <Label 
        shippingType={`Standard shipping: ${" "}`}
        duration="(free, 2-3 business days)"
      />
    )
  },
  {
    name: "delivery__option",
    id: "express__shipping",
    label: (
      <Label 
        shippingType={`Express shipping: ${" "}`}
        duration="(&pound;23, 1-2 business days)"
      />
    ),
  },
];

const Delivery = () => {
  return (
    <div className="delivery">
      {
        deliveryData.map(([leftData, rightData], index) => {
          return (
            <InputGroup key={index}>
              <InputWrapper wrapperClassname="left__section">
                <LabelInput 
                  label={leftData.label}
                  value={rightData.value}
                  name={leftData.name}
                  required={true}
                />
              </InputWrapper>
              <InputWrapper wrapperClassname="right__section">
                <LabelInput 
                  label={rightData.label}
                  value={rightData.value}
                  name={rightData.name}
                  required={true}
                />
              </InputWrapper>
            </InputGroup>
          )
        })
      }
      <div className="section__level">
        <span className="bold gray__color">Country: {" "}</span>
        <span className="gray__color">United Kingdom</span>
      </div>
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
        <div className="options__section flex flex__wrap space__between">
          {
            radioLabelData.map((data, index) => {
              return (
                <RadioLabel 
                  key={index}
                  name={data.name}
                  id={data.id}
                  label={data.label}
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

export default Delivery;
