export const setTokenToLocalStorage = (localStorage, token) => {
  localStorage.setItem("token", token);
};
export const getTokenFromLocalStorage = (localStorage) => {
  return localStorage.getItem("token");
};
export const removeTokenFromLocalStorage = (localStorage) => {
  return localStorage.removeItem("token");
};

export const setUserToLocalStorage = (localStorage, user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getUserFromLocalStorage = (localStorage) => {
  return localStorage.getItem("user");
};
export const removeUserFromLocalStorage = (localStorage) => {
  return localStorage.removeItem("user");
};
