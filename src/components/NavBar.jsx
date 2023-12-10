import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const loggedIn = false;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="w-full flex justify-between">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Brand logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {loggedIn ? (
              <button>Logout</button>
            ) : (
              <Nav.Link as={Link} to="/start">
                Login/Signup
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              {}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
