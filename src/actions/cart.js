import * as types from './types';

export const addCart = (payload) => ({
  type: types.ADD_CART_REQUEST,
  payload,
});

export const getCart = (payload) => ({
  type: types.GET_CART_REQUEST,
  payload,
});

export const getCartAmount = (payload) => ({
  type: types.GET_CART_AMOUNT_REQUEST,
  payload,
});

export const updateCart = (payload) => ({
  type: types.UPDATE_CART_REQUEST,
  payload,
});

export const deleteCartItem = (payload) => ({
  type: types.DELETE_CART_ITEM_REQUEST,
  payload,
});

