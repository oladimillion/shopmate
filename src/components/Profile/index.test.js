import React from "react";
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import { Profile } from ".";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();


describe('<Profile /> ', () => {

  const props = {
    setErrorMessage: func,
    profile: func,
    address: func,
    user: initState.user,
    shippingRegion: initState.shippingRegion.data,
    ...setup,
  };

  const wrapper = mount(
    <Profile {...props} />
  );
  it('renders Profile component without crashing', () => {
    wrapper.instance().setState({
      showAddressForm: true,
    });
    wrapper.instance().onChange({
      target: {
        name: "city",
        value: "lagos",
      }
    });
    wrapper.instance().onSubmit({
      preventDefault: func
    });
    wrapper.instance().onCheck({
      showAddressForm: false,
    });
  });
});

