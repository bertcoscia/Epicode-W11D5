import { Col, Row } from "react-bootstrap";
import SongRow from "./SongRow";
import SearchResult from "./SearchResults";
import { useSelector } from "react-redux";

const Main = () => {
  const searchedSongs = useSelector(state => state.searchedSongs.songs);

  const arrayPop = ["the weeknd", "harry styles", "coldplay"];
  const arrayRock = ["rolling stones", "pink floyd", "oasis"];
  const araryElectronic = ["fred again", "skrillex", "avicii"];
  const arrayFrench = ["PNL", "lomepal", "damso"];

  const randomArtistPop = arrayPop[Math.floor(Math.random() * arrayPop.length)];
  const randomArtistRock = arrayRock[Math.floor(Math.random() * arrayRock.length)];
  const randomArtistElectronic = araryElectronic[Math.floor(Math.random() * araryElectronic.length)];
  const randomArtistFrench = arrayFrench[Math.floor(Math.random() * arrayFrench.length)];

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
      <SongRow query={randomArtistPop} genre="pop" />
      <SongRow query={randomArtistRock} genre="rock" />
      <SongRow query={randomArtistElectronic} genre="electronic" />
      <SongRow query={randomArtistFrench} genre="french" />
    </main>
  );
};

export default Main;

{
  /* <Col xs={12} md={10} className="mainPage overflow-y-auto position-relative">
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
    </Col> */
}
