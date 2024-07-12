import { GET_SONGS } from "../actions";

const initialState = {
  songs: []
};

const searchedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    default:
      return state;
  }
};

export default searchedSongsReducer;
