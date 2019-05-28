import * as stripe from "../stripe";
import * as types from "../../actions/types";

describe("Stripe saga", () => {
  it("generate stripe token", () => {
    const gen = stripe.genStripeTokenAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GEN_STRIPE_TOKEN_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GEN_STRIPE_TOKEN_FAILURE)
  });
  it("create stripe charge", () => {
    const gen = stripe.createStripeChargeAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.CREATE_STRIPE_CHARGE_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.CREATE_STRIPE_CHARGE_FAILURE)
  });
});


