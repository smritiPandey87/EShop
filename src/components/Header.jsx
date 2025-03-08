import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <nav>
      <div className="flex  justify-around items-center p-8 shadow-lg ">
        <div>
          <Link className="text-4xl font-italic" to={"/"}>
            <span className="  text-5xl text-red-600 font-bold">N</span>ew{" "}
            <span className="  text-5xl text-red-600 font-bold ">M</span>e
          </Link>
        </div>
        <div className=" flex justify-center items-center text-xl  relative">
          <div className=" absolute left-3.5">
            <CiSearch />
          </div>
          <input
            className="w-2xl h-10  border-2 rounded-lg border-gray-200 bg-gray-50 pl-10 text-sm"
            type="text"
            placeholder="Search for products..."
          />
        </div>

        <div className="flex mr-16">
          <div className=" mr-14 text-3xl">
            <IoCartOutline />
          </div>

          <div className="text-xl mr-5">Login</div>
          <div className="text-xl">|</div>
          <div className="text-xl ml-3.5">Register</div>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
