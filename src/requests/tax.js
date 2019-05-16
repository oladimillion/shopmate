import axios from "axios";
import API from "../api";

const basePath = `${API}/tax`;

export const getTax = (payload) => {
  return axios.get(`${basePath}`);
};

