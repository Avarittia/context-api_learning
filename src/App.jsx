import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Store from "./Pages/Store";
import Navigation from "./component/Navigation";
import { CartProvider } from "./Context/CartContext";
import { ShoppingCart } from "./component/ShoppingCart.jsx";

function App() {
  return (
    <CartProvider>
      <Navigation />

      <Container fluid className="mb-4 p-0">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
