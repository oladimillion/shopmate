import axios from "axios";
import API from "../api";

const basePath = `${API}/departments`;

export const getDepartments = () => {
  return axios.get(`${basePath}`);
};

