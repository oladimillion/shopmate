import axios from "axios";
import API from "../api";

const basePath = `${API}/categories`;

export const getCategories = () => {
  return axios.get(`${basePath}`);
};

