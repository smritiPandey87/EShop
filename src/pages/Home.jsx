import React from "react";
import { categories } from "../assets/demoData.jsx";
import Mainimage from "../assets/images/mainimage.jpg";

export default function Home() {
  return (
    <div className="flex w-screen ml-7">
      <div className="w-[20%]">
        <div>Categories</div>
        <ul>
          {categories.map((v, idx) => (
            <li key={idx}>{v}</li>
          ))}
        </ul>
      </div>
      {/*  main image section  */}
      <div className="w-[60%]">
        <img src={Mainimage} />
        <div className="mb-20">
          <p> shop with New Me</p>

          <p>Millions + Products </p>
          <button>Shop Now </button>
        </div>
      </div>
    </div>
  );
}
