import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="cart-empty">
          <p>🛒 Your cart is empty</p>
          <Link to="/" className="btn btn-primary" style={{ display: "inline-block", marginTop: "16px", textDecoration: "none" }}>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      ))}

      <div className="cart-footer">
        <p className="cart-total">Total: ₹{total.toLocaleString()}</p>
        <Link to="/checkout" className="btn btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}

export default Cart;
