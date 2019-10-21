import * as types from './types';

/**
 * add item to cart request action
 *
 * @name addCart
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const addCart = (payload) => ({
  type: types.ADD_CART_REQUEST,
  payload,
});

/**
 * generate cart ID request action
 *
 * @name genCartID
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const genCartID = (payload) => ({
  type: types.GEN_CART_ID_REQUEST,
  payload,
});

/**
 * get cart request action
 *
 * @name getCart
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getCart = (payload) => ({
  type: types.GET_CART_REQUEST,
  payload,
});

/**
 * get cart amount request action
 *
 * @name getCartAmount
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getCartAmount = (payload) => ({
  type: types.GET_CART_AMOUNT_REQUEST,
  payload,
});

/**
 * update cart request action
 *
 * @name updateCart
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const updateCart = (payload) => ({
  type: types.UPDATE_CART_REQUEST,
  payload,
});

/**
 * delete cart item request action
 *
 * @name deleteCartItem
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const deleteCartItem = (payload) => ({
  type: types.DELETE_CART_ITEM_REQUEST,
  payload,
});

