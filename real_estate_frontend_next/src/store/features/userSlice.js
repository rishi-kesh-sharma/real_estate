import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  userState: {},
};

export const login = createAsyncThunk("login", async () => {
  // const res = ....
  // return res
});

// Actual Slice

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, action) {
      state.userState = action.payload;
    },

    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserState } = userSlice.actions;

export const selectUserState = (state) => state.user.userState;

export default userSlice.reducer;
