import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa6";
import {useDispatch} from "react-redux";
import { addToCart } from "../Redux/cartSlice";
  

export default function Productcard({ img, title, price, rate }) {
  const floorVal = Math.floor(rate);
  const starArr = [];
  const dispatch= useDispatch ();
  for (let i = 0; i < floorVal; i++) {
    starArr.push(<IoStarSharp />);
  }
   const p= Math.floor(price*87.32)
    
   function handleAddToCart (e,product){
       e.preventDefault()
       e.stopPropagation ()
       dispatch (addToCart(product)) 
       alert("Product is added to cart")
   }
  return (
    <div className="flex  flex-col w-[350px] items-center justify-center bg-red-50 rouned-xl relative">
      <img className="max-h-[300px]" src={img} />
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-xl text-red-600 m-4 flex justify-center items-center ">{title} </p>
          <p className="flex items-center justify-center gap-1"> <FaRupeeSign />{ p }</p>
          <p className="flex text-yellow-400 items-center  justify-center mb-3 ">{starArr}</p>
        </div>
        
        <button className="absolute  top-10 right-5  cursor-pointer   rounded-full" onClick={(e)=>handleAddToCart(e,{img,title,price:p })}> 
         <p className="font-bold text-xl text-red-600 lg:hover:text-3xl lg:hover:font-extrabold active:font-extrabold active:text-3xl"><CiCirclePlus /></p> 

        </button>
      </div>
    </div>
  );    
}
