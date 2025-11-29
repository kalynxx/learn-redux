/*
 * Defining parts ("slices") of the global application state, in this case a counter.
 */
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

// Each part/slice has an "initial state".
const initialState: CounterState = {
  value: 0,
};

// Full definition of the slice, including its name, initial state and reducer functions.
// A "reducer function" copies the current immutable object, alters it and then redux replaces
// the former immutable object with the new one.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // each reducer function gets the current state aswell as an optional "action"
    // of the type PayloadAction<T>, whereas T defines the type of the payload.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // "extraReducers" are used in case of asyncronous operations on the state.
  extraReducers: (builder) => {
    // in case the "incrementAsync", like defined below, async operations have different states
    // and its possible to define behavior ("cases") depending on said state (pending, fulfilled, rejected,...)
    builder.addCase(incrementAsync.pending, () => {
      console.log("incrementAsync.pending");
    });
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    );
  },
});

// definition of an asyncronous reducer
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // awaiting e.g. an API call (in this case an artificial Timeout)
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
