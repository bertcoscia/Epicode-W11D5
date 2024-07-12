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
    </Col>
  );
};

export default Main;
