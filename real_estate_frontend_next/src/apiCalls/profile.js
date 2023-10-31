import { getTokenFromLocalStorage } from "@/utils/LocalStorage";
import axios from "axios";
import { baseUrl } from "./constants";
export const getProfile = async (token) => {
  const response = await axios.get(`${baseUrl}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export const updateProfile = async (data) => {
  const response = await axios.put(`${baseUrl}/users/update`, data, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};

export const updatePassword = async (data) => {
  const response = await axios.post(`${baseUrl}/user/update-password`, data, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage(localStorage)}`,
    },
  });
  return response;
};
