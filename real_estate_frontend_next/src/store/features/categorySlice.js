import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "@/components/utils/Toast";
import { getPropertiesFun, getPropertyDetailFun } from "@/apiCalls/property";
import { getCatCountFun, getCategoryFun } from "@/apiCalls/category";

// Initial state
const initialState = {
  loading: false,
  categories: [],
  categoryCount: [],
  error: null,
  catId: null,
};

export const getCategories = createAsyncThunk(
  "getCategories",
  async (data, thunkApi) => {
    try {
      const res = await getCategoryFun(data);
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

export const getCatId = createAsyncThunk("getCatId", async (data, thunkApi) => {
  try {
    const res = await getCategoryFun(data);
    return res.data.data;
  } catch (err) {
    console.log(err, "error")
    let error = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response);
  }
});

export const getCategoryCount = createAsyncThunk(
  "getCategoryCount",
  async ({ cat_name, icon }, thunkApi) => {
    try {
      const res = await getCatCountFun({ name: cat_name });
      return { count: res.data, name: cat_name, icon };
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
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get category id

    builder.addCase(getCatId.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCatId.fulfilled, (state, action) => {
      state.loading = false;
      state.catId = action.payload[0]._id;
      state.error = null;
    });
    builder.addCase(getCatId.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    // TODO: get homes
    builder.addCase(getCategoryCount.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getCategoryCount.fulfilled, (state, action) => {
      state.loading = false;
      const currentIndex = state.categoryCount.findIndex(
        (item) => item.name === action.payload.name
      );
      console.log(currentIndex, "current Index");
      if (currentIndex === -1) {
        state.categoryCount = [
          ...state.categoryCount,
          {
            name: action.payload.name,
            total: action.payload.count.total,
            image: action.payload.icon,
          },
        ];
      }
      state.error = null;
    });
    builder.addCase(getCategoryCount.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
  },
});

export default categorySlice.reducer;
