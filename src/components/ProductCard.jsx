function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
        {product.stock === 0 && (
          <div className="out-of-stock-overlay">Out of Stock</div>
        )}
      </div>

      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toLocaleString()}</p>
        <p className="stock">
          {product.stock === 0
            ? "❌ Unavailable"
            : `✅ In Stock: ${product.stock}`}
        </p>

        <button
          className="btn btn-primary"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          {product.stock === 0 ? "Out of Stock" : "🛒 Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
