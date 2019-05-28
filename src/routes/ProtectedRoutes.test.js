import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import Loader from "../components/common/Loader";
import { shallow } from 'enzyme';
import initState from "../reducers/initState";
import setup from "../__test__/setup";

const func = jest.fn();

describe('<ProtectedRoutes /> ', () => {

  const props = {
    component: Loader,
    ...setup,
  };

  it('renders ProtectedRoutes component without crashing', () => {
    shallow(
      <ProtectedRoutes {...props} />
    );
  });
});

