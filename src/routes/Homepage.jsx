import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Row, Card, Button } from "react-bootstrap";
import { getDishes } from "../actions";
import { useEffect } from "react";
const Homepage = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.main.dishes);
  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const addToCart = (i) => {
    dispatch(addToCart(i));
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Row className="gap-4">
          {dishes.map((dish, i) => (
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Button variant="primary" onClick={() => addToCart()}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
