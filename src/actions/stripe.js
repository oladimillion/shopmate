import * as types from './types';

/**
 * generate stripe token request action
 *
 * @name genStripeToken
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const genStripeToken = (payload) => ({
  type: types.GEN_STRIPE_TOKEN_REQUEST,
  payload,
});

/**
 * create stripe charge request action
 *
 * @name createStripeCharge
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const createStripeCharge = (payload) => ({
  type: types.CREATE_STRIPE_CHARGE_REQUEST,
  payload,
});

