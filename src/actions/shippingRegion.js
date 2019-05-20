import * as types from './types';

export const getShippingRegion = (payload) => ({
  type: types.GET_SHIPPING_REGION_REQUEST,
  payload,
});

export const getShippingRegionById = (payload) => ({
  type: types.GET_SHIPPING_REGION_BY_ID_REQUEST,
  payload,
});

