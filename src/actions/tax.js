import * as types from './types';

/**
 * get tax request action
 *
 * @name getTax
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getTax = (payload) => ({
  type: types.GET_TAX_REQUEST,
  payload,
});

