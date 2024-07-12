import { PLAY_SONG } from "../actions";

const intialState = {
  song: null
};

const playSongReducer = (state = intialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        song: action.payload
      };
    default:
      return state;
  }
};

export default playSongReducer;
