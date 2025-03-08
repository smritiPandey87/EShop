import React from "react";
import { categories } from "../assets/demoData.jsx";
import Mainimage from "../assets/images/mainimage.jpg";

export default function Home() {
  return (
    <div className="flex w-screen ml-7 mt-12 ">
      <div className="w-[20%] ml-14 ">
        <div className="font-bold">CATEGORIES</div>
        <ul className="ml-7">
          {categories.map((v, idx) => (
            <li className="hover:bg-gray-400 w-2/3 p-2 rounded-3xl" key={idx}>
              {v}
            </li>
          ))}
        </ul>
      </div>
      {/*  main image section  */}
      <div className="w-[60%] ml-10 relative">
        <img className="w-5xl h-[500px]" src={Mainimage} />
        <div className="absolute top-12 left-8">
          <p className="text-5xl font-semibold">
            {" "}
            Shop with
            <span className="text-6xl font-extrabold text-white"> New Me</span>
          </p>

          <p className="text-2xl mt-5">Millions + Products </p>
          <button className="text-lg mt-8 px-5 py-1 bg-gray-300 rounded-2xl active:bg-red-400 active:text-white ease-in-out duration-200">
            Shop Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
