import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "@/components/utils/Toast";
import { getCatCountFun, getCategoryFun } from "@/apiCalls/category";
import { getBlogDetailFun, getBlogFun } from "@/apiCalls/blog";

// Initial state
const initialState = {
  loading: false,
  blogs: [],
  detail: [],
  error: null,
};

export const getBlog = createAsyncThunk("getBlog", async (data, thunkApi) => {
  try {
    const res = await getBlogFun(data);
    return res.data.data;
  } catch (err) {
    let error = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response);
  }
});

export const getBlogDetail = createAsyncThunk(
  "getBlogDetail",
  async (id, thunkApi) => {
    try {
      const res = await getBlogDetailFun(id);
      return { count: res.data.data, name: cat_name, icon };
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
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = null;
    });
    builder.addCase(getBlog.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get homes
    builder.addCase(getBlogDetail.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getBlogDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
      state.error = null;
    });
    builder.addCase(getBlogDetail.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
  },
});

export default blogSlice.reducer;
