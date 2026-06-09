import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  let totalAmount = 0;
  let productDiscount = 0;
  let buy2Get1Discount = 0;

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    totalAmount += subtotal;

    // Rule 1: 10% discount if quantity >= 3
    if (item.quantity >= 3) {
      productDiscount += subtotal * 0.1;
    }

    // Individual Rule (Option A): Buy 2 Get 1 Free
    const freeItems = Math.floor(item.quantity / 3);
    buy2Get1Discount += freeItems * item.price;
  });

  const afterProductDiscount = totalAmount - productDiscount;

  // Rule 2: Additional 5% discount if total > ₹5000
  const cartDiscount =
    afterProductDiscount > 5000 ? afterProductDiscount * 0.05 : 0;

  const finalAmount = Math.max(
    0,
    afterProductDiscount - cartDiscount - buy2Get1Discount
  );

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
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
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-box">
        <h3>Cart Summary</h3>

        <div style={{ marginTop: "12px" }}>
          {cart.map((item) => (
            <div className="checkout-row" key={item.id}>
              <span>
                {item.name} × {item.quantity}
                {Math.floor(item.quantity / 3) > 0 && (
                  <span style={{ marginLeft: "8px", color: "#16a34a", fontSize: "13px" }}>
                    🎁 {Math.floor(item.quantity / 3)} free
                  </span>
                )}
              </span>
              <span>₹{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "16px" }}>
          <div className="checkout-row">
            <span>Total Amount</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>

          <div className="checkout-row green">
            <span>Product Discount (10% on qty ≥ 3)</span>
            <span>− ₹{productDiscount.toFixed(2)}</span>
          </div>

          <div className="checkout-row green">
            <span>Buy 2 Get 1 Free</span>
            <span>− ₹{buy2Get1Discount.toFixed(2)}</span>
          </div>

          <div className="checkout-row green">
            <span>Cart Discount (5% on total &gt; ₹5000)</span>
            <span>− ₹{cartDiscount.toFixed(2)}</span>
          </div>

          <div className="checkout-row total">
            <span>Final Amount</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
