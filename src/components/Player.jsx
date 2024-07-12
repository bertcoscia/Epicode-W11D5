import { Col, Container, Row } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="flex-column justify-content-center align-items-center h-100">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#Home">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#Home">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#Home">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#Home">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#Home">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
