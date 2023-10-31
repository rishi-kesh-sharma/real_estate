import { logoutUser } from "@/apiCalls/auth";
import { removeTokenFromLocalStorage } from "@/utils/LocalStorage";
import Toast from "./Toast";
export const logoutFunctionality = async (removeCookie, router) => {
  try {
    const res = await logoutUser();
    router.reload(window.location.href);
    removeTokenFromLocalStorage();
    removeCookie("token");
  } catch (err) {
    console.log(err.response.data);
    Toast.fire({
      icon: "error",
      title: `Cannot Logout: ${err.response.data.message}`,
    });
  }
};
