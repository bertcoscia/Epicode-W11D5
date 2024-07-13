import { Col, Row } from "react-bootstrap";
import SearchResult from "./SearchResults";
import { useSelector } from "react-redux";
import FavouriteRow from "./FavouriteRow";

const FavouriteSongs = () => {
  const searchedSongs = useSelector(state => state.searchedSongs.songs);

  return (
    <main className="main-container overflow-x-auto">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#Home">TRENDING</a>
          <a href="#Home">PODCAST</a>
          <a href="#Home">MOODS AND GENRES</a>
          <a href="#Home">NEW RELEASES</a>
          <a href="#Home">DISCOVER</a>
        </Col>
      </Row>
      {searchedSongs.length > 0 && <SearchResult />}
      <FavouriteRow />
    </main>
  );
};

export default FavouriteSongs;
