import React from "react";
import { categories } from "../assets/demoData.jsx";
import Mainimage from "../assets/images/mainimage.jpg";
import { infoData } from "../assets/infoData.jsx";
import Infocard from "../components/Infocard.jsx";

export default function Home() {
  return (
    <div>
      <div className="lg:flex  lg:w-screen lg:ml-7 lg:mt-12 ">
      <div className="lg:w-[20%] lg:ml-14 ">
        {/* categoires section  */}
        <div className="lg:font-bold lg:text-2xl  font-bold mt-1">
          CATEGORIES
        </div>
        <ul className=" lg:ml-7 flex lg:flex-col  lg:gap-0  w-screen lg:w-[350px]  flex-wrap gap-4 mt-3 mb-4 ml-3  ">
          {categories.map((v, idx) => (
            <li
              className="lg:hover:bg-gray-400  lg:p-2 lg:rounded-3xl   lg:w-2/3 text-[10px] lg:text-xl px-3 py-1 bg-gray-200 lg:bg-white rounded-md active:bg-red-600  active:text-white"
              key={idx}
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
      {/*  main image section  */}
      <div className=" lg:w-[60%] lg:ml-10 relative ">
        <img
          className=" lg:w-5xl lg:h-[500px] w-[350px] ml-7 lg:m-0 rounded-xl"
          src={Mainimage}
        />
        <div className=" absolute  lg:top-12 lg:left-8 top-1 left-9">
          <p className="lg:text-5xl font-semibold mt-4 lg:mt-0">
            {" "}
            Shop with
            <span className=" lg:text-6xl  lg:font-extrabold  lg:text-white text-xl">
              {" "}
              New Me
            </span>
          </p>

          <p className=" lg:text-2xl  lg:mt-5 text-xs mt-2">
            Millions + Products{" "}
          </p>
          <button
            className=" lg:text-lg lg:mt-8  lg:px-5 lg:py-1  bg-gray-300 rounded-2xl active:bg-red-400  active:text-white  text-xs px-3 py-1  mt-4
          "
          >
            Shop Now{" "}
          </button>
        </div>
      </div>
     
    </div>
     {/* info section */}
     <div className="flex mt-5 lg:justify-around lg:flex-row flex-col">
        {infoData.map((val, idx) => (
          <Infocard title={val.title} icon={val.icon} des={val.description}
          key={idx} />

        ))}
      </div>
    </div>
  );
}
