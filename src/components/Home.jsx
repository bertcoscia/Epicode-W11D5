import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import Main from "./Main";
import Player from "./Player";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Aside />
          <Main />
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default Home;
