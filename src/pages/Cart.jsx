import React from "react";
import { useSelector } from "react-redux";
import { FaTrashCanArrowUp } from "react-icons/fa6";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  //   console.log("printcart", cart);
  //   console.log("printproducts", cart.products);
  const totalQuantity = cart.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = cart.products.reduce(
    (ac, productt) => ac + productt.quantity * productt.price,
    0
  );
  return (
    <div className="w-screen flex flex-col flex-wrap">
      <h1 className="flex , justify-center items-center mt-10 text-5xl font-bold text-red-600">
        {" "}
        Welcome To Your Cart
      </h1>
      {cart.products.length > 0 ? (
        <div className="flex justify-around w-screen flex-wrap">
          <div className="flex-wrap">
            <div className="flex  mx-w-[900px] justify-around mt-12  h-[50px] ml-7 rounded-xl bg-red-300 hover:-translate-y-2 hover:shadow-xl  ">
              <div className="flex items-center">
                <p>products</p>
              </div>

              <div className="flex justify-around items-center gap-9">
                <p className="ml-[100px]">price</p>
                <p>quantity</p>
                <p>sub total</p>
                <p className="ml-48">Remove</p>
              </div>
            </div>
            <div className="w-[900px]">
              {cart.products.map((product, idx) => (
                <div
                  className="flex w-[900px] ml-5 items-center mr-5 relative mt-10 rounded-xl hover:bg-red-200"
                  key={idx}
                >
                  <img className="h-[100px]" src={product.image} />
                  <p className="w-[210px]">{product.name}</p>
                  <p className=" w-[20px] absolute left-[340px] ">
                    Rs{product.price}
                  </p>
                  <div className="flex ml-[120px] w-[20px] ">
                    <button>-</button>
                    <p>{product.quantity}</p>
                    <button>+</button>
                  </div>

                  <p className="ml-18">Rs{product.quantity * product.price}</p>
                  <button className="ml-20 absolute right-[70px]">
                    <FaTrashCanArrowUp />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-[25%] p-5 bg-red-200 h-[350px] mt-16 rounded-xl shadow-xl ">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold w-[100%]  text-center">
                CART TOTALS
              </h3>
              <div className="flex justify-between w-[100%] mt-5">
                <p>TOTAL ITEMS</p>
                <p>{totalQuantity}</p>
              </div>
              {/* lining  */}
              <div className="w-[98%] bg-red-50 h-[1px] text-center ml-1 mt-4"></div>
              <div className="flex justify-between w-[100%] mt-6 ">
                <p>Total Price</p>
                <p>Rs{totalPrice}</p>
              </div>
              <div className="w-[98%] bg-red-50 h-[1px] text-center ml-1 mt-4"></div>
              <div className="mt-4">
                <p className="text-md">Shipping:</p>
                <p className="text-yellow-800">shipping to chowkcity,Patna </p>
              </div>
              <button className="bg-red-400 mt-12 px-5 py-2 text-white rounded-full active:bg-white active:text-red-400">
                Proceed to checkout{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
