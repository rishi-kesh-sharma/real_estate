import axios from "axios";
import { baseUrl } from "./constants";

export const getCategoryFun = async (data) => {
  const response = await axios.post(`${baseUrl}/categories/search`, data, {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  return response;
};


export const getCatCountFun = async (data) => {
  const response = await axios.post(`${baseUrl}/categories/count`, data, {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  return response;
};
