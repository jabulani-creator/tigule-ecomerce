import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  product: { reviews: [] },
};

export const getSingleProduct = createAsyncThunk(
  "get/product",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`api/v1/products/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const productSlice = createSlice({
  name: "singleProduct",
  initialState,
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.product = action.payload;
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default productSlice.reducer;
