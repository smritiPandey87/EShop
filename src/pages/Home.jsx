import React from "react";
import { categories } from "../assets/demoData.jsx";
import Mainimage from "../assets/images/mainimage.jpg";

export default function Home() {
  return (
    <div className="lg:flex  lg:w-screen lg:ml-7 lg:mt-12 ">
      <div className="lg:w-[20%] lg:ml-14 ">
        {/* categoires section  */}
        <div className="lg:font-bold">CATEGORIES</div>
        <ul className=" lg:ml-7 flex lg:flex-col">
          {categories.map((v, idx) => (
            <li
              className="lg:hover:bg-gray-400 lg:w-2/3 lg:p-2 lg:rounded-3xl active:bg-gray-400 m-5"
              key={idx}
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
      {/*  main image section  */}
      <div className=" lg:w-[60%] lg:ml-10 lg:relative">
        <img className=" lg:w-5xl lg:h-[500px]" src={Mainimage} />
        <div className=" lg:absolute  lg:top-12 lg:left-8">
          <p className="lg:text-5xl lg:font-semibold">
            {" "}
            Shop with
            <span className=" lg:text-6xl  lg:font-extrabold  lg:text-white">
              {" "}
              New Me
            </span>
          </p>

          <p className=" lg:text-2xl  lg:mt-5">Millions + Products </p>
          <button className=" lg:text-lg lg:mt-8  lg:px-5 lg:py-1  lg:bg-gray-300 lg:rounded-2xl lg:active:bg-red-400  lg:active:text-white lg:ease-in-out lg:duration-200">
            Shop Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
