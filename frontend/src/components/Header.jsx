import { UserButton, useClerk } from "@clerk/clerk-react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaCarCrash, FaUser, FaInfo, FaUserEdit } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { SignIn, SignUp } from "@clerk/clerk-react";

// Inside your Header component
// import { useClerk } from "@clerk/clerk-react";

function Header() {
  const { user } = useClerk();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FaCarCrash /> Car Parts Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <UserButton />
              </>
            ) : (
              <>
                <LinkContainer to="/sign-up">
                  <Nav.Link>
                    <FaUserEdit /> Register
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sign-in">
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>
                    <FaInfo /> About
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
