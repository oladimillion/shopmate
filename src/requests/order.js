import axios from "axios";
import API from "../api";

const basePath = `${API}/orders`;

export const createOrder = (payload) => {
  return axios.post(`${basePath}`, payload);
};

