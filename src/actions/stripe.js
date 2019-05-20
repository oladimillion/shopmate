import * as types from './types';

export const genStripeToken = (payload) => ({
  type: types.GEN_STRIPE_TOKEN_REQUEST,
  payload,
});

export const createStripeCharge = (payload) => ({
  type: types.CREATE_STRIPE_CHARGE_REQUEST,
  payload,
});

