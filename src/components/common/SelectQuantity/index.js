import React, { Component } from 'react';
import RoundButton from "../RoundButton";

import "./index.css";

/**
 * SelectQuantity
 * @name SelectQuantity
 * @class
 *
 * @extends {Component}
 */
class SelectQuantity extends Component {

  state = {
    quantity: this.props.quantity,
  }

  /**
   * updates state quantity value
   *
   * @name updateQuantity
   * @function
   * @param {number} value
   */
  updateQuantity (value) {
    let { quantity } = this.state;
    const { onChange } = this.props;
    if(!onChange) return;
    if(value > 0) {
      quantity += 1;
      this.setState({quantity});
      this.props.onChange(quantity);
    } else if(quantity - 1 >= 1) {
      quantity -= 1;
      this.setState({quantity});
      onChange(quantity);
    }
  }

  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render () {
    const { quantity } = this.state;
    return (
      <div className="flex">
        <RoundButton 
          className="" 
          onClick={(e)=>this.updateQuantity(-1)}
          icon="minus" 
        />
        <div className="item__quantity">
          {quantity}
        </div>
        <RoundButton 
          className="" 
          icon="plus" 
          onClick={(e)=>this.updateQuantity(1)}
        />
      </div>
    )
  }
}



export default SelectQuantity;
