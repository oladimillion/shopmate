/**
 * create action based on provided type and payload
 *
 * @name createAction
 * @function
 * @param {string} type
 * @param {object} payload
 * @returns {object} action - type and payload
 */
const createAction = (type, payload) => {
  return {
    type, payload,
  }
}

export { createAction };
