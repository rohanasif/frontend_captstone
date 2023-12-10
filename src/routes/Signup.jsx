import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password }));
  };
  return (
    <Container className="flex items-center justify-center h-screen">
      <Row className="flex h-screen items-center">
        <Col className="flex flex-col items-center justify-around w-full h-full">
          <h1>Sign Up!</h1>
          <Form onSubmit={(e) => handleSignup(e)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
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
              Signup
            </button>
          </Form>
          <p className="text-center">
            Already have an account? <Link to="/login">Log In!</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
