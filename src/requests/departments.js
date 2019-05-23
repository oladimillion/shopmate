import axios from "axios";
import API from "../api";

const basePath = `${API}/departments`;


/**
 * get departments endpoint
 *
 * @name  getDepartments 
 * @function
 * @returns {promise}
 */
export const getDepartments = () => {
  return axios.get(`${basePath}`);
};

