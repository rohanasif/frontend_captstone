import { Table, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { remove, empty } from "../actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.main.cart);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + Number(item.price), 0);
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleEmpty = () => {
    dispatch(empty());
  };

  return (
    <div>
      <NavBar />
      <h2>Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td>Total:</td>
            <td>${calculateTotal()}</td>
          </tr>
        </tfoot>
      </Table>
      <Button variant="danger" onClick={() => handleEmpty()}>
        Empty Cart
      </Button>
    </div>
  );
};

export default Cart;
