import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Start from "./routes/Start";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Cart from "./routes/Cart";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/start" element={<Start />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
