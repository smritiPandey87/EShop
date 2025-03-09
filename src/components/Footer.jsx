import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white lg:mt-5  ">
      <div className="flex justify-around gap-5 ">
        <div  className="lg:mt-8 m-4">
          <div className="lg:text-xl">New Me</div>
          <p className="font-thin ">
            Your one-stop shop for all your needs. Shop with <br/>
            us and experience
            the best online shopping 
            <br/>experience.{" "}
          </p>
        </div>
        <div className="lg:mt-8 flex flex-col m-4">
          <h2 className="lg:text-xl">Quick Links</h2>
          <Link  className="font-thin"to={"/"}>Home</Link>
          <Link  className="font-thin"to={"/shop"}>Shop</Link>
          <Link  className="font-thin"to={"/about"}>About</Link>
          <Link className="font-thin"to={"/contact"}>Contact</Link>
        </div>
        <div className="lg:mt-8 m-4">
          <h2 className="lg:text-xl ">Follow Us</h2>
          <div className="flex lg:gap-4 lg:text-xl font-thin lg:mt-3 gap-2 mt-1.5">
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
            <FaGithub />
          </div>
          <div className="lg:mt-5 ">
            <input className=" border border-gray-100 lg:px-3 lg:py-2 lg:text-lg border-l-2 border-y-2 outline-0 mt-3 w-[100px] rounded-lg lg:w-[300px]" type="text" placeholder="Your email" />
            <button className="bg-red-600 text-white lg:px-5 lg:py-2 text-lg  relative right-10 border border-gray-100 border-l-2 border-y-2 hidden lg:inline ">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="w-[90%] bg-gray-200 h-[1px] ml-20 mt-5">

      </div>
      {/* copy right div */}
      <div className="flex justify-around  ">
        <p className="flex  items-center mt-5 gap-2 ">
          <span>
            <RiCopyrightLine />
          </span>
          New Me. All rights reserved.
        </p>
        <div className="flex gap-2 mt-5">
          <span>Privacy Policy</span>
          <span>Terms of service </span>
        </div>
      </div>
    </div>
  );
}
