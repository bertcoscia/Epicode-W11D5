export const GET_SONGS = "GET_SONGS";

export const getSongsAction = (url, query) => {
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
        console.log(result.data);
      })
      .catch(error => console.log(error));
  };
};
