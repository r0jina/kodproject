import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import OneProduct from "./pages/OneProduct";
import Register from "./pages/Register";
import Cart from "./Components/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/oneproduct" element={<OneProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
