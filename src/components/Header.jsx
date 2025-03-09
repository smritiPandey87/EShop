import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <nav>
      <div className="  flex-col lg:flex lg:justify-around  lg:items-center lg:p-8 lg:shadow-lg flex justify-around  p-2 shadow-lg">

        <div className="  lg:flex lg:justify-around lg:items-center flex  items-center ">
        <div className="navbar bg-base-100  lg:hidden md:hidden">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={"/about"}>About</Link>
                </li>
                <li>
               
                <Link to={"/shop"}>shop</Link>
                </li>
                <li>
                <Link to={"/contact"}>Contact</Link>
                </li>

              </ul>
            </div>
          </div>
          {/* <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div> */}
          <div className="navbar-end">
            {/* <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />{" "}
              </svg>
            </button> */}
            <button className="btn btn-ghost btn-circle">
              {/* <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div> */}
            </button>
          </div>
        </div>
          <div className="relative right-16 lg:right-0">
            <Link className=" lg:text-4xl lg:font-italic text-lg " to={"/"}>
              <span className="   lg:text-5xl  text-xl font-bold text-red-600  ">
                N
              </span>
              ew{" "}
              <span className="   lg:text-5xl  text-xl font-bold text-red-600  ">
                M
              </span>
              e
            </Link>
          </div>
          <div className=" lg:flex  lg:gap-6 lg:mx-6 hidden">
            <Link
              className=" lg:hover:text-red-600  lg:hover:font-bold"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="lg:hover:text-red-600  lg:hover:font-bold"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="lg:hover:text-red-600  lg:hover:font-bold "
              to={"/shop"}
            >
              Shop
            </Link>
            <Link
              className=" lg:hover:text-red-600  lg:hover:font-bold"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className=" lg:flex  lg:justify-center  lg:items-center  lg:text-xl   relative">
            <div className=" absolute top-2 lg:top-3 lg:left-3.5 text-xs lg:text-lg mx-2 lg:mx-0 right-30 z-50 lg:z-10 lg:right-0">
              <CiSearch />
            </div>
            <input
              className=" lg:w-2xl lg:h-10   lg:border-2 lg:rounded-lg border-gray-200 bg-gray-100 lg:pl-10  lg:text-sm w-[100px] rounded-lg h-4 text-xs px-5 relative right-12 z-40 lg:z-0 lg:right-0 "
              type="text"
              placeholder="Search for products..."
            />
          </div>

          <div className=" lg:flex  lg:mr-14 lg:ml-6 flex">
            <div className="  lg:mr-14 lg:text-3xl mr-4">
              <IoCartOutline />
            </div>

            <div className="lg:text-xl lg:mr-5 text-xs mr-3">Login</div>
            <div className="lg:text-xl text-xs">|</div>
            <div className="lg:text-xl ml-3.5 text-xs">Register</div>
          </div>
        </div>
        {/* about section not in use */}

        {/* <div className="  lg:hidden w-screen  flex justify-around  ">
          <Link className=" lg:hover:text-red-600  lg:hover:font-bold text-[13px] active:font-bold active:text-red-600" to={"/"}>
            Home
          </Link>
          <Link
            className="lg:hover:text-red-600  lg:hover:font-bold text-[13px] active:font-bold active:text-red-600"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="lg:hover:text-red-600  lg:hover:font-bold text-[13px] active:font-bold active:text-red-600"
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className=" lg:hover:text-red-600  lg:hover:font-bold   text-[13px] active:font-bold active:text-red-600"
            to={"/contact"}
          >
            Contact
          </Link>
        </div> */}
        
      </div>
    </nav>
  );
}
