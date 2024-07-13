import { Container } from "react-bootstrap";
import Aside from "./Aside";
import Player from "./Player";
import FavouriteSongs from "./FavouriteSongs";

const Library = () => {
  return (
    <>
      <Container fluid className="d-flex">
        <Aside />
        <FavouriteSongs />
      </Container>
      <Player />
    </>
  );
};

export default Library;
