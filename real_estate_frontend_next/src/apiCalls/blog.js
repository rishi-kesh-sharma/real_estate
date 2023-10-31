import axios from "axios";
import { baseUrl } from "./constants";

export const getBlogFun = async (token) => {
  const response = await axios.post(`${baseUrl}/blogs/search`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getBlogDetailFun = async (id, token) => {
  const response = await axios.get(
    `${baseUrl}/blogs/detail?id=${id}&populate=author`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
