import { useSelector } from "react-redux";
import SingleSong from "./SingleSong";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";

const SearchResult = () => {
  const searchedSongs = useSelector(state => state.searchedSongs.songs);

  useEffect(() => {
    console.log(searchedSongs);
  }, []);
  return (
    <>
      <Row>
        <Col xs={10}>
          <div className="song-row">
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3 d-flex flex-nowrap overflow-auto">
              {searchedSongs.map(song => (
                <SingleSong key={song.id} song={song} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default SearchResult;
