import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.main.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (users.find((user) => user.isLoggedin)) {
      navigate("/");
    }
  }, [users]);
  return (
    <Container className="flex items-center justify-center h-screen">
      <Row className="flex h-screen items-center">
        <Col className="flex flex-col items-center justify-around w-full h-full">
          <h1>Log In!</h1>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <button
              className="bg-[#F4CE14] w-full rounded-full text-white"
              type="submit"
            >
              Login
            </button>
          </Form>
          <p className="text-center">
            Don&apos;t have an account? <Link to="/signup">Sign Up!</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
