import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import Main from "./Main";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Aside />
        <Main />
      </Row>
    </Container>
  );
};

export default Home;
