import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./features/allProducts/allProductsSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    singleProduct: productReducer,
  },
});
