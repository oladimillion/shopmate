import axios from "axios";
import API from "../api";

const basePath = `${API}/orders`;


/**
 * create order endpoint
 *
 * @name  createOrder 
 * @function
 * @param {object} payload - order info
 * @returns {promise}
 */
export const createOrder = (payload) => {
  return axios.post(`${basePath}`, payload);
};

