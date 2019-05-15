import axios from "axios";
import API from "../api";

const basePath = `${API}/customers`;

export const login = (payload) => {
  return axios.post(`${basePath}/login`, payload);
};

export const signup = (payload) => {
  return axios.post(`${basePath}`, payload);
};

export const getUser = (payload) => {
  return axios.get(`${API}/customer`);
};

export const profile = (payload) => {
  return axios.put(`${API}/customer`, payload);
};

export const address = (payload) => {
  return axios.put(`${basePath}/address`, payload);
};

