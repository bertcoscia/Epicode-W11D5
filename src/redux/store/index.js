import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchedSongsReducer from "../reducers/searchedSongsReducer";
import playSongReducer from "../reducers/playSongReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchedSongs: searchedSongsReducer,
  playing: playSongReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
