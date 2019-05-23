import * as types from './types';


/**
 * get shipping region request action
 *
 * @name getShippingRegion
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getShippingRegion = (payload) => ({
  type: types.GET_SHIPPING_REGION_REQUEST,
  payload,
});


/**
 * get shipping region by id request action
 *
 * @name getShippingRegionById
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getShippingRegionById = (payload) => ({
  type: types.GET_SHIPPING_REGION_BY_ID_REQUEST,
  payload,
});


