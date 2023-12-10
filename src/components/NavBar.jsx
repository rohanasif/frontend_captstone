import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.main.users);
  const loggedInUser = allUsers.find((user) => user.isLoggedin);
  const loggedIn = loggedInUser?.isLoggedin;
  const cart = useSelector((state) => state.main.cart);
  const handleLogout = async () => {
    try {
      if (loggedInUser) {
        await dispatch(logout(loggedInUser));
        alert("You are logged out!");
        navigate("/login");
      } else {
        alert("No user is currently logged in.");
      }
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
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
              <button className="" onClick={() => handleLogout()}>
                Logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/start">
                Login/Signup
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
