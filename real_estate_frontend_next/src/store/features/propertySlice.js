import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "@/components/utils/Toast";
import { getPropertiesFun, getPropertyDetailFun } from "@/apiCalls/property";

// Initial state
const initialState = {
  loading: false,
  featuredProperties: [],
  homes: [],
  detail: null,
  error: null,
  recentProperties: [],
};

export const getRecentProperties = createAsyncThunk(
  "getRecentProperties",
  async (data, thunkApi) => {
    try {
      const res = await getPropertiesFun(data);
      return res.data.data;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const getFeaturedProperties = createAsyncThunk(
  "getFeaturedProperties",
  async (_, thunkApi) => {
    try {
      const res = await getPropertiesFun({
        populate: "category amenities",
        isFeatured: false,
        isSold: false,
      });
      return res.data.data;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const getHomesProperties = createAsyncThunk(
  "getHomesProperties",
  async (cat_id, thunkApi) => {
    try {
      const res = await getPropertiesFun({ category: cat_id });
      return res.data.data;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPropertyDetail = createAsyncThunk(
  "getPropertyDetail",
  async (id, thunkApi) => {
    try {
      const res = await getPropertyDetailFun(id);
      return res.data.data;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

// Actual Slice
export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeaturedProperties.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFeaturedProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.featuredProperties = action.payload;
      state.error = null;
    });
    builder.addCase(getFeaturedProperties.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get homes
    builder.addCase(getHomesProperties.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getHomesProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.homes = action.payload;
      state.error = null;
    });
    builder.addCase(getHomesProperties.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get recent properties
    builder.addCase(getRecentProperties.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRecentProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.recentProperties = action.payload;
      state.error = null;
    });
    builder.addCase(getRecentProperties.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get detail
    builder.addCase(getPropertyDetail.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPropertyDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
      state.error = null;
    });
    builder.addCase(getPropertyDetail.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
  },
});

export default propertySlice.reducer;
