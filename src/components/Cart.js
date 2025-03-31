import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/CartSlice"; // Import clearCart
import { Link } from "react-router";
import { FaTrashAlt } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Function to remove a single item
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  // Function to clear the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item?.card?.info?.price / 100 || 0),
    0
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-warning fw-bold">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <BsCartX size={100} className="text-secondary mb-3" />
          <h4 className="text-muted">Your cart is empty!</h4>
          <Link to="/" className="btn btn-warning mt-3 fw-bold">
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div
                key={item?.card?.info?.id || index}
                className="card mb-3 shadow-lg p-3"
              >
                <div className="row g-0">
                  <div className="col-md-9 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title text-primary fw-bold">
                        {item?.card?.info?.name}
                      </h5>
                      <p className="card-text">
                        <span className="fw-bold text-success">Price:</span> ₹
                        {item?.card?.info?.price / 100}
                      </p>
                      <p className="text-muted">
                        <span className="fw-bold">Category:</span>{" "}
                        {item?.card?.info?.category}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-danger shadow-sm"
                      onClick={() => handleRemove(item?.card?.info?.id)}
                    >
                      <FaTrashAlt size={18} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="col-md-4">
            <div className="card bg-dark text-white p-4 shadow-lg">
              <h4 className="text-center mb-3">Order Summary</h4>
              <hr />
              <p className="fw-semibold">Total Items: {cartItems.length}</p>
              <h5 className="fw-bold text-success">Total: ₹{totalPrice}</h5>
              <hr />
              <button className="btn btn-success w-100 fw-bold">
                Proceed to Checkout
              </button>
              <button
                className="btn btn-outline-danger w-100 fw-bold mt-3"
                onClick={handleClearCart}
              >
                🗑 Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
