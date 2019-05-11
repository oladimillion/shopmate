import axios from "axios";
import API from "../api";

const basePath = `${API}/customers`;

export const login = (payload) => {
  return axios.post(`${basePath}/login`, payload);
};

export const signup = (payload) => {
  return axios.post(`${basePath}`, payload);
};

