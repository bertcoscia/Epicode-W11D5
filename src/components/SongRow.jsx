import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SingleSong from "./SingleSong";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const SongRow = ({ query }) => {
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
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <>
      {songs.length > 0 ? (
        <Row>
          <Col xs={10}>
            <div className="song-row">
              <h2>{capitalizeInitials(query)}</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3 d-flex flex-nowrap overflow-auto">{songs.length > 0 && songs.map(song => <SingleSong key={song.id} song={song} />)}</Row>
            </div>
          </Col>
        </Row>
      ) : (
        <Spinner animation="grow" variant="light" className="position-absolute top-50 start-50" />
      )}
    </>
  );
};

export default SongRow;
