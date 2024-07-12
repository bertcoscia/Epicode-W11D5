import { Col, Container, Row } from "react-bootstrap";
import PlayerSong from "./PlayerSong";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1 player">
      <Row className="h-100">
        <Col lg={10} className="">
          <Row className="justify-content-center align-items-center h-100">
            <PlayerSong />
            <Col xs={6} md={4} className="playerControls me-auto ms-5">
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

{
  /* <Container fluid style={{ marginLeft: "230px", backgroundColor: "#000000" }} className="d-flex h-100">
      <PlayerSong />
      <div className="d-flex playerControls">
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
    </Container> */
}
