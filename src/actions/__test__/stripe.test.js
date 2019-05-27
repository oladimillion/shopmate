import * as actions from "..";
import * as types from '../types';


describe('stripe request action test', () => {
  it('should dispatch gen stripe token request action', () => {
    expect(actions.genStripeToken({}).type).toEqual(
      types.GEN_STRIPE_TOKEN_REQUEST,
    );
  });
  it('should dispatch create stripe charge request action', () => {
    expect(actions.createStripeCharge({}).type).toEqual(
      types.CREATE_STRIPE_CHARGE_REQUEST,
    );
  });
});
