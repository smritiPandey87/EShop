import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export default function Productcard({ id, img, title, price, rate }) {
  const dispatch = useDispatch();

  // Convert rating to stars
  const starArr = Array.from({ length: Math.floor(rate) }, (_, i) => (
    <IoStarSharp key={i} />
  ));

  // Convert price to INR
  const p = Math.floor(price * 87.32);

  // Handle adding item to cart
  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const product = {
      id, 
      img,
      title,
      price: p,
    };

    dispatch(addToCart(product));
    
  }

  return (
    <div className="flex flex-col w-[350px] items-center justify-center bg-red-50 rounded-xl relative shadow-md p-4">
      <img className="max-h-[300px]" src={img} alt={title} />

      <div className="flex flex-col items-center">
        <p className="text-xl text-red-600 mt-4">{title}</p>
        <p className="flex items-center justify-center gap-1 text-lg font-semibold">
          <FaRupeeSign /> {p}
        </p>
        <p className="flex text-yellow-400 items-center justify-center mb-3">
          {starArr}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="absolute top-10 right-5 cursor-pointer rounded-full"
        onClick={handleAddToCart}
      >
        <p className="font-bold text-xl text-red-600 hover:text-3xl hover:font-extrabold active:font-extrabold active:text-3xl">
          <CiCirclePlus />
        </p>
      </button>
    </div>
  );
}