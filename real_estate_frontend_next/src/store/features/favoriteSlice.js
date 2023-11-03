import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from "@/components/utils/Toast";
import {
  addFavoriteFun,
  getFavCountFun,
  getFavoritesFun,
  removeFavoriteFun,
} from "@/apiCalls/favorite";

// Initial state
const initialState = {
  loading: false,
  favorites: [],
  favoriteCount: 0,
  error: null,
  favId: null,
};

export const getFavorites = createAsyncThunk(
  "getFavorites",
  async (data, thunkApi) => {
    try {
      const res = await getFavoritesFun(data);
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

export const getFavoriteCount = createAsyncThunk(
  "getFavoriteCount",
  async ({ addedBy }, thunkApi) => {
    try {
      const res = await getFavCountFun({ addedBy });
      return res.data.total;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const addFavorite = createAsyncThunk(
  "addFavorite",
  async ({ addedBy, property }, thunkApi) => {
    try {
      await addFavoriteFun({ addedBy, property });
      const res = await getFavoritesFun({
        addedBy,
        populate: "addedBy property",
      });
      const countRes = await getFavCountFun({
        addedBy,
      });
      return { favorites: res.data.data, count: countRes.data.total };
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const removeFavorite = createAsyncThunk(
  "removeFavorite",
  async (id, thunkApi) => {
    try {
      await removeFavoriteFun(id);
      const res = await getFavoritesFun({
        addedBy,
        populate: "addedBy property",
      });
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
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavorites.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.favorites = action.payload;
      state.error = null;
    });
    builder.addCase(getFavorites.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
    builder.addCase(addFavorite.pending, (state, action) => {
      state.loading = true;

      state.error = null;
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.favorites = action.payload.favorites;
      state.favoriteCount = state.payload.count;
      state.error = null;
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
    builder.addCase(removeFavorite.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeFavorite.fulfilled, (state, action) => {
      state.loading = false;
      state.favorites = action.payload;
      state.favoriteCount = state.favorites.length;
      state.error = null;
    });
    builder.addCase(removeFavorite.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });

    builder.addCase(getFavoriteCount.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getFavoriteCount.fulfilled, (state, action) => {
      state.loading = false;
      state.favoriteCount = action.payload;
      state.error = null;
    });
    builder.addCase(getFavoriteCount.rejected, (state, action) => {
      state.loading = false;
      Toast.fire({
        icon: "error",
        title: action.payload,
      });
    });
  },
});

export default favoriteSlice.reducer;
