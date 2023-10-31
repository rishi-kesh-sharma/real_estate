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
  console.log("in api logout");
  console.log(getTokenFromLocalStorage());
  const token = `Bearer ${getTokenFromLocalStorage()}`;

  const response = await axios.post(
    `${baseUrl}/logout`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response;
};
