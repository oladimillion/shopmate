import axios from "axios";
import API from "../api";

const basePath = `${API}/customers`;


/**
 * login endpoint
 *
 * @name  login
 * @function
 * @param {object} payload
 * @returns {promise}
 */
export const login = (payload) => {
  return axios.post(`${basePath}/login`, payload);
};


/**
 * signup endpoint
 *
 * @name  signup
 * @function
 * @param {object} payload
 * @returns {promise}
 */
export const signup = (payload) => {
  return axios.post(`${basePath}`, payload);
};


/**
 * get user endpoint
 *
 * @name  getUser
 * @function
 * @param {object} payload
 * @returns {promise}
 */
export const getUser = (payload) => {
  return axios.get(`${API}/customer`);
};


/**
 * update profile endpoint
 *
 * @name  profile
 * @function
 * @param {object} payload
 * @returns {promise}
 */
export const profile = (payload) => {
  return axios.put(`${API}/customer`, payload);
};


/**
 * update address endpoint
 *
 * @name  address
 * @function
 * @param {object} payload
 * @returns {promise}
 */
export const address = (payload) => {
  return axios.put(`${basePath}/address`, payload);
};

