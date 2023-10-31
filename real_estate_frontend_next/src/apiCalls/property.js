import axios from "axios";
import { baseUrl } from "./constants";

export const getPropertiesFun = async (data) => {
  const response = await axios.post(`${baseUrl}/properties/search`, data, {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  return response;
};

export const getPropertyDetailFun = async (id) => {
  const response = await axios.get(
    `${baseUrl}/properties/detail?id=${id}&populate=createdBy amenities category`,
    {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  );
  return response;
};
