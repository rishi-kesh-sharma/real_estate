import { logoutUser } from "@/apiCalls/auth";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "@/utils/LocalStorage";
import Toast from "./Toast";
export const logoutFunctionality = async (router) => {
  try {
    const res = await logoutUser();

    return res;
  } catch (err) {
    return err.response;
  }
};
