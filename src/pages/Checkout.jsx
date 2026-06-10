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

    if (item.quantity >= 3) {
      productDiscount += subtotal * 0.1;
    }

    const freeItems = Math.floor(item.quantity / 3);
    buy2Get1Discount += freeItems * item.price;
  });

  const afterProductDiscount = totalAmount - productDiscount;
  const cartDiscount = afterProductDiscount > 5000 ? afterProductDiscount * 0.05 : 0;
  const finalAmount = Math.max(0, afterProductDiscount - cartDiscount - buy2Get1Discount);
  const totalSaved = productDiscount + cartDiscount + buy2Get1Discount;

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products before checking out</p>
          <Link to="/" className="btn btn-primary" style={{ textDecoration: "none", display: "inline-block", marginTop: "16px" }}>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>🧾 Checkout</h1>
        <p className="checkout-subtitle">Review your order and discounts</p>
      </div>

      <div className="checkout-grid">

        {/* Left — Cart Summary */}
        <div className="checkout-card">
          <div className="checkout-card-title">
            <span>🛍️</span> Cart Summary
          </div>

          <div className="checkout-item-list">
            {cart.map((item) => (
              <div className="checkout-item-row" key={item.id}>
                <img src={item.image} alt={item.name} className="checkout-item-img" />
                <div className="checkout-item-info">
                  <p className="checkout-item-name">{item.name}</p>
                  <p className="checkout-item-qty">Qty: {item.quantity}</p>
                  {Math.floor(item.quantity / 3) > 0 && (
                    <span className="free-tag">🎁 {Math.floor(item.quantity / 3)} free</span>
                  )}
                </div>
                <p className="checkout-item-price">₹{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Price Breakdown */}
        <div className="checkout-card">
          <div className="checkout-card-title">
            <span>💰</span> Price Details
          </div>

          <div className="price-row">
            <span>Total MRP</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>

          {productDiscount > 0 && (
            <div className="price-row discount-row">
              <span>Product Discount <small>(10% on qty ≥ 3)</small></span>
              <span>− ₹{productDiscount.toFixed(2)}</span>
            </div>
          )}

          {buy2Get1Discount > 0 && (
            <div className="price-row discount-row">
              <span>Buy 2 Get 1 Free</span>
              <span>− ₹{buy2Get1Discount.toFixed(2)}</span>
            </div>
          )}

          {cartDiscount > 0 && (
            <div className="price-row discount-row">
              <span>Cart Discount <small>(5% on total &gt; ₹5000)</small></span>
              <span>− ₹{cartDiscount.toFixed(2)}</span>
            </div>
          )}

          <div className="price-row delivery-row">
            <span>Delivery Charges</span>
            <span className="free-delivery">FREE</span>
          </div>

          <div className="price-divider" />

          <div className="price-row total-row">
            <span>Total Amount</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>

          {totalSaved > 0 && (
            <div className="savings-banner">
              🎉 You save ₹{totalSaved.toFixed(2)} on this order!
            </div>
          )}

          <button className="btn btn-checkout">
            Place Order →
          </button>

          <Link to="/cart" className="back-link">← Back to Cart</Link>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
