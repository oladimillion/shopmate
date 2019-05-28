import * as types from "../../actions/types";
import initState from "../initState"
import stripe from "../stripe";

describe('StripeToken reducer', () => {
  it('should update the store data', () => {
    expect(
      stripe.StripeToken(initState.stripeToken, {
        type: types.GEN_STRIPE_TOKEN_SUCCESS,
        payload: initState.stripeToken,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store data', () => {
    expect(
      stripe.StripeToken(initState.stripeToken, {
        type: types.USER_LOGOUT,
        payload: initState.stripeToken,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      stripe.StripeToken(initState.stripeToken, {
        type: types.GEN_STRIPE_TOKEN_LOADING,
        payload: initState.stripeToken,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      stripe.StripeToken(initState.stripeToken, {
        type: types.GEN_STRIPE_TOKEN_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});

describe('StripeCharge reducer', () => {
  it('should update the store data', () => {
    expect(
      stripe.StripeCharge(initState.stripeCharge, {
        type: types.CREATE_STRIPE_CHARGE_SUCCESS,
        payload: initState.stripeCharge,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store data', () => {
    expect(
      stripe.StripeCharge(initState.stripeCharge, {
        type: types.USER_LOGOUT,
        payload: initState.stripeCharge,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      stripe.StripeCharge(initState.stripeCharge, {
        type: types.CREATE_STRIPE_CHARGE_LOADING,
        payload: initState.stripeCharge,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      stripe.StripeCharge(initState.stripeCharge, {
        type: types.CREATE_STRIPE_CHARGE_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
