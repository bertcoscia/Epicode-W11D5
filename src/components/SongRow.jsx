import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleSong from "./SingleSong";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const SongRow = ({ query }) => {
  /* const dispatch = useDispatch();

  const songs = useSelector(state => state.songs.content);

*/

  function capitalizeInitials(string) {
    return string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const [songs, setSongs] = useState([]);

  const fetchSongs = () => {
    fetch(url + query)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - getSongsAction");
        }
      })
      .then(result => {
        setSongs(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    /* dispatch(getSongsAction(url, query)); */
    fetchSongs();
    console.log(songs);
  }, []);

  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{capitalizeInitials(query)}</h2>
          <Row id="rockSection" className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3 d-flex flex-nowrap overflow-auto">
            {songs.length > 0 && songs.map(song => <SingleSong key={song.id} song={song} />)}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default SongRow;
