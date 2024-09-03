import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call or asynchronous function call using thunk
// first argument is the name of slice + / + name of thunk function
export const fetchRestuarant = createAsyncThunk(
  "restuarantSlice/fetchRestuarant",
  () => {
    const result = axios
      .get("./restaurant.json")
      .then((response) => response.data);
    console.log("response from thunk");
    console.log(result);
    return result;
  }
);
const restuarantSlice = createSlice({
  name: "restuarantSlice",
  initialState: {
    Loading: false, //pending state that means, api call in progress
    allRestuarant: [], // resolve stage
    error: "", // rejected state -return error
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestuarant.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(fetchRestuarant.fulfilled, (state, action) => {
      state.Loading = false;
      state.allRestuarant = action.payload;
      state.searchRestaurant = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRestuarant.rejected, (state, action) => {
      state.Loading = false;
      state.allRestuarant = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    searchRestaurant: (state, action) => {
      state.allRestuarant.restaurants =
        state.searchRestaurant?.restaurants.filter((item) =>
          item.neighborhood.toLowerCase().includes(action.payload)
        );
    },
  },
});
export default restuarantSlice.reducer;
export const { searchRestaurant } = restuarantSlice.actions;

// redux is a synchronous operation
// but api call or fil read or write etc are asynchronous operations
//  to deal with asynchronous operation in redux,we are using redux thunk
// Thunk is not a part of slice, seperate method in redux toolkit
