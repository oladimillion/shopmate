import React from 'react';
import LabelInput from "../common/LabelInput";
import InputGroup, { InputWrapper } from "../common/InputGroup";

export default ({ title, inputDataArray, onChange, dataList, children }) => {
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
                    onChange={onChange}
                    required={leftData.required}
                    labelInputClassname={`${leftData.hidden ? "hidden md__hide__input" : ""}`}
                    hasDatalist={leftData.hasDatalist}
                    dataList={dataList}
                  />
                </InputWrapper>
                <InputWrapper wrapperClassname="right__section">
                  <LabelInput 
                    label={rightData.label}
                    value={rightData.value}
                    name={rightData.name}
                    onChange={onChange}
                    required={rightData.required}
                    labelInputClassname={`${rightData.hidden ? "hidden md__hide__input" : ""}`}
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
}
