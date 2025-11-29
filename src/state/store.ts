/* 
 * Central configuration place for the global store of the application
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    // adds the default exported counterReducer 
    // (the reducer object inside the counterSlice object)
    // to the global store.
    // All slices get added as reducers here.
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
