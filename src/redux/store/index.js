import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songsReducer";

const rootReducer = combineReducers({
  songs: songsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
