import * as types from './types';

/**
 * create order request action
 *
 * @name createOrder
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const createOrder = (payload) => ({
  type: types.CREATE_ORDER_REQUEST,
  payload,
});

