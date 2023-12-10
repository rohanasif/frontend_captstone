import { Container, Row, Col, Form } from "react-bootstrap";
const Signup = () => {
  return (
    <Container className="flex items-center justify-center h-screen">
      <Row className="flex h-screen items-center">
        <Col className="flex flex-col items-center justify-around w-full h-full">
          <h1>Sign Up!</h1>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button
              className="bg-[#F4CE14] w-full rounded-full text-white"
              type="submit"
            >
              Signup
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
