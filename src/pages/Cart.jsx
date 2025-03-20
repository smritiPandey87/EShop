import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartSlice";
import { BsFillCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("cartdata", cart);
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);

  // console.log("userData", user);
  // if (!user) {
  //   navigate("/login");
  //   return null;
  // }
  const totalQuantity = cart.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = cart.products.reduce(
    (ac, productt) => ac + productt.quantity * productt.price,
    0
  );
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-center px-4">
      <h1 className="text-center mt-10 text-3xl md:text-5xl font-bold text-red-600">
        Welcome To Your Cart
      </h1>
      {cart.products.length > 0 ? (
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-around mt-8">
          <div className="w-full md:w-2/3 overflow-x-auto">
            <div className="hidden md:flex justify-around bg-red-300 py-3 rounded-xl shadow-md">
              <p className="w-1/4 text-center">Product</p>
              <p className="w-1/6 text-center">Price</p>
              <p className="w-1/6 text-center">Quantity</p>
              <p className="w-1/6 text-center">Subtotal</p>
              <p className="w-1/6 text-center">Remove</p>
            </div>
            <div className="mt-5">
              {cart.products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center bg-red-100 p-4 my-2 rounded-lg shadow-md"
                >
                  <img
                    className="h-20 w-20 object-cover rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="mt-2 md:mt-0 md:w-1/4 text-center md:text-left">
                    {product.name}
                  </p>
                  <p className="mt-2 md:mt-0 md:w-1/6 text-center">
                    Rs {Math.round(product.price)}
                  </p>
                  <div className="flex items-center mt-2 md:mt-0 md:w-1/6 justify-center">
                    <button
                      className="px-2"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </button>
                    <p className="mx-2">{product.quantity}</p>
                    <button
                      className="px-2"
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 md:mt-0 md:w-1/6 text-center">
                    Rs {Math.round(product.quantity * product.price)}
                  </p>
                  <button
                    className="mt-2 md:mt-0 md:w-1/6 flex justify-center text-red-600"
                    onClick={() => dispatch(deleteFromCart(product.id))}
                  >
                    <FaTrashCanArrowUp />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5 bg-red-200 mt-8 md:mt-0 rounded-xl shadow-lg lg:ml-10">
            <h3 className="text-xl font-bold text-center ">CART TOTALS</h3>
            <div className="mt-5 flex justify-between">
              <p>Total Items:</p>
              <p>{totalQuantity}</p>
            </div>
            <div className="w-full bg-red-50 h-px my-4"></div>
            <div className="flex justify-between">
              <p>Total Price:</p>
              <p>Rs {Math.round(totalPrice)}</p>
            </div>
            <div className="w-full bg-red-50 h-px my-4"></div>
            <p className="text-yellow-800 mt-4">
              Shipping: Shipping to Chowkcity, Patna
            </p>
            <button className="w-full bg-red-500 mt-6 py-2 text-white rounded-full hover:bg-red-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center text-6xl text-gray-400">
          <BsFillCartXFill />
          <p className="text-2xl mt-4">Your cart is empty :(</p>
        </div>
      )}
    </div>
  );
}
