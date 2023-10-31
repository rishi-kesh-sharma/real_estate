import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "@/apiCalls/profile";

// Initial state
const initialState = {
  profile: {},
};

export const profile = createAsyncThunk("profile", async () => {
  try {
    const res = await getProfile();
    console.log(res);
  } catch (err) {}
});

// Actual Slice
export const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(profile.pending, (state, action) => {
      // ...
    });
    builder.addCase(profile.fulfilled, (state, action) => {
      // ...
    });
    builder.addCase(profile.rejected, (state, action) => {
      // ...
    });
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;
