import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "get/products",
  async (_, thunkApi) => {
    let url = "api/v1/products";
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default allProductsSlice.reducer;
