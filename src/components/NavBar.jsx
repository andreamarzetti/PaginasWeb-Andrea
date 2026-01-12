import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
       <Navbar.Brand
  as={NavLink}
  to="/"
  className="brand d-flex align-items-center"
>
  <img
    src={"/src/assets/logo.jpg"}
    className="navbar-logo me-2"
  />
  Pastelería
</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/pasteleria">
              Pastelería
            </Nav.Link>

            <Nav.Link as={NavLink} to="/nosotros">
              Nosotros
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
