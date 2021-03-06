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

/**
 * get order by id request action
 *
 * @name getOrderById
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getOrderById = (payload) => ({
  type: types.GET_ORDER_BY_ID_REQUEST,
  payload,
});

/**
 * get order items request action
 *
 * @name getOrderItems
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getOrderItems = (payload) => ({
  type: types.GET_ORDER_ITEMS_REQUEST,
  payload,
});

