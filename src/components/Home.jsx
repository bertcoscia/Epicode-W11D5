import { Container } from "react-bootstrap";
import Aside from "./Aside";
import Main from "./Main";
import Player from "./Player";

const Home = () => {
  return (
    <>
      <Container fluid className="d-flex">
        <Aside />
        <Main />
      </Container>
      <Player />
    </>
  );
};

export default Home;
