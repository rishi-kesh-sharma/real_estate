import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "@/apiCalls/auth";

// Initial state
const initialState = {
  isLogged: false,
  user: {},
};

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const res = await loginUser(data);
    return res.data.data;
  } catch (err) {
    let error = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response);
  }
});
export const register = createAsyncThunk("register", async (data) => {
  try {
    const res = await registerUser(data);
    return res.data.user;
  } catch (err) {
    let error = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response);
  }
});

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state = { ...state, isLoading: true };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        state.error = {
          message: action.payload.data.message,
          status: action.payload.status,
        };
      } else {
        state.error = {
          message: action.error.message,
          status: action.error.status,
        };
      }
    });
    builder.addCase(register.pending, (state, action) => {
      state = { ...state, isLoading: true };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state = {
        ...state,
        isLogged: true,
        user: action.payload,
        isLoading: false,
      };
    });
    builder.addCase(register.rejected, (state, action) => {
      if (action.payload) {
        state.error = {
          message: action.payload.data.message,
          status: action.payload.status,
        };
      } else {
        state.error = {
          message: action.error.message,
          status: action.error.status,
        };
      }
    });
  },
});
export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
