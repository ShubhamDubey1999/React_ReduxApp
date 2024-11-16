import { createSlice } from "@reduxjs/toolkit";
import { resetReduxopedia } from "../action/actions";
const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we will define all the actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, actions) => {
      state.count -= Number(actions.payload) || 0;
    },
    incrementMultiplier: (state, actions) => {
      state.count += Number(actions.payload) || 0;
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxopedia, (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  // resetCounter
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
