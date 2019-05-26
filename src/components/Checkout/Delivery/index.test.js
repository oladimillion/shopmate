import React from "react";
import { Delivery } from ".";
import { shallow } from 'enzyme';
import initState from "../../../reducers/initState";

const func = jest.fn();

describe('<Delivery /> ', () => {

  const props = {
    onChange: func,

    user: initState.user,
    shippingRegionById: initState.shippingRegionById,
    shippingRegion: initState.shippingRegion,
    tax: initState.tax,
    delivery: {
      shipping_id: 0,
      shipping_region_id: 0,
    },
  };

  const wrapper = shallow(
    <Delivery {...props} />
  );
  it('renders Delivery component without crashing', () => {
    wrapper.instance().onCheck({
      shipping_id: 2,
    });
    wrapper.instance().onChange({
      target: {
        name: "first_name",
        value: "oladimeji",
      }
    });
    wrapper.instance().shippingRegions(props.shippingRegionById);
  });
});
