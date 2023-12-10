import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <Container className="flex items-center justify-center h-screen">
      <Row className="flex h-screen items-center">
        <Col className="flex flex-col items-center justify-around w-full h-full">
          <h1 className="text-3xl text-center">
            Welcome to{" "}
            <span className="text-5xl text-[#F4CE14]">Little Lemon</span>{" "}
            Chicago
          </h1>
          <Container className="flex flex-col items-center justify-center gap-3">
            <Link className="w-full" to="/login">
              <button className="bg-[#F4CE14] w-full rounded-full text-white">
                Log in
              </button>
            </Link>
            <Link className="w-full" to="/signup">
              <button className="bg-[#F4CE14] w-full rounded-full text-white">
                Sign Up
              </button>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Start;
