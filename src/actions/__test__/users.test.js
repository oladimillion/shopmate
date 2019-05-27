import * as actions from "..";
import * as types from '../types';


describe('user action test', () => {
  it('should dispatch login request action', () => {
    expect(actions.login({}).type).toEqual(
      types.LOGIN_REQUEST,
    );
  });
  it('should dispatch signup request action', () => {
    expect(actions.signup({}).type).toEqual(
      types.SIGNUP_REQUEST,
    );
  });
  it('should dispatch get user request action', () => {
    expect(actions.getUser({}).type).toEqual(
      types.USER_REQUEST,
    );
  });
  it('should dispatch profile request action', () => {
    expect(actions.profile({}).type).toEqual(
      types.PROFILE_REQUEST,
    );
  });
  it('should dispatch address request action', () => {
    expect(actions.address({}).type).toEqual(
      types.ADDRESS_REQUEST,
    );
  });
  it('should dispatch logout action', () => {
    expect(actions.logout({}).type).toEqual(
      types.USER_LOGOUT,
    );
  });
});
