import { Col, Row } from "react-bootstrap";

const Main = () => {
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
            <Row id="rockSection" className="row-cols-1 row-cols-sm-2 row-cols-lg3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
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
      </Row>
    </Col>
  );
};

export default Main;