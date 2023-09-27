import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaCarCrash, FaUser, FaInfo} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">
          <FaCarCrash /> Autoparts Outlet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="/cart">
              <FaUser /> Sign In
            </Nav.Link>
            <Nav.Link href="/about">
              <FaInfo /> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header