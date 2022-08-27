import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductsThunk = createAsyncThunk(
  "get/products",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("api/v1/products");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
