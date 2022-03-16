import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSilce = createSlice({
    name: 'counter',
    initialState,
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
         }
    }
});

const store = configureStore({
    reducer: counterSilce.reducer
});
export const counterActions = counterSilce.actions

export default store;
