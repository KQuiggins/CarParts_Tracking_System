import { Nav, Navbar, Container } from "react-bootstrap";
import { FaCarCrash, FaUser, FaInfo, FaUserEdit } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { SignIn, SignUp } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <FaCarCrash /> Autoparts Outlet
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/register">
                <Nav.Link>
                  <FaUserEdit /> Register
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <FaInfo /> About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
