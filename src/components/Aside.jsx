import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Aside = () => {
  return (
    <Col xs={12}>
      <Nav id="sidebar" className="navbar-expand-md fixed-left justify-content-between">
        <Container className="flex-column align-items-start">
          <Nav.Item>
            <Nav.Link href="#Home">
              <img src="./assets/logo/logo.png" alt="Spotify logo" style={{ width: "131px", height: "40px" }} />
            </Nav.Link>
          </Nav.Item>
          <Button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Navbar>
              <Nav>
                <Nav.Link href="#Home" className="d-flex align-items-centre">
                  <Nav.Item>
                    <HouseDoorFill />
                    &nbsp; Home
                  </Nav.Item>
                </Nav.Link>
                <Nav.Link href="#Home" className="d-flex align-items-centre">
                  <Nav.Item>
                    <BookFill />
                    &nbsp; Your Library
                  </Nav.Item>
                </Nav.Link>
                <Form>
                  <InputGroup className="mt-3">
                    <Form.Control type="text" placeholder="Search" aria-label="Search" />
                    <Button variant="dark" className="btn-outline-secondary btn-sm h100">
                      GO
                    </Button>
                  </InputGroup>
                </Form>
              </Nav>
            </Navbar>
          </div>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn">Sign Up</Button>
          <Button className="login-btn">Login</Button>
          <a href="#Home">Cookie Policy</a>
          <a href="#Home">Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};

export default Aside;
