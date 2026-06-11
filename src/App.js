import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Loader from "./components/Loader";

const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const FormDemo = lazy(() => import("./pages/FormDemo"));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/form">Form Demo</Link>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/form" element={<FormDemo />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
