import { getTokenFromLocalStorage } from "@/utils/LocalStorage";
import axios from "axios";
import { baseUrl } from "./constants";
export const loginUser = async (data) => {
  const response = await axios.post(`${baseUrl}/auth/login`, data);
  return response;
};
export const registerUser = async (data) => {
  const response = await axios.post(`${baseUrl}/auth/register`, data);
  return response;
};
export const logoutUser = async () => {
  console.log(getTokenFromLocalStorage());
  const token = `Bearer ${getTokenFromLocalStorage(localStorage)}`;

  const response = await axios.get(`${baseUrl}/auth/logout`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};
