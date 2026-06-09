import Badge from "./Badge";

function CartItem({ item, increaseQty, decreaseQty, removeItem }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>

      <div className="qty-controls">
        <button className="btn-outline" onClick={() => decreaseQty(item.id)}>−</button>
        <span>{item.quantity}</span>
        <button className="btn-outline" onClick={() => increaseQty(item.id)}>+</button>
        {item.quantity >= 5 && <Badge />}
      </div>

      <p className="cart-item-total">₹{(item.price * item.quantity).toLocaleString()}</p>

      <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
