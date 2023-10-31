export const setTokenToLocalStorage = (localStorage, token) => {
  localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = (localStorage) => {
  return localStorage.getItem("token");
};
export const removeTokenFromLocalStorage = (localStorage) => {
  return localStorage.removeItem("token");
};
