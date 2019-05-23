import * as types from './types';


/**
 * get categories request action
 *
 * @name getCategories
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getCategories = (payload) => ({
  type: types.GET_CATEGORIES_REQUEST,
  payload,
});

