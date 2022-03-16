import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSilce = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      // we can directly mutate the state in redux toolkit
      // because redux toolkit uses a package named emmer
      // under the hood to not mutate the state directly.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
    },
    login(state) {
      state.isAuthenticated = true;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSilce.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSilce.actions;
export const authActions = authSlice.actions;

export default store;
