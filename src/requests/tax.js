import axios from "axios";
import API from "../api";

const basePath = `${API}/tax`;


/**
 * get tax endpoint
 *
 * @name getTax
 * @function
 * @returns {promise}
 */
export const getTax = () => {
  return axios.get(`${basePath}`);
};

