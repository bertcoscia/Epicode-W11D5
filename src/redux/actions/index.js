export const GET_SONGS = "GET_SONGS";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const getSongsAction = query => {
  return dispatch => {
    fetch(url + query)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - getSongsAction");
        }
      })
      .then(result => {
        dispatch({
          type: GET_SONGS,
          payload: result.data
        });
      })
      .catch(error => console.log(error));
  };
};

export const addToFavouriteAction = song => ({ type: ADD_TO_FAVOURITE, payload: song });

export const removeFromFavouriteAction = song => ({ type: REMOVE_FROM_FAVOURITE, payload: song });
