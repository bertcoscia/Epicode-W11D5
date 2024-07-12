import { Col, Row } from "react-bootstrap";
import SongRow from "./SongRow";
import SearchResult from "./SearchResults";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const searchedSongs = useSelector(state => state.searchedSongs.songs);

  useEffect(() => {
    console.log(searchedSongs);
  }, [searchedSongs]);

  return (
    <Col xs={12} md={10} className="mainPage overflow-y-auto position-relative">
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
      <SongRow query="the weeknd" />
      <SongRow query="harry styles" />
      <SongRow query="the 1975" />
      <SongRow query="oasis" />
    </Col>
  );
};

export default Main;
