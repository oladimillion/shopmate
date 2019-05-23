import * as types from './types';

/**
 * get departments request action
 *
 * @name getDepartments
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getDepartments = (payload) => ({
  type: types.GET_DEPARTMENTS_REQUEST,
  payload,
});

