import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Aside />
      </Row>
    </Container>
  );
};

export default Home;
