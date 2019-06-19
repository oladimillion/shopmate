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

/**
 * get customer order endpoint
 *
 * @name  getCustomerOrders 
 * @function
 * @param {object} payload - order info
 * @returns {promise}
 */
export const getCustomerOrder = (payload) => {
  return axios.get(`${basePath}/inCustomer`);
};

/**
 * get order by id endpoint
 *
 * @name  getOrderById 
 * @function
 * @param {object} payload - order info
 * @returns {promise}
 */
export const getOrderById = (payload) => {
  return axios.get(`${basePath}/${payload.order_id}`);
};

