import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchedSongsReducer from "../reducers/searchedSongsReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchedSongs: searchedSongsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
