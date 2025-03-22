import React, { useEffect, useState } from "react";
import { categories } from "../assets/demoData.jsx";

import { infoData } from "../assets/infoData.jsx";
import Infocard from "../components/Infocard.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlide = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < totalSlide ? prev + 1 : 1));
      document
        .getElementById(`slide${currentSlide}`)
        ?.scrollIntoView({ behavior: "auto" });
    }, 1500);
    return () => clearInterval(interval);
  }, [currentSlide]);
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
                className="lg:hover:bg-gray-400  lg:p-2 lg:rounded-3xl   lg:w-2/3 text-[10px] lg:text-xl px-3 py-1 bg-red-100 lg:bg-red-100 rounded-md active:bg-red-600  active:text-white "
                key={idx}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
        {/*  main image section  */}
        <div className=" lg:w-[60%] lg:ml-10 relative ">
          {/* <img
          className=" lg:w-5xl lg:h-[500px] w-[350px] ml-7 lg:m-0 rounded-xl"
          src={Mainimage}
        /> */}
          {/* add coursel */}
          <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
              <Link className=" w-full" to={"/shop"}>
                <img
                  src="https://img.freepik.com/free-psd/sustainable-slow-fashion-store-horizontal-banner-template_23-2149371060.jpg"
                  className="w-full max-h-[500px] rounded-xl"
                />
              </Link>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Link className="w-full " to={"/shop"}>
                <img 
                  src="https://i.pinimg.com/736x/b7/f5/ce/b7f5ce68ff3166b351a6e3c6ee934020.jpg"
                  className="w-full  max-h-[500px] rounded-xl"
                />
              </Link>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Link className="w-full" to={"/shop"}>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-charity-event-facebook-post_23-2149387307.jpg"
                  className="w-full max-h-[500px] rounded-xl"
                />
              </Link>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <Link className="w-full" to={"/shop"}>
                <img
                  src="https://img.freepik.com/free-psd/online-shopping-banner-design_23-2148545495.jpg"
                  className="w-full max-h-[500px] rounded-xl"
                />
              </Link>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* text section  */}
          <div className=" absolute  lg:top-12 lg:left-8 top-1 left-9">
            {/* <p className="lg:text-5xl font-semibold mt-4 lg:mt-0">
              {" "}
              Shop with
              <span className=" lg:text-6xl  lg:font-extrabold  lg:text-white text-xl">
                {" "}
                New Me
              </span>
            </p>

            <p className=" lg:text-2xl  lg:mt-5 text-xs mt-2">
              Millions + Products{" "}
            </p> */}
            {/* <button
              className=" lg:text-lg lg:mt-8  lg:px-5 lg:py-1  bg-gray-300 rounded-2xl active:bg-red-400  active:text-white  text-xs px-3 py-1  mt-4
          "
            >
              Shop Now{" "}
            </button> */}
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="flex mt-5 lg:justify-around lg:flex-row flex-col">
        {infoData.map((val, idx) => (
          <Infocard
            title={val.title}
            icon={val.icon}
            des={val.description}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
