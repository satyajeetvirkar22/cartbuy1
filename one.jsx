import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    window.alert("Coming Soon! Checkout functionality will be available soon.");
  };

  return (
    <div className="cart-page">
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#2e7d32",
          color: "white"
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/plants" style={{ color: "white" }}>
          Plants
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartCount})
        </Link>
      </nav>

      <div style={{ padding: "24px" }}>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty!</h2>
            <p>Discover our beautiful collection of houseplants.</p>
            <Link to="/plants">
              <button type="button">Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    padding: "20px 0",
                    borderBottom: "1px solid #ddd"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <div style={{ flex: "1", minWidth: "160px" }}>
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: ₹{item.price.toFixed(2)}
                    </p>

                    <p>
                      Total: ₹
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "36px",
                        textAlign: "center"
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{
                      backgroundColor: "#c62828",
                      color: "white",
                      padding: "8px 14px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div
              className="cart-summary"
              style={{ marginTop: "24px" }}
            >
              <h2>
                Total Amount: ₹{totalAmount.toFixed(2)}
              </h2>

              <button
                type="button"
                onClick={handleCheckout}
                style={{
                  padding: "12px 20px",
                  marginRight: "12px",
                  cursor: "pointer"
                }}
              >
                Checkout
              </button>

              <Link to="/plants">
                <button
                  type="button"
                  style={{
                    padding: "12px 20px",
                    cursor: "pointer"
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;