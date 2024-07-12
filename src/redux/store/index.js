import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
