import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";
import categorySlice from "./features/categorySlice";
import propertySlice from "./features/propertySlice";
import blogSlice from "./features/blogSlice";
import favoriteSlice from "./features/favoriteSlice";

// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });
const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    category: categorySlice,
    property: propertySlice,
    blog: blogSlice,
    favorite: favoriteSlice,
  },
});

export default store;
