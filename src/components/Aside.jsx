import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getSongsAction } from "../redux/actions";

const Aside = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getSongsAction(query));
  };

  return (
    <Col md={2}>
      <Nav id="sidebar" className="navbar navbar-expand-md fixed-left justify-content-between">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#Home">
            <img src="./assets/logo/logo.png" alt="Spotify logo" style={{ width: "131px", height: "40px" }} />
          </Navbar.Brand>
          <Button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Navbar>
              <Nav className="d-flex flex-column row-gap-3">
                <Nav.Item>
                  <Nav.Link href="#Home" className="d-flex align-items-centre d-block">
                    <HouseDoorFill size={25} />
                    &nbsp; Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Home" className="d-flex align-items-centre d-block">
                    <BookFill size={25} />
                    &nbsp; Your Library
                  </Nav.Link>
                </Nav.Item>
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mt-3">
                    <Form.Control type="text" placeholder="Search" aria-label="Search" onChange={handleChange} />
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
          <a href="#Home">Cookie Policy</a> | <a href="#Home">Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};

export default Aside;
