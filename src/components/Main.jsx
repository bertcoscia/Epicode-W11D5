import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction } from "../redux/actions";
import SingleSong from "./SingleSong";

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const Main = () => {
  const dispatch = useDispatch();

  const songs = useSelector(state => state.songs.content);

  useEffect(() => {
    dispatch(getSongsAction(url, "the weeknd"));
    console.log(songs);
  }, []);

  return (
    <Col xs={12} md={9} className="mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#Home">TRENDING</a>
          <a href="#Home">PODCAST</a>
          <a href="#Home">MOODS AND GENRES</a>
          <a href="#Home">NEW RELEASES</a>
          <a href="#Home">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row id="rockSection" className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3 d-flex flex-nowrap overflow-auto">
              {songs.length > 0 && songs.map(song => <SingleSong key={song.id} song={song} />)}
            </Row>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row id="popSection" className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row id="hipHopSection" className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row> */}
    </Col>
  );
};

export default Main;
