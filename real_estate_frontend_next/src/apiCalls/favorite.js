import axios from "axios";
import { baseUrl } from "./constants";
import { getTokenFromLocalStorage } from "@/utils/LocalStorage";

export const getFavoritesFun = async (data) => {
  const response = await axios.post(`${baseUrl}/favorites/search`, data, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};
export const addFavoriteFun = async (data) => {
  const response = await axios.post(`${baseUrl}/favorites/create`, data, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};
export const removeFavoriteFun = async (id) => {
  const response = await axios.delete(`${baseUrl}/favorites/delete?id=${id}`, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};

export const getFavCountFun = async (data) => {
  const response = await axios.post(`${baseUrl}/favorites/count`, data, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};
